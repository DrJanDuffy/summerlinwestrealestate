#!/usr/bin/env node

/**
 * Cloudflare Testing Script for Summerlin West Real Estate
 * Tests Cloudflare integration and performance
 */

const https = require('https');
const http = require('http');
const { performance } = require('perf_hooks');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const config = {
  domain: 'www.summerlinwestrealestate.com',
  testUrls: [
    'https://www.summerlinwestrealestate.com',
    'https://www.summerlinwestrealestate.com/properties',
    'https://www.summerlinwestrealestate.com/market-reports',
    'https://www.summerlinwestrealestate.com/api/health'
  ],
  expectedHeaders: [
    'cf-ray',
    'cf-cache-status',
    'cf-request-id',
    'server'
  ]
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const startTime = performance.now();
    const protocol = url.startsWith('https') ? https : http;
    
    const req = protocol.get(url, (res) => {
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          responseTime: responseTime,
          data: data
        });
      });
    });
    
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function testCloudflareHeaders(url) {
  try {
    const response = await makeRequest(url);
    const headers = response.headers;
    
    log(`\n🔍 Testing: ${url}`, 'cyan');
    log(`Status: ${response.statusCode}`, response.statusCode === 200 ? 'green' : 'red');
    log(`Response Time: ${response.responseTime.toFixed(2)}ms`, 'blue');
    
    const cloudflareHeaders = config.expectedHeaders.filter(header => headers[header]);
    
    if (cloudflareHeaders.length > 0) {
      log('✅ Cloudflare Headers Found:', 'green');
      cloudflareHeaders.forEach(header => {
        log(`   ${header}: ${headers[header]}`, 'green');
      });
    } else {
      log('❌ No Cloudflare Headers Found', 'red');
    }
    
    // Check for Cloudflare-specific indicators
    if (headers['cf-ray']) {
      log('✅ Cloudflare CDN Active', 'green');
    }
    
    if (headers['cf-cache-status']) {
      log(`📊 Cache Status: ${headers['cf-cache-status']}`, 'blue');
    }
    
    return {
      url,
      statusCode: response.statusCode,
      responseTime: response.responseTime,
      cloudflareActive: cloudflareHeaders.length > 0,
      cacheStatus: headers['cf-cache-status'] || 'unknown'
    };
    
  } catch (error) {
    log(`❌ Error testing ${url}: ${error.message}`, 'red');
    return {
      url,
      error: error.message,
      cloudflareActive: false
    };
  }
}

async function testSSLConfiguration() {
  log('\n🔒 Testing SSL Configuration', 'yellow');
  log('='.repeat(50));
  
  try {
    const response = await makeRequest(`https://${config.domain}`);
    
    if (response.statusCode === 200) {
      log('✅ HTTPS Working', 'green');
    } else {
      log(`❌ HTTPS Issue: ${response.statusCode}`, 'red');
    }
    
    // Check for security headers
    const securityHeaders = [
      'strict-transport-security',
      'x-content-type-options',
      'x-frame-options',
      'x-xss-protection'
    ];
    
    log('\n🛡️ Security Headers:', 'cyan');
    securityHeaders.forEach(header => {
      if (response.headers[header]) {
        log(`✅ ${header}: ${response.headers[header]}`, 'green');
      } else {
        log(`❌ ${header}: Missing`, 'red');
      }
    });
    
  } catch (error) {
    log(`❌ SSL Test Failed: ${error.message}`, 'red');
  }
}

