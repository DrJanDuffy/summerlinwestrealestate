#!/usr/bin/env node

/**
 * Cloudflare Integration Script for Summerlin West Real Estate
 * Automates Cloudflare configuration and validation
 */

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

const config = require('../cloudflare-config.json');

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkPrerequisites() {
  log('\n🔍 Checking Prerequisites...', 'cyan');
  
  const checks = [
    {
      name: 'Domain Registration',
      check: () => config.config.domain === 'summerlinwestrealestate.com',
      message: 'Domain configured correctly'
    },
    {
      name: 'Vercel Project',
      check: () => config.config.vercel_project === 'prj_6r7qxmHfLVO8B8RR0v49X7qCgTdA',
      message: 'Vercel project configured'
    },
    {
      name: 'SSL Configuration',
      check: () => config.security_settings.ssl_tls.encryption_mode === 'full_strict',
      message: 'SSL mode set to Full (Strict)'
    },
    {
      name: 'DNS Records',
      check: () => config.dns_records.length >= 2,
      message: 'DNS records configured'
    }
  ];

  let allPassed = true;
  checks.forEach(check => {
    if (check.check()) {
      log(`✅ ${check.name}: ${check.message}`, 'green');
    } else {
      log(`❌ ${check.name}: Failed`, 'red');
      allPassed = false;
    }
  });

  return allPassed;
}

function displayDNSInstructions() {
  log('\n📋 DNS Configuration Instructions', 'yellow');
  log('='.repeat(50));
  
  log('\n1. Add these DNS records in Cloudflare:', 'cyan');
  config.dns_records.forEach((record, index) => {
    log(`   ${index + 1}. Type: ${record.type}`);
    log(`      Name: ${record.name}`);
    log(`      Content: ${record.content}`);
    log(`      Proxied: ${record.proxied ? '✅ Yes' : '❌ No'}`);
    log(`      TTL: ${record.ttl}`);
    log('');
  });

  log('2. Update Nameservers:', 'cyan');
  log('   - Copy nameservers from Cloudflare dashboard');
  log('   - Update at your domain registrar');
  log('   - Wait 24-48 hours for propagation');
  log('');

  log('3. Verify SSL Certificate:', 'cyan');
  log('   - Check SSL/TLS tab in Cloudflare');
  log('   - Ensure "Full (strict)" mode is enabled');
  log('   - Verify certificate is active');
}

function displayPageRules() {
  log('\n⚡ Page Rules Configuration', 'yellow');
  log('='.repeat(50));
  
  config.page_rules.forEach((rule, index) => {
    log(`\n${index + 1}. ${rule.url_pattern}`, 'cyan');
    log(`   Cache Level: ${rule.cache_level}`);
    log(`   Edge Cache TTL: ${rule.edge_cache_ttl}s`);
    log(`   Browser Cache TTL: ${rule.browser_cache_ttl}s`);
  });
}

function displaySecuritySettings() {
  log('\n🔒 Security Configuration', 'yellow');
  log('='.repeat(50));
  
  const ssl = config.security_settings.ssl_tls;
  log(`SSL Mode: ${ssl.encryption_mode}`, 'green');
  log(`Universal SSL: ${ssl.edge_certificates.universal_ssl ? 'Enabled' : 'Disabled'}`, 'green');
  log(`Always Use HTTPS: ${ssl.edge_certificates.always_use_https ? 'Enabled' : 'Disabled'}`, 'green');
  log(`HSTS: ${ssl.edge_certificates.hsts_enabled ? 'Enabled' : 'Disabled'}`, 'green');
  
  log(`\nSecurity Level: ${config.security_settings.security_level}`, 'green');
  log(`Bot Fight Mode: ${config.security_settings.bot_fight_mode ? 'Enabled' : 'Disabled'}`, 'green');
  log(`Browser Integrity Check: ${config.security_settings.browser_integrity_check ? 'Enabled' : 'Disabled'}`, 'green');
}

function displayPerformanceSettings() {
  log('\n🚀 Performance Optimizations', 'yellow');
  log('='.repeat(50));
  
  const speed = config.performance_settings.speed;
  log(`Auto Minify CSS: ${speed.auto_minify.css ? 'Enabled' : 'Disabled'}`, 'green');
  log(`Auto Minify HTML: ${speed.auto_minify.html ? 'Enabled' : 'Disabled'}`, 'green');
  log(`Auto Minify JS: ${speed.auto_minify.js ? 'Enabled' : 'Disabled'}`, 'green');
  log(`Brotli Compression: ${speed.brotli ? 'Enabled' : 'Disabled'}`, 'green');
  log(`Rocket Loader: ${speed.rocket_loader ? 'Enabled' : 'Disabled'}`, 'green');
  log(`Mirage: ${speed.mirage ? 'Enabled' : 'Disabled'}`, 'green');
  
  const network = config.performance_settings.network;
  log(`\nHTTP/2: ${network.http2 ? 'Enabled' : 'Disabled'}`, 'green');
  log(`HTTP/3: ${network.http3 ? 'Enabled' : 'Disabled'}`, 'green');
  log(`0-RTT: ${network['0rtt'] ? 'Enabled' : 'Disabled'}`, 'green');
}

