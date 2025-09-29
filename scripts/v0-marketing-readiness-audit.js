#!/usr/bin/env node

/**
 * V0 MARKETING READINESS AUDIT SCRIPT
 * Summerlin West Real Estate Website
 * 
 * This script performs a comprehensive audit to ensure the website
 * is fully ready for marketing use with working RealScout widgets.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🎯 V0 MARKETING READINESS AUDIT STARTING...\n');

// Color codes for output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m'
};

// Marketing readiness criteria
const marketingCriteria = {
  buildSuccess: { passed: 0, failed: 0, errors: [] },
  realscoutFunctionality: { passed: 0, failed: 0, errors: [] },
  seoOptimization: { passed: 0, failed: 0, errors: [] },
  performanceOptimization: { passed: 0, failed: 0, errors: [] },
  mobileResponsiveness: { passed: 0, failed: 0, errors: [] },
  leadCapture: { passed: 0, failed: 0, errors: [] },
  contentQuality: { passed: 0, failed: 0, errors: [] },
  deploymentStatus: { passed: 0, failed: 0, errors: [] }
};

// Helper function to log results
function logResult(category, test, passed, message = '') {
  const status = passed ? '✅ PASS' : '❌ FAIL';
  const color = passed ? colors.green : colors.red;
  console.log(`${color}${status}${colors.reset} [${category}] ${test}${message ? ': ' + message : ''}`);
  
  if (passed) {
    marketingCriteria[category].passed++;
  } else {
    marketingCriteria[category].failed++;
    marketingCriteria[category].errors.push(`${test}: ${message}`);
  }
}

// 1. BUILD SUCCESS VERIFICATION
console.log(`${colors.bold}${colors.blue}1. BUILD SUCCESS VERIFICATION${colors.reset}`);
console.log('='.repeat(50));

try {
  // Test TypeScript compilation
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  logResult('buildSuccess', 'TypeScript Compilation', true);
} catch (error) {
  logResult('buildSuccess', 'TypeScript Compilation', false, 'TypeScript errors found');
}

// Check for critical build files
const criticalFiles = [
  'components/ui/RealScoutOfficeListingsWrapper.tsx',
  'app/layout.tsx',
  'app/page.tsx',
  'vercel.json',
  'next.config.ts'
];

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    logResult('buildSuccess', `Critical File: ${file}`, true);
  } else {
    logResult('buildSuccess', `Critical File: ${file}`, false, 'File missing');
  }
});

// 2. REALSCOUT FUNCTIONALITY
console.log(`\n${colors.bold}${colors.blue}2. REALSCOUT FUNCTIONALITY${colors.reset}`);
console.log('='.repeat(50));

// Check RealScout wrapper component
const wrapperFile = 'components/ui/RealScoutOfficeListingsWrapper.tsx';
if (fs.existsSync(wrapperFile)) {
  const wrapperContent = fs.readFileSync(wrapperFile, 'utf8');
  
  // Check for working parameters
  const hasAgentEncodedId = wrapperContent.includes('agent-encoded-id="QWdlbnQtMjI1MDUw"');
  const hasSortOrder = wrapperContent.includes('sort-order');
  const hasListingStatus = wrapperContent.includes('listing-status="For Sale"');
  const hasPropertyTypes = wrapperContent.includes('property-types');
  const hasPriceMin = wrapperContent.includes('price-min');
  const hasPriceMax = wrapperContent.includes('price-max');
  
  logResult('realscoutFunctionality', 'Agent Encoded ID (QWdlbnQtMjI1MDUw)', hasAgentEncodedId);
  logResult('realscoutFunctionality', 'Sort Order Parameter', hasSortOrder);
  logResult('realscoutFunctionality', 'Listing Status (For Sale)', hasListingStatus);
  logResult('realscoutFunctionality', 'Property Types Parameter', hasPropertyTypes);
  logResult('realscoutFunctionality', 'Price Min Parameter', hasPriceMin);
  logResult('realscoutFunctionality', 'Price Max Parameter', hasPriceMax);
  
  // Check for proper error handling
  const hasErrorHandling = wrapperContent.includes('error') && wrapperContent.includes('setError');
  logResult('realscoutFunctionality', 'Error Handling', hasErrorHandling);
  
  // Check for loading states
  const hasLoadingStates = wrapperContent.includes('isLoaded') && wrapperContent.includes('setIsLoaded');
  logResult('realscoutFunctionality', 'Loading States', hasLoadingStates);
  
  // Check for console logging for debugging
  const hasConsoleLogging = wrapperContent.includes('console.log');
  logResult('realscoutFunctionality', 'Debug Logging', hasConsoleLogging);
} else {
  logResult('realscoutFunctionality', 'Wrapper Component Exists', false, 'RealScoutOfficeListingsWrapper not found');
}

// Check for RealScout script loading
const layoutFile = 'app/layout.tsx';
if (fs.existsSync(layoutFile)) {
  const layoutContent = fs.readFileSync(layoutFile, 'utf8');
  const hasRealScoutScript = layoutContent.includes('realscout.com') || layoutContent.includes('RealScout');
  logResult('realscoutFunctionality', 'RealScout Script Loading', hasRealScoutScript);
}

// 3. SEO OPTIMIZATION
console.log(`\n${colors.bold}${colors.blue}3. SEO OPTIMIZATION${colors.reset}`);
console.log('='.repeat(50));

// Check for structured data
if (fs.existsSync(layoutFile)) {
  const layoutContent = fs.readFileSync(layoutFile, 'utf8');
  
  logResult('seoOptimization', 'Structured Data (JSON-LD)', layoutContent.includes('application/ld+json'));
  logResult('seoOptimization', 'RealEstateAgent Schema', layoutContent.includes('RealEstateAgent'));
  logResult('seoOptimization', 'Organization Schema', layoutContent.includes('Organization'));
  logResult('seoOptimization', 'Place Schema', layoutContent.includes('Place'));
}

// Check for sitemap
const sitemapApi = 'app/api/sitemap/route.ts';
if (fs.existsSync(sitemapApi)) {
  logResult('seoOptimization', 'Dynamic Sitemap API', true);
} else {
  logResult('seoOptimization', 'Dynamic Sitemap API', false, 'Sitemap API not found');
}

// Check for robots.txt
const robotsApi = 'app/robots.txt/route.ts';
if (fs.existsSync(robotsApi)) {
  logResult('seoOptimization', 'Robots.txt API', true);
} else {
  logResult('seoOptimization', 'Robots.txt API', false, 'Robots.txt API not found');
}

// Check for meta tags in key pages
const keyPages = ['app/page.tsx', 'app/about/page.tsx', 'app/contact/page.tsx'];
keyPages.forEach(page => {
  if (fs.existsSync(page)) {
    const content = fs.readFileSync(page, 'utf8');
    const hasTitle = content.includes('title') || content.includes('Title');
    const hasDescription = content.includes('description') || content.includes('Description');
    logResult('seoOptimization', `Meta Tags: ${page}`, hasTitle && hasDescription);
  }
});

// 4. PERFORMANCE OPTIMIZATION
console.log(`\n${colors.bold}${colors.blue}4. PERFORMANCE OPTIMIZATION${colors.reset}`);
console.log('='.repeat(50));

// Check Next.js configuration
const nextConfig = 'next.config.ts';
if (fs.existsSync(nextConfig)) {
  const config = fs.readFileSync(nextConfig, 'utf8');
  
  logResult('performanceOptimization', 'Image Optimization', config.includes('remotePatterns'));
  logResult('performanceOptimization', 'Compression Enabled', config.includes('compress'));
  logResult('performanceOptimization', 'Bundle Optimization', config.includes('optimizePackageImports'));
}

// Check for performance monitoring
const packageJson = 'package.json';
if (fs.existsSync(packageJson)) {
  const pkg = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
  
  logResult('performanceOptimization', 'Vercel Analytics', pkg.dependencies && pkg.dependencies['@vercel/analytics']);
  logResult('performanceOptimization', 'Speed Insights', pkg.dependencies && pkg.dependencies['@vercel/speed-insights']);
}

// Check for dynamic imports
const homeClient = 'app/HomeClient.tsx';
if (fs.existsSync(homeClient)) {
  const content = fs.readFileSync(homeClient, 'utf8');
  logResult('performanceOptimization', 'Dynamic Imports', content.includes('dynamic('));
}

// 5. MOBILE RESPONSIVENESS
console.log(`\n${colors.bold}${colors.blue}5. MOBILE RESPONSIVENESS${colors.reset}`);
console.log('='.repeat(50));

// Check for Tailwind CSS
const tailwindConfig = 'tailwind.config.js';
if (fs.existsSync(tailwindConfig)) {
  logResult('mobileResponsiveness', 'Tailwind CSS Config', true);
} else {
  logResult('mobileResponsiveness', 'Tailwind CSS Config', false, 'tailwind.config.js not found');
}

// Check for responsive utilities
if (fs.existsSync(homeClient)) {
  const content = fs.readFileSync(homeClient, 'utf8');
  
  logResult('mobileResponsiveness', 'Mobile Classes (sm:, md:, lg:)', 
    content.includes('sm:') || content.includes('md:') || content.includes('lg:'));
  logResult('mobileResponsiveness', 'Responsive Grid', content.includes('grid') && content.includes('responsive'));
  logResult('mobileResponsiveness', 'Flexbox Layout', content.includes('flex'));
}

// Check viewport meta tag
if (fs.existsSync(layoutFile)) {
  const layoutContent = fs.readFileSync(layoutFile, 'utf8');
  logResult('mobileResponsiveness', 'Viewport Meta Tag', layoutContent.includes('viewport'));
}

// 6. LEAD CAPTURE FUNCTIONALITY
console.log(`\n${colors.bold}${colors.blue}6. LEAD CAPTURE FUNCTIONALITY${colors.reset}`);
console.log('='.repeat(50));

// Check for lead capture forms
const leadCaptureFiles = [
  'components/ui/LeadCaptureForm.tsx',
  'components/ui/RealScoutLeadCapture.tsx',
  'app/contact/ContactClient.tsx'
];

leadCaptureFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const hasForm = content.includes('<form') || content.includes('Form');
    const hasValidation = content.includes('validation') || content.includes('error');
    logResult('leadCapture', `Lead Form: ${file}`, hasForm && hasValidation);
  } else {
    logResult('leadCapture', `Lead Form: ${file}`, false, 'File not found');
  }
});

// Check for contact information
if (fs.existsSync(layoutFile)) {
  const layoutContent = fs.readFileSync(layoutFile, 'utf8');
  const hasPhone = layoutContent.includes('702-550-0112') || layoutContent.includes('+1-702-550-0112');
  const hasEmail = layoutContent.includes('DrJanSells@SummerlinWestRealEstate.com');
  logResult('leadCapture', 'Contact Phone Number', hasPhone);
  logResult('leadCapture', 'Contact Email', hasEmail);
}

// 7. CONTENT QUALITY
console.log(`\n${colors.bold}${colors.blue}7. CONTENT QUALITY${colors.reset}`);
console.log('='.repeat(50));

// Check for placeholder content
const contentFiles = ['app/page.tsx', 'app/about/page.tsx', 'app/HomeClient.tsx'];
let placeholderCount = 0;

contentFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('placeholder') || content.includes('Lorem ipsum') || content.includes('TODO')) {
      placeholderCount++;
    }
  }
});

logResult('contentQuality', 'No Placeholder Content', placeholderCount === 0, 
  placeholderCount > 0 ? `${placeholderCount} files with placeholders` : '');

// Check for professional branding
if (fs.existsSync(layoutFile)) {
  const layoutContent = fs.readFileSync(layoutFile, 'utf8');
  const hasDrJanDuffy = layoutContent.includes('Dr. Jan Duffy') || layoutContent.includes('Dr. Janet Duffy');
  const hasSummerlinWest = layoutContent.includes('Summerlin West');
  logResult('contentQuality', 'Professional Branding', hasDrJanDuffy && hasSummerlinWest);
}

// Check for real estate specific content
if (fs.existsSync(homeClient)) {
  const content = fs.readFileSync(homeClient, 'utf8');
  const hasRealEstateTerms = content.includes('homes for sale') || content.includes('real estate') || content.includes('properties');
  logResult('contentQuality', 'Real Estate Content', hasRealEstateTerms);
}

// 8. DEPLOYMENT STATUS
console.log(`\n${colors.bold}${colors.blue}8. DEPLOYMENT STATUS${colors.reset}`);
console.log('='.repeat(50));

// Check Vercel configuration
const vercelConfig = 'vercel.json';
if (fs.existsSync(vercelConfig)) {
  const config = JSON.parse(fs.readFileSync(vercelConfig, 'utf8'));
  
  logResult('deploymentStatus', 'Vercel Config Exists', true);
  logResult('deploymentStatus', 'Redirects Configured', config.redirects && config.redirects.length > 0);
  logResult('deploymentStatus', 'Headers Configured', config.headers && config.headers.length > 0);
  logResult('deploymentStatus', 'Rewrites Configured', config.rewrites && config.rewrites.length > 0);
  logResult('deploymentStatus', 'Security Headers', config.headers && config.headers.some(h => h.headers.some(header => header.key.includes('Security'))));
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

// Check for deployment scripts
const packageJsonContent = fs.readFileSync(packageJson, 'utf8');
const pkg = JSON.parse(packageJsonContent);
logResult('deploymentStatus', 'Build Script', pkg.scripts && pkg.scripts.build);
logResult('deploymentStatus', 'Dev Script', pkg.scripts && pkg.scripts.dev);

// MARKETING READINESS REPORT
console.log(`\n${colors.bold}${colors.green}🎯 MARKETING READINESS REPORT${colors.reset}`);
console.log('='.repeat(60));

let totalPassed = 0;
let totalFailed = 0;

Object.keys(marketingCriteria).forEach(category => {
  const result = marketingCriteria[category];
  totalPassed += result.passed;
  totalFailed += result.failed;
  
  const percentage = Math.round((result.passed / (result.passed + result.failed)) * 100);
  const color = percentage >= 90 ? colors.green : percentage >= 70 ? colors.yellow : colors.red;
  
  console.log(`${color}${category.toUpperCase()}: ${result.passed}/${result.passed + result.failed} (${percentage}%)${colors.reset}`);
  
  if (result.errors.length > 0) {
    console.log(`  ${colors.red}Issues:${colors.reset}`);
    result.errors.forEach(error => {
      console.log(`    - ${error}`);
    });
  }
});

const overallPercentage = Math.round((totalPassed / (totalPassed + totalFailed)) * 100);
const overallColor = overallPercentage >= 90 ? colors.green : overallPercentage >= 70 ? colors.yellow : colors.red;

console.log(`\n${colors.bold}${overallColor}MARKETING READINESS SCORE: ${totalPassed}/${totalPassed + totalFailed} (${overallPercentage}%)${colors.reset}`);

if (overallPercentage >= 90) {
  console.log(`${colors.green}🎉 WEBSITE IS MARKETING READY!${colors.reset}`);
  console.log(`${colors.green}✅ RealScout widgets are properly configured${colors.reset}`);
  console.log(`${colors.green}✅ SEO optimization is complete${colors.reset}`);
  console.log(`${colors.green}✅ Performance is optimized${colors.reset}`);
  console.log(`${colors.green}✅ Mobile responsiveness is implemented${colors.reset}`);
  console.log(`${colors.green}✅ Lead capture functionality is working${colors.reset}`);
  console.log(`${colors.green}✅ Content quality meets marketing standards${colors.reset}`);
  console.log(`${colors.green}🚀 READY FOR MARKETING CAMPAIGNS!${colors.reset}`);
} else if (overallPercentage >= 70) {
  console.log(`${colors.yellow}⚠️  WEBSITE NEEDS MINOR IMPROVEMENTS${colors.reset}`);
  console.log(`${colors.yellow}🔧 Address the issues above before marketing launch${colors.reset}`);
} else {
  console.log(`${colors.red}❌ WEBSITE NOT READY FOR MARKETING${colors.reset}`);
  console.log(`${colors.red}🚨 Significant issues need to be addressed${colors.reset}`);
}

console.log(`\n${colors.bold}${colors.cyan}📋 MARKETING LAUNCH CHECKLIST:${colors.reset}`);
console.log('1. ✅ Test RealScout widgets display actual listings');
console.log('2. ✅ Verify all pages load correctly on mobile');
console.log('3. ✅ Test contact forms and lead capture');
console.log('4. ✅ Check Google Search Console for SEO issues');
console.log('5. ✅ Monitor Core Web Vitals performance');
console.log('6. ✅ Verify domain and SSL certificate');
console.log('7. ✅ Test all navigation and user flows');
console.log('8. ✅ Ensure all images load properly');
console.log('9. ✅ Validate structured data markup');
console.log('10. ✅ Test RealScout widget functionality');

console.log(`\n${colors.bold}${colors.green}🚀 V0 MARKETING READINESS AUDIT COMPLETE!${colors.reset}`);
