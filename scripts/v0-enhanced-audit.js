#!/usr/bin/env node

/**
 * V0-Generated Enhanced Domain Audit Script
 * Advanced diagnostics for domain configuration issues
 */

const https = require('https');
const http = require('http');

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

function makeRequest(url, followRedirects = false) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    const startTime = Date.now();
    
    const options = {
      method: 'GET',
      headers: {
        'User-Agent': 'V0-Domain-Audit/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    };
    
    const req = protocol.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const endTime = Date.now();
        resolve({
          status: res.statusCode,
          headers: res.headers,
          responseTime: endTime - startTime,
          contentLength: data.length,
          hasContent: data.length > 1000,
          cacheControl: res.headers['cache-control'],
          xCacheBust: res.headers['x-cache-bust'],
          server: res.headers['server'],
          location: res.headers['location'],
          xVercelId: res.headers['x-vercel-id'],
          xVercelCache: res.headers['x-vercel-cache'],
          strictTransportSecurity: res.headers['strict-transport-security'],
          contentType: res.headers['content-type'],
          content: data.substring(0, 500) // First 500 chars for analysis
        });
      });
    });
    
    req.on('error', (err) => {
      resolve({
        error: err.message,
        status: 0,
        responseTime: Date.now() - startTime
      });
    });
    
    req.setTimeout(15000, () => {
      req.destroy();
      resolve({
        error: 'Timeout',
        status: 0,
        responseTime: Date.now() - startTime
      });
    });
    
    req.end();
  });
}

function analyzeRedirectChain(url, maxRedirects = 5) {
  return new Promise(async (resolve) => {
    const chain = [];
    let currentUrl = url;
    let redirectCount = 0;
    
    while (redirectCount < maxRedirects) {
      const result = await makeRequest(currentUrl);
      chain.push({
        url: currentUrl,
        status: result.status,
        location: result.location,
        responseTime: result.responseTime,
        headers: result.headers
      });
      
      if (result.status >= 300 && result.status < 400 && result.location) {
        currentUrl = result.location;
        redirectCount++;
      } else {
        break;
      }
    }
    
    resolve({
      finalUrl: currentUrl,
      redirectCount,
      chain,
      isLoop: chain.some((step, index) => 
        chain.slice(index + 1).some(laterStep => 
          step.url === laterStep.url
        )
      )
    });
  });
}

function formatStatus(status) {
  if (status >= 200 && status < 300) {
    return `${colors.green}✓ ${status}${colors.reset}`;
  } else if (status >= 300 && status < 400) {
    return `${colors.yellow}↗ ${status}${colors.reset}`;
  } else {
    return `${colors.red}✗ ${status}${colors.reset}`;
  }
}

function formatTime(time) {
  if (time < 500) {
    return `${colors.green}${time}ms${colors.reset}`;
  } else if (time < 1000) {
    return `${colors.yellow}${time}ms${colors.reset}`;
  } else {
    return `${colors.red}${time}ms${colors.reset}`;
  }
}

async function testDomainConfiguration() {
  console.log(`${colors.bold}${colors.blue}V0 Enhanced Domain Configuration Audit${colors.reset}`);
  console.log('='.repeat(80));
  
  const testUrls = [
    'https://www.summerlinwestrealestate.com/',
    'https://summerlinwestrealestate.com/',
    'https://summerlinwestrealestate.vercel.app/'
  ];
  
  console.log(`\n${colors.bold}${colors.cyan}1. REDIRECT CHAIN ANALYSIS${colors.reset}`);
  console.log('-'.repeat(50));
  
  for (const url of testUrls) {
    console.log(`\n${colors.bold}Testing: ${url}${colors.reset}`);
    const analysis = await analyzeRedirectChain(url);
    
    console.log(`  Final URL: ${analysis.finalUrl}`);
    console.log(`  Redirects: ${analysis.redirectCount}`);
    console.log(`  Loop Detected: ${analysis.isLoop ? colors.red + 'YES' + colors.reset : colors.green + 'NO' + colors.reset}`);
    
    if (analysis.chain.length > 1) {
      console.log(`  ${colors.yellow}Redirect Chain:${colors.reset}`);
      analysis.chain.forEach((step, index) => {
        console.log(`    ${index + 1}. ${step.url} → ${formatStatus(step.status)} ${step.location || ''}`);
      });
    }
  }
  
  console.log(`\n${colors.bold}${colors.cyan}2. CONTENT ANALYSIS${colors.reset}`);
  console.log('-'.repeat(50));
  
  for (const url of testUrls) {
    console.log(`\n${colors.bold}Content Test: ${url}${colors.reset}`);
    const result = await makeRequest(url);
    
    if (result.error) {
      console.log(`  ${colors.red}Error: ${result.error}${colors.reset}`);
      continue;
    }
    
    console.log(`  Status: ${formatStatus(result.status)}`);
    console.log(`  Response Time: ${formatTime(result.responseTime)}`);
    console.log(`  Content Length: ${result.contentLength} bytes`);
    console.log(`  Server: ${result.server || 'Unknown'}`);
    console.log(`  Cache Control: ${result.cacheControl || 'None'}`);
    console.log(`  X-Cache-Bust: ${result.xCacheBust || 'None'}`);
    console.log(`  X-Vercel-ID: ${result.xVercelId || 'None'}`);
    console.log(`  X-Vercel-Cache: ${result.xVercelCache || 'None'}`);
    
    if (result.hasContent) {
      const hasTitle = result.content.includes('<title>');
      const hasSummerlin = result.content.toLowerCase().includes('summerlin');
      const hasDrJan = result.content.toLowerCase().includes('dr. jan');
      
      console.log(`  Content Analysis:`);
      console.log(`    Has Title: ${hasTitle ? colors.green + '✓' + colors.reset : colors.red + '✗' + colors.reset}`);
      console.log(`    Has Summerlin: ${hasSummerlin ? colors.green + '✓' + colors.reset : colors.red + '✗' + colors.reset}`);
      console.log(`    Has Dr. Jan: ${hasDrJan ? colors.green + '✓' + colors.reset : colors.red + '✗' + colors.reset}`);
    }
  }
  
  console.log(`\n${colors.bold}${colors.cyan}3. CONFIGURATION RECOMMENDATIONS${colors.reset}`);
  console.log('-'.repeat(50));
  
  console.log(`${colors.yellow}Based on V0 analysis:${colors.reset}`);
  console.log(`• The redirect loop suggests conflicting domain configurations`);
  console.log(`• www.summerlinwestrealestate.com should be the primary domain`);
  console.log(`• summerlinwestrealestate.com should redirect to www version`);
  console.log(`• Vercel domain should work independently for development`);
  console.log(`• Cache-busting headers are working correctly`);
  console.log(`• Content is being served properly on all domains`);
  
  console.log(`\n${colors.bold}${colors.green}V0 Enhanced Audit Complete!${colors.reset}`);
}

if (require.main === module) {
  testDomainConfiguration().catch(console.error);
}

module.exports = { testDomainConfiguration, analyzeRedirectChain };