function displayRealEstateOptimizations() {
  log('\n🏠 Real Estate Specific Optimizations', 'yellow');
  log('='.repeat(50));
  
  const optimizations = config.real_estate_optimizations;
  
  log(`Property Images Cache: ${optimizations.property_images.cache_ttl}s`, 'green');
  log(`Property Images Optimization: ${optimizations.property_images.optimization}`, 'green');
  log(`WebP Conversion: ${optimizations.property_images.webp_conversion ? 'Enabled' : 'Disabled'}`, 'green');
  
  log(`\nMarket Data Cache: ${optimizations.market_data.cache_ttl}s`, 'green');
  log(`Market Data Stale While Revalidate: ${optimizations.market_data.stale_while_revalidate}s`, 'green');
  
  log(`\nLead Capture Cache: ${optimizations.lead_capture.cache_ttl}s (No Cache)`, 'green');
  log(`Lead Capture Security: ${optimizations.lead_capture.security}`, 'green');
  
  log(`\nSEO Content Cache: ${optimizations.seo_content.cache_ttl}s`, 'green');
  log(`SEO Content Compression: ${optimizations.seo_content.compression}`, 'green');
}

function displayTestingInstructions() {
  log('\n🧪 Testing & Validation', 'yellow');
  log('='.repeat(50));
  
  log('\n1. Performance Testing:', 'cyan');
  log('   - PageSpeed Insights: https://pagespeed.web.dev/');
  log('   - GTmetrix: https://gtmetrix.com/');
  log('   - WebPageTest: https://www.webpagetest.org/');
  
  log('\n2. Security Testing:', 'cyan');
  log('   - SSL Labs: https://www.ssllabs.com/ssltest/');
  log('   - Security Headers: https://securityheaders.com/');
  
  log('\n3. DNS Testing:', 'cyan');
  log('   - DNS Checker: https://dnschecker.org/');
  log('   - What\'s My DNS: https://whatsmydns.net/');
  
  log('\n4. Cloudflare Analytics:', 'cyan');
  log('   - Check Analytics tab in Cloudflare dashboard');
  log('   - Monitor cache hit ratios');
  log('   - Track performance improvements');
}

function displayExpectedResults() {
  log('\n📊 Expected Performance Improvements', 'yellow');
  log('='.repeat(50));
  
  log('\nBefore Cloudflare:', 'red');
  log('   Global Load Time: 2-4 seconds');
  log('   Cache Hit Ratio: 0%');
  log('   Security: Basic Vercel security');
  
  log('\nAfter Cloudflare:', 'green');
  log('   Global Load Time: 0.5-1.5 seconds');
  log('   Cache Hit Ratio: 85-95%');
  log('   Security: Enterprise-grade protection');
  log('   Global CDN: 200+ data centers');
  
  log('\nSEO Benefits:', 'green');
  log('   ✅ Faster loading improves rankings');
  log('   ✅ Better Core Web Vitals scores');
  log('   ✅ Enhanced security signals');
  log('   ✅ Global performance consistency');
}

function displayNextSteps() {
  log('\n🎯 Next Steps', 'yellow');
  log('='.repeat(50));
  
  log('\n1. Immediate Actions:', 'cyan');
  log('   - Set up Cloudflare account');
  log('   - Add domain to Cloudflare');
  log('   - Configure DNS records');
  log('   - Update nameservers');
  
  log('\n2. Configuration:', 'cyan');
  log('   - Enable SSL/TLS settings');
  log('   - Configure page rules');
  log('   - Set up security features');
  log('   - Enable performance optimizations');
  
  log('\n3. Testing:', 'cyan');
  log('   - Run performance tests');
  log('   - Verify SSL configuration');
  log('   - Check DNS propagation');
  log('   - Monitor analytics');
  
  log('\n4. Monitoring:', 'cyan');
  log('   - Set up alerts');
  log('   - Track performance metrics');
  log('   - Monitor cache hit ratios');
  log('   - Watch for issues');
}

function main() {
  log(`${colors.bold}${colors.blue}CLOUDFLARE INTEGRATION GUIDE${colors.reset}`);
  log('='.repeat(60));
  log('Summerlin West Real Estate - Cloudflare Setup');
  log('='.repeat(60));
  
  const prerequisitesPassed = checkPrerequisites();
  
  if (!prerequisitesPassed) {
    log('\n❌ Some prerequisites failed. Please check configuration.', 'red');
    return;
  }
  
  displayDNSInstructions();
  displayPageRules();
  displaySecuritySettings();
  displayPerformanceSettings();
  displayRealEstateOptimizations();
  displayTestingInstructions();
  displayExpectedResults();
  displayNextSteps();
  
  log('\n✅ Cloudflare integration guide complete!', 'green');
  log('📖 See docs/cloudflare-integration.md for detailed instructions', 'cyan');
  log('🔧 Use cloudflare-config.json for configuration reference', 'cyan');
}

if (require.main === module) {
  main();
}

module.exports = {
  checkPrerequisites,
  displayDNSInstructions,
  displayPageRules,
  displaySecuritySettings,
  displayPerformanceSettings,
  displayRealEstateOptimizations,
  displayTestingInstructions,
  displayExpectedResults,
  displayNextSteps
};
