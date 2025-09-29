#!/usr/bin/env node

/**
 * V0-Generated Domain Testing Script
 * Tests specific pages across all domains to identify issues
 */

const https = require('https');
const http = require('http');

const domains = [
  'www.summerlinwestrealestate.com',
  'summerlinwestrealestate.com', 
  'summerlinwestrealestate.vercel.app'
];

const testPages = [
  '/',
  '/about',
  '/properties',
  '/communities',
  '/contact',
  '/market-reports',
  '/service-area/casa-rosa',
  '/the-vistas',
  '/api/robots',
  '/api/sitemap'
];

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function makeRequest(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    const startTime = Date.now();
    
    const req = protocol.get(url, (res) => {
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
          location: res.headers['location']
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
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        error: 'Timeout',
        status: 0,
        responseTime: Date.now() - startTime
      });
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

async function testDomain(domain) {
  console.log(`\n${colors.bold}${colors.blue}Testing Domain: ${domain}${colors.reset}`);
  console.log('='.repeat(60));
  
  const results = [];
  
  for (const page of testPages) {
    const url = `https://${domain}${page}`;
    process.stdout.write(`Testing ${page.padEnd(25)} `);
    
    const result = await makeRequest(url);
    results.push({ page, url, ...result });
    
    if (result.error) {
      console.log(`${colors.red}✗ ERROR: ${result.error}${colors.reset}`);
    } else {
      console.log(`${formatStatus(result.status)} ${formatTime(result.responseTime)} ${result.contentLength} bytes`);
      
      if (result.location) {
        console.log(`  ${colors.yellow}→ Redirects to: ${result.location}${colors.reset}`);
      }
      
      if (result.cacheControl) {
        console.log(`  ${colors.blue}Cache: ${result.cacheControl}${colors.reset}`);
      }
      
      if (result.xCacheBust) {
        console.log(`  ${colors.blue}Cache-Bust: ${result.xCacheBust}${colors.reset}`);
      }
    }
  }
  
  return results;
}

async function compareResults(allResults) {
  console.log(`\n${colors.bold}${colors.blue}COMPARISON ANALYSIS${colors.reset}`);
  console.log('='.repeat(60));
  
  const issues = [];
  
  for (const page of testPages) {
    const pageResults = allResults.map(domainResult => 
      domainResult.find(r => r.page === page)
    );
    
    const statuses = pageResults.map(r => r?.status || 0);
    const responseTimes = pageResults.map(r => r?.responseTime || 0);
    const contentLengths = pageResults.map(r => r?.contentLength || 0);
    
    // Check for inconsistencies
    const uniqueStatuses = [...new Set(statuses)];
    const uniqueLengths = [...new Set(contentLengths)];
    
    if (uniqueStatuses.length > 1) {
      issues.push({
        page,
        type: 'status',
        details: `Different status codes: ${statuses.join(', ')}`
      });
    }
    
    if (uniqueLengths.length > 1 && !uniqueLengths.includes(0)) {
      const maxDiff = Math.max(...contentLengths) - Math.min(...contentLengths);
      if (maxDiff > 1000) {
        issues.push({
          page,
          type: 'content',
          details: `Different content lengths: ${contentLengths.join(', ')} bytes`
        });
      }
    }
    
    const avgTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    const maxTime = Math.max(...responseTimes);
    if (maxTime > avgTime * 2) {
      issues.push({
        page,
        type: 'performance',
        details: `Slow response: ${maxTime}ms vs avg ${avgTime.toFixed(0)}ms`
      });
    }
  }
  
  if (issues.length === 0) {
    console.log(`${colors.green}✓ No issues found - all domains serving consistent content${colors.reset}`);
  } else {
    console.log(`${colors.red}✗ Found ${issues.length} issues:${colors.reset}`);
    issues.forEach(issue => {
      console.log(`  ${colors.yellow}${issue.page}${colors.reset}: ${issue.details}`);
    });
  }
}

async function main() {
  console.log(`${colors.bold}${colors.blue}V0 Domain Testing Script${colors.reset}`);
  console.log(`${colors.blue}Testing ${domains.length} domains across ${testPages.length} pages${colors.reset}`);
  
  const allResults = [];
  
  for (const domain of domains) {
    const results = await testDomain(domain);
    allResults.push(results);
  }
  
  await compareResults(allResults);
  
  console.log(`\n${colors.bold}${colors.green}Testing Complete!${colors.reset}`);
  console.log(`${colors.blue}Check the results above for any domain inconsistencies.${colors.reset}`);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testDomain, makeRequest };