async function testPerformance() {
  log('\n⚡ Performance Testing', 'yellow');
  log('='.repeat(50));
  
  const results = [];
  
  for (const url of config.testUrls) {
    const result = await testCloudflareHeaders(url);
    results.push(result);
    
    // Add delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Calculate average response time
  const validResults = results.filter(r => r.responseTime);
  if (validResults.length > 0) {
    const avgResponseTime = validResults.reduce((sum, r) => sum + r.responseTime, 0) / validResults.length;
    log(`\n📊 Average Response Time: ${avgResponseTime.toFixed(2)}ms`, 'blue');
    
    if (avgResponseTime < 1000) {
      log('✅ Excellent Performance (< 1s)', 'green');
    } else if (avgResponseTime < 2000) {
      log('✅ Good Performance (< 2s)', 'green');
    } else {
      log('⚠️ Performance Could Be Improved (> 2s)', 'yellow');
    }
  }
  
  return results;
}

async function testCacheEffectiveness() {
  log('\n💾 Cache Effectiveness Testing', 'yellow');
  log('='.repeat(50));
  
  const testUrl = `https://${config.domain}`;
  
  try {
    // First request (cold cache)
    log('Making first request (cold cache)...', 'cyan');
    const firstRequest = await makeRequest(testUrl);
    log(`First Request Cache Status: ${firstRequest.headers['cf-cache-status'] || 'unknown'}`, 'blue');
    
    // Wait a moment
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Second request (should be cached)
    log('Making second request (should be cached)...', 'cyan');
    const secondRequest = await makeRequest(testUrl);
    log(`Second Request Cache Status: ${secondRequest.headers['cf-cache-status'] || 'unknown'}`, 'blue');
    
    if (secondRequest.headers['cf-cache-status'] === 'HIT') {
      log('✅ Cache Working Effectively', 'green');
    } else if (secondRequest.headers['cf-cache-status'] === 'MISS') {
      log('⚠️ Cache Miss - May Need Configuration', 'yellow');
    } else {
      log('ℹ️ Cache Status Unknown', 'blue');
    }
    
  } catch (error) {
    log(`❌ Cache Test Failed: ${error.message}`, 'red');
  }
}

async function generateReport(results) {
  log('\n📋 Cloudflare Integration Report', 'yellow');
  log('='.repeat(60));
  
  const cloudflareActive = results.filter(r => r.cloudflareActive).length;
  const totalTests = results.length;
  
  log(`\n🎯 Overall Status:`, 'cyan');
  log(`   Tests Run: ${totalTests}`, 'blue');
  log(`   Cloudflare Active: ${cloudflareActive}/${totalTests}`, cloudflareActive === totalTests ? 'green' : 'yellow');
  
  if (cloudflareActive === totalTests) {
    log('✅ Cloudflare Integration Successful!', 'green');
  } else if (cloudflareActive > 0) {
    log('⚠️ Partial Cloudflare Integration', 'yellow');
  } else {
    log('❌ Cloudflare Integration Not Detected', 'red');
  }
  
  log('\n📊 Detailed Results:', 'cyan');
  results.forEach((result, index) => {
    if (result.error) {
      log(`   ${index + 1}. ${result.url}: ERROR - ${result.error}`, 'red');
    } else {
      const status = result.cloudflareActive ? '✅' : '❌';
      log(`   ${index + 1}. ${result.url}: ${status} ${result.responseTime?.toFixed(2)}ms`, 
          result.cloudflareActive ? 'green' : 'red');
    }
  });
  
  log('\n🔧 Next Steps:', 'cyan');
  if (cloudflareActive === 0) {
    log('   1. Verify DNS nameservers are updated', 'yellow');
    log('   2. Check Cloudflare domain configuration', 'yellow');
    log('   3. Wait for DNS propagation (24-48 hours)', 'yellow');
  } else if (cloudflareActive < totalTests) {
    log('   1. Check page rules configuration', 'yellow');
    log('   2. Verify SSL/TLS settings', 'yellow');
    log('   3. Review cache settings', 'yellow');
  } else {
    log('   1. Monitor performance metrics', 'green');
    log('   2. Optimize cache rules if needed', 'green');
    log('   3. Set up monitoring alerts', 'green');
  }
}

async function main() {
  log(`${colors.bold}${colors.blue}CLOUDFLARE INTEGRATION TEST${colors.reset}`);
  log('='.repeat(60));
  log('Summerlin West Real Estate - Cloudflare Testing');
  log('='.repeat(60));
  
  try {
    await testSSLConfiguration();
    const results = await testPerformance();
    await testCacheEffectiveness();
    await generateReport(results);
    
    log('\n✅ Cloudflare testing complete!', 'green');
    
  } catch (error) {
    log(`\n❌ Testing failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  testCloudflareHeaders,
  testSSLConfiguration,
  testPerformance,
  testCacheEffectiveness,
  generateReport
};

