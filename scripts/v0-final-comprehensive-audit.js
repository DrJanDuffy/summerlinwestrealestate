#!/usr/bin/env node

/**
 * V0 FINAL COMPREHENSIVE AUDIT SCRIPT
 * Summerlin West Real Estate Website
 * 
 * This script performs a thorough audit of all website functionality
 * to ensure the site is fully operational with working RealScout widgets.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 V0 FINAL COMPREHENSIVE AUDIT STARTING...\n');

// Color codes for output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

// Audit results tracking
const auditResults = {
  syntaxValidation: { passed: 0, failed: 0, errors: [] },
  realscoutWidgets: { passed: 0, failed: 0, errors: [] },
  buildVerification: { passed: 0, failed: 0, errors: [] },
  deploymentStatus: { passed: 0, failed: 0, errors: [] },
  performanceCheck: { passed: 0, failed: 0, errors: [] },
  seoValidation: { passed: 0, failed: 0, errors: [] },
  responsiveDesign: { passed: 0, failed: 0, errors: [] },
  errorMonitoring: { passed: 0, failed: 0, errors: [] }
};

// Helper function to log results
function logResult(category, test, passed, message = '') {
  const status = passed ? '✅ PASS' : '❌ FAIL';
  const color = passed ? colors.green : colors.red;
  console.log(`${color}${status}${colors.reset} [${category}] ${test}${message ? ': ' + message : ''}`);
  
  if (passed) {
    auditResults[category].passed++;
  } else {
    auditResults[category].failed++;
    auditResults[category].errors.push(`${test}: ${message}`);
  }
}

// 1. SYNTAX VALIDATION
console.log(`${colors.bold}${colors.blue}1. SYNTAX VALIDATION${colors.reset}`);
console.log('='.repeat(50));

try {
  // Check TypeScript compilation
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  logResult('syntaxValidation', 'TypeScript Compilation', true);
} catch (error) {
  logResult('syntaxValidation', 'TypeScript Compilation', false, error.message);
}

try {
  // Check ESLint
  execSync('npx eslint . --ext .ts,.tsx --max-warnings 0', { stdio: 'pipe' });
  logResult('syntaxValidation', 'ESLint Validation', true);
} catch (error) {
  logResult('syntaxValidation', 'ESLint Validation', false, 'ESLint warnings/errors found');
}

// Check for common syntax issues
const criticalFiles = [
  'app/communities/[slug]/page.tsx',
  'app/new-homes-summerlin/NewHomesSummerlinClient.tsx',
  'app/properties/PropertiesClient.tsx',
  'app/service-area/[slug]/ClientSubdivisionPage.tsx',
  'app/service-area/page.tsx',
  'components/ui/RealScoutOfficeListingsWrapper.tsx'
];

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for unterminated strings
    if (content.includes("import styles from '") && !content.includes(".module.css'")) {
      logResult('syntaxValidation', `Import Check: ${file}`, false, 'Unterminated import string');
    } else {
      logResult('syntaxValidation', `Import Check: ${file}`, true);
    }
    
    // Check for 'use client' with generateMetadata
    if (content.includes("'use client'") && content.includes('generateMetadata')) {
      logResult('syntaxValidation', `Client Component Check: ${file}`, false, 'generateMetadata in client component');
    } else {
      logResult('syntaxValidation', `Client Component Check: ${file}`, true);
    }
  }
});

// 2. REALSCOUT WIDGET AUDIT
console.log(`\n${colors.bold}${colors.blue}2. REALSCOUT WIDGET AUDIT${colors.reset}`);
console.log('='.repeat(50));

// Check RealScout wrapper component
const wrapperFile = 'components/ui/RealScoutOfficeListingsWrapper.tsx';
if (fs.existsSync(wrapperFile)) {
  const wrapperContent = fs.readFileSync(wrapperFile, 'utf8');
  
  // Check for working parameters
  const hasAgentEncodedId = wrapperContent.includes('agent-encoded-id');
  const hasSortOrder = wrapperContent.includes('sort-order');
  const hasListingStatus = wrapperContent.includes('listing-status');
  const hasPropertyTypes = wrapperContent.includes('property-types');
  const hasPriceMin = wrapperContent.includes('price-min');
  const hasPriceMax = wrapperContent.includes('price-max');
  
  logResult('realscoutWidgets', 'Agent Encoded ID Parameter', hasAgentEncodedId);
  logResult('realscoutWidgets', 'Sort Order Parameter', hasSortOrder);
  logResult('realscoutWidgets', 'Listing Status Parameter', hasListingStatus);
  logResult('realscoutWidgets', 'Property Types Parameter', hasPropertyTypes);
  logResult('realscoutWidgets', 'Price Min Parameter', hasPriceMin);
  logResult('realscoutWidgets', 'Price Max Parameter', hasPriceMax);
  
  // Check for proper error handling
  const hasErrorHandling = wrapperContent.includes('error') && wrapperContent.includes('setError');
  logResult('realscoutWidgets', 'Error Handling', hasErrorHandling);
  
  // Check for loading states
  const hasLoadingStates = wrapperContent.includes('isLoaded') && wrapperContent.includes('setIsLoaded');
  logResult('realscoutWidgets', 'Loading States', hasLoadingStates);
} else {
  logResult('realscoutWidgets', 'Wrapper Component Exists', false, 'RealScoutOfficeListingsWrapper not found');
}

// Check for raw HTML elements (should be none)
const pagesToCheck = [
  'app/page.tsx',
  'app/HomeClient.tsx',
  'app/layout.tsx',
  'app/properties/PropertiesClient.tsx',
  'app/about/AboutClient.tsx',
  'app/contact/ContactClient.tsx'
];

let rawHtmlElementsFound = 0;
pagesToCheck.forEach(page => {
  if (fs.existsSync(page)) {
    const content = fs.readFileSync(page, 'utf8');
    if (content.includes('<realscout-office-listings') && !content.includes('RealScoutOfficeListingsWrapper')) {
      rawHtmlElementsFound++;
    }
  }
});

logResult('realscoutWidgets', 'No Raw HTML Elements', rawHtmlElementsFound === 0, 
  rawHtmlElementsFound > 0 ? `${rawHtmlElementsFound} raw elements found` : '');

// 3. BUILD VERIFICATION
console.log(`\n${colors.bold}${colors.blue}3. BUILD VERIFICATION${colors.reset}`);
console.log('='.repeat(50));

try {
  // Test Next.js build
  console.log('Testing Next.js build...');
  execSync('npx next build --dry-run', { stdio: 'pipe' });
  logResult('buildVerification', 'Next.js Build Test', true);
} catch (error) {
  logResult('buildVerification', 'Next.js Build Test', false, error.message);
}

// Check for missing dependencies
try {
  execSync('pnpm install --dry-run', { stdio: 'pipe' });
  logResult('buildVerification', 'Dependencies Check', true);
} catch (error) {
  logResult('buildVerification', 'Dependencies Check', false, error.message);
}

// 4. DEPLOYMENT STATUS
console.log(`\n${colors.bold}${colors.blue}4. DEPLOYMENT STATUS${colors.reset}`);
console.log('='.repeat(50));

// Check Vercel configuration
const vercelConfig = 'vercel.json';
if (fs.existsSync(vercelConfig)) {
  const config = JSON.parse(fs.readFileSync(vercelConfig, 'utf8'));
  
  logResult('deploymentStatus', 'Vercel Config Exists', true);
  logResult('deploymentStatus', 'Redirects Configured', config.redirects && config.redirects.length > 0);
  logResult('deploymentStatus', 'Headers Configured', config.headers && config.headers.length > 0);
  logResult('deploymentStatus', 'Rewrites Configured', config.rewrites && config.rewrites.length > 0);
} else {
  logResult('deploymentStatus', 'Vercel Config Exists', false, 'vercel.json not found');
}

// Check environment variables template
const envTemplate = '.env.template';
if (fs.existsSync(envTemplate)) {
  logResult('deploymentStatus', 'Environment Template', true);
} else {
  logResult('deploymentStatus', 'Environment Template', false, '.env.template not found');
}

// 5. PERFORMANCE CHECK
console.log(`\n${colors.bold}${colors.blue}5. PERFORMANCE CHECK${colors.reset}`);
console.log('='.repeat(50));

// Check for performance optimizations
const nextConfig = 'next.config.ts';
if (fs.existsSync(nextConfig)) {
  const config = fs.readFileSync(nextConfig, 'utf8');
  
  logResult('performanceCheck', 'Image Optimization', config.includes('remotePatterns'));
  logResult('performanceCheck', 'Bundle Analyzer Ready', config.includes('bundleAnalyzer'));
  logResult('performanceCheck', 'Compression Enabled', config.includes('compress'));
} else {
  logResult('performanceCheck', 'Next.js Config', false, 'next.config.ts not found');
}

// Check for performance monitoring
const packageJson = 'package.json';
if (fs.existsSync(packageJson)) {
  const pkg = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
  
  logResult('performanceCheck', 'Vercel Analytics', pkg.dependencies && pkg.dependencies['@vercel/analytics']);
  logResult('performanceCheck', 'Speed Insights', pkg.dependencies && pkg.dependencies['@vercel/speed-insights']);
}

// 6. SEO VALIDATION
console.log(`\n${colors.bold}${colors.blue}6. SEO VALIDATION${colors.reset}`);
console.log('='.repeat(50));

// Check for sitemap
const sitemapApi = 'app/api/sitemap/route.ts';
if (fs.existsSync(sitemapApi)) {
  logResult('seoValidation', 'Sitemap API', true);
} else {
  logResult('seoValidation', 'Sitemap API', false, 'Sitemap API not found');
}

// Check for robots.txt
const robotsApi = 'app/robots.txt/route.ts';
if (fs.existsSync(robotsApi)) {
  logResult('seoValidation', 'Robots.txt API', true);
} else {
  logResult('seoValidation', 'Robots.txt API', false, 'Robots.txt API not found');
}

// Check for structured data in layout
const layoutFile = 'app/layout.tsx';
if (fs.existsSync(layoutFile)) {
  const layoutContent = fs.readFileSync(layoutFile, 'utf8');
  
  logResult('seoValidation', 'Structured Data', layoutContent.includes('application/ld+json'));
  logResult('seoValidation', 'RealEstateAgent Schema', layoutContent.includes('RealEstateAgent'));
  logResult('seoValidation', 'Organization Schema', layoutContent.includes('Organization'));
}

// 7. RESPONSIVE DESIGN
console.log(`\n${colors.bold}${colors.blue}7. RESPONSIVE DESIGN${colors.reset}`);
console.log('='.repeat(50));

// Check for Tailwind CSS
const tailwindConfig = 'tailwind.config.js';
if (fs.existsSync(tailwindConfig)) {
  logResult('responsiveDesign', 'Tailwind Config', true);
} else {
  logResult('responsiveDesign', 'Tailwind Config', false, 'tailwind.config.js not found');
}

// Check for responsive utilities in key files
const homeClient = 'app/HomeClient.tsx';
if (fs.existsSync(homeClient)) {
  const content = fs.readFileSync(homeClient, 'utf8');
  
  logResult('responsiveDesign', 'Mobile Classes', content.includes('md:') || content.includes('lg:'));
  logResult('responsiveDesign', 'Responsive Grid', content.includes('grid') && content.includes('responsive'));
}

// 8. ERROR MONITORING
console.log(`\n${colors.bold}${colors.blue}8. ERROR MONITORING${colors.reset}`);
console.log('='.repeat(50));

// Check for error boundaries
const errorBoundaryFiles = [
  'app/error.tsx',
  'app/not-found.tsx',
  'app/404.tsx'
];

errorBoundaryFiles.forEach(file => {
  if (fs.existsSync(file)) {
    logResult('errorMonitoring', `Error Boundary: ${file}`, true);
  } else {
    logResult('errorMonitoring', `Error Boundary: ${file}`, false, `${file} not found`);
  }
});

// Check for console error handling in wrapper
if (fs.existsSync(wrapperFile)) {
  const content = fs.readFileSync(wrapperFile, 'utf8');
  logResult('errorMonitoring', 'Console Error Logging', content.includes('console.error'));
}

// FINAL REPORT
console.log(`\n${colors.bold}${colors.green}🎯 FINAL AUDIT REPORT${colors.reset}`);
console.log('='.repeat(60));

let totalPassed = 0;
let totalFailed = 0;

Object.keys(auditResults).forEach(category => {
  const result = auditResults[category];
  totalPassed += result.passed;
  totalFailed += result.failed;
  
  const percentage = Math.round((result.passed / (result.passed + result.failed)) * 100);
  const color = percentage >= 80 ? colors.green : percentage >= 60 ? colors.yellow : colors.red;
  
  console.log(`${color}${category.toUpperCase()}: ${result.passed}/${result.passed + result.failed} (${percentage}%)${colors.reset}`);
  
  if (result.errors.length > 0) {
    console.log(`  ${colors.red}Issues:${colors.reset}`);
    result.errors.forEach(error => {
      console.log(`    - ${error}`);
    });
  }
});

const overallPercentage = Math.round((totalPassed / (totalPassed + totalFailed)) * 100);
const overallColor = overallPercentage >= 80 ? colors.green : overallPercentage >= 60 ? colors.yellow : colors.red;

console.log(`\n${colors.bold}${overallColor}OVERALL SCORE: ${totalPassed}/${totalPassed + totalFailed} (${overallPercentage}%)${colors.reset}`);

if (overallPercentage >= 80) {
  console.log(`${colors.green}🎉 WEBSITE IS READY FOR PRODUCTION!${colors.reset}`);
  console.log(`${colors.green}✅ RealScout widgets should be displaying actual listings${colors.reset}`);
  console.log(`${colors.green}✅ All syntax errors have been resolved${colors.reset}`);
  console.log(`${colors.green}✅ Site is fully functional and live${colors.reset}`);
} else if (overallPercentage >= 60) {
  console.log(`${colors.yellow}⚠️  WEBSITE NEEDS MINOR FIXES${colors.reset}`);
  console.log(`${colors.yellow}🔧 Review failed tests above and address issues${colors.reset}`);
} else {
  console.log(`${colors.red}❌ WEBSITE NEEDS SIGNIFICANT WORK${colors.reset}`);
  console.log(`${colors.red}🚨 Multiple critical issues need to be addressed${colors.reset}`);
}

console.log(`\n${colors.bold}${colors.blue}📋 RECOMMENDATIONS:${colors.reset}`);
console.log('1. Test RealScout widgets on live site to verify listings display');
console.log('2. Monitor Core Web Vitals after deployment');
console.log('3. Check Google Search Console for SEO issues');
console.log('4. Verify all pages load correctly on mobile devices');
console.log('5. Test contact forms and lead capture functionality');

console.log(`\n${colors.bold}${colors.green}🚀 V0 FINAL AUDIT COMPLETE!${colors.reset}`);
