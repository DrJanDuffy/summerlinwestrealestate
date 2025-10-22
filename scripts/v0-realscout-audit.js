#!/usr/bin/env node

/**
 * V0-Generated Comprehensive RealScout Widget Audit
 * Audits all pages to ensure proper RealScout widget implementation
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = process.cwd();
const PAGES_DIR = path.join(PROJECT_ROOT, 'app');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'components');

// Audit results
const auditResults = {
  totalPages: 0,
  pagesWithIssues: 0,
  issues: [],
  recommendations: [],
  summary: {},
};

// RealScout widget patterns to check
const REALSCOUT_PATTERNS = {
  // Raw HTML elements (should be replaced)
  rawOfficeListings: /<realscout-office-listings[^>]*>/g,
  rawSearchWidget: /<realscout-search-widget[^>]*>/g,
  rawLeadCapture: /<realscout-lead-capture[^>]*>/g,

  // Correct wrapper components (should be used)
  wrapperOfficeListings: /RealScoutOfficeListingsWrapper/g,
  wrapperSearchWidget: /RealScoutAdvancedSearch|RealScoutSimpleSearch/g,
  wrapperLeadCapture: /RealScoutLeadCapture/g,

  // Parameter patterns
  agentEncodedId: /agent-encoded-id/g,
  agentId: /agent-id/g,

  // Loading states
  loadingState: /isLoaded|widgetLoaded|widgetReady/g,
  errorHandling: /error|setError/g,

  // Dynamic imports
  dynamicImport: /dynamic\(\(\) => import/g,
};

// Files to audit
const AUDIT_FILES = [
  // Main pages
  'app/page.tsx',
  'app/HomeClient.tsx',
  'app/ImprovedHomeClient.tsx',
  'app/layout.tsx',

  // About pages
  'app/about/AboutClient.tsx',
  'app/about/ModernAboutClient.tsx',

  // Property pages
  'app/properties/PropertiesClient.tsx',
  'app/current-listing/CurrentListingClient.tsx',

  // Community pages
  'app/communities/page.tsx',
  'app/communities/[slug]/page.tsx',
  'app/service-area/page.tsx',
  'app/service-area/[slug]/ClientSubdivisionPage.tsx',

  // Market pages
  'app/market-reports/MarketReportsClient.tsx',
  'app/market/page.tsx',
  'app/market-insights/page.tsx',

  // Other pages
  'app/contact/ContactClient.tsx',
  'app/blog/page.tsx',
  'app/team/page.tsx',
  'app/testimonials/page.tsx',
  'app/press/page.tsx',
  'app/home-values/page.tsx',
  'app/new-homes-summerlin/NewHomesSummerlinClient.tsx',
  'app/downtown-summerlin/page.tsx',
  'app/the-vistas/page.tsx',
  'app/vistas-listing/page.tsx',
  'app/compare/page.tsx',
  'app/sold/page.tsx',
  'app/v0-test/page.tsx',

  // Components
  'components/ui/RealScoutWidget.tsx',
  'components/ui/RealScoutOfficeListingsWrapper.tsx',
  'components/ui/RealScoutAdvancedSearch.tsx',
  'components/ui/RealScoutSimpleSearch.tsx',
  'components/ui/RealScoutLeadCapture.tsx',
  'components/ui/RealScoutListings.tsx',
  'components/ui/RealScoutTestWidget.tsx',
];

function auditFile(filePath) {
  const fullPath = path.join(PROJECT_ROOT, filePath);

  if (!fs.existsSync(fullPath)) {
    auditResults.issues.push({
      file: filePath,
      type: 'FILE_NOT_FOUND',
      severity: 'warning',
      message: 'File not found',
    });
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const fileIssues = [];

  // Check for raw HTML elements (should be replaced)
  if (REALSCOUT_PATTERNS.rawOfficeListings.test(content)) {
    const matches = content.match(REALSCOUT_PATTERNS.rawOfficeListings);
    fileIssues.push({
      type: 'RAW_HTML_ELEMENT',
      severity: 'error',
      message: `Found ${matches.length} raw realscout-office-listings elements`,
      details: matches,
      recommendation: 'Replace with RealScoutOfficeListingsWrapper component',
    });
  }

  if (REALSCOUT_PATTERNS.rawSearchWidget.test(content)) {
    const matches = content.match(REALSCOUT_PATTERNS.rawSearchWidget);
    fileIssues.push({
      type: 'RAW_HTML_ELEMENT',
      severity: 'error',
      message: `Found ${matches.length} raw realscout-search-widget elements`,
      details: matches,
      recommendation: 'Replace with RealScoutAdvancedSearch or RealScoutSimpleSearch component',
    });
  }

  if (REALSCOUT_PATTERNS.rawLeadCapture.test(content)) {
    const matches = content.match(REALSCOUT_PATTERNS.rawLeadCapture);
    fileIssues.push({
      type: 'RAW_HTML_ELEMENT',
      severity: 'error',
      message: `Found ${matches.length} raw realscout-lead-capture elements`,
      details: matches,
      recommendation: 'Replace with RealScoutLeadCapture component',
    });
  }

  // Check for correct wrapper components
  const hasWrapperOfficeListings = REALSCOUT_PATTERNS.wrapperOfficeListings.test(content);
  const hasWrapperSearchWidget = REALSCOUT_PATTERNS.wrapperSearchWidget.test(content);
  const hasWrapperLeadCapture = REALSCOUT_PATTERNS.wrapperLeadCapture.test(content);

  // Check for proper parameter usage
  const hasAgentEncodedId = REALSCOUT_PATTERNS.agentEncodedId.test(content);
  const hasAgentId = REALSCOUT_PATTERNS.agentId.test(content);

  // Check for loading states
  const hasLoadingState = REALSCOUT_PATTERNS.loadingState.test(content);
  const hasErrorHandling = REALSCOUT_PATTERNS.errorHandling.test(content);

  // Check for dynamic imports
  const hasDynamicImport = REALSCOUT_PATTERNS.dynamicImport.test(content);

  // Add file-specific issues
  if (fileIssues.length > 0) {
    auditResults.issues.push({
      file: filePath,
      issues: fileIssues,
    });
    auditResults.pagesWithIssues++;
  }

  // Track summary statistics
  auditResults.summary[filePath] = {
    hasWrapperOfficeListings,
    hasWrapperSearchWidget,
    hasWrapperLeadCapture,
    hasAgentEncodedId,
    hasAgentId,
    hasLoadingState,
    hasErrorHandling,
    hasDynamicImport,
    issueCount: fileIssues.length,
  };

  auditResults.totalPages++;
}

function generateRecommendations() {
  const recommendations = [];

  // Count issues by type
  const issueTypes = {};
  auditResults.issues.forEach((issue) => {
    if (issue.issues) {
      issue.issues.forEach((fileIssue) => {
        issueTypes[fileIssue.type] = (issueTypes[fileIssue.type] || 0) + 1;
      });
    }
  });

  // Generate recommendations based on issues
  if (issueTypes.RAW_HTML_ELEMENT > 0) {
    recommendations.push({
      priority: 'HIGH',
      category: 'CRITICAL_FIX',
      title: 'Replace Raw HTML Elements',
      description: `Found ${issueTypes.RAW_HTML_ELEMENT} raw RealScout HTML elements that need to be replaced with proper React components`,
      action: 'Replace all <realscout-*> elements with proper wrapper components',
      files: auditResults.issues
        .filter((issue) => issue.issues?.some((i) => i.type === 'RAW_HTML_ELEMENT'))
        .map((issue) => issue.file),
    });
  }

  // Check for missing loading states
  const filesWithoutLoadingStates = Object.entries(auditResults.summary)
    .filter(([file, summary]) => !summary.hasLoadingState && summary.hasWrapperOfficeListings)
    .map(([file]) => file);

  if (filesWithoutLoadingStates.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'ENHANCEMENT',
      title: 'Add Loading States',
      description: `${filesWithoutLoadingStates.length} files use RealScout widgets but may be missing loading states`,
      action: 'Ensure all RealScout widgets have proper loading states and error handling',
      files: filesWithoutLoadingStates,
    });
  }

  // Check for parameter consistency
  const filesWithAgentEncodedId = Object.entries(auditResults.summary)
    .filter(([file, summary]) => summary.hasAgentEncodedId)
    .map(([file]) => file);

  if (filesWithAgentEncodedId.length > 0) {
    recommendations.push({
      priority: 'MEDIUM',
      category: 'PARAMETER_FIX',
      title: 'Standardize Agent ID Parameter',
      description: `${filesWithAgentEncodedId.length} files use agent-encoded-id parameter`,
      action: 'Consider standardizing to agent-id parameter for consistency',
      files: filesWithAgentEncodedId,
    });
  }

  auditResults.recommendations = recommendations;
}

function generateReport() {
  console.log('\n🔍 V0-GENERATED REALSCOUT WIDGET AUDIT REPORT');
  console.log('='.repeat(60));

  console.log(`\n📊 SUMMARY:`);
  console.log(`   Total Pages Audited: ${auditResults.totalPages}`);
  console.log(`   Pages with Issues: ${auditResults.pagesWithIssues}`);
  console.log(`   Total Issues Found: ${auditResults.issues.length}`);

  if (auditResults.issues.length > 0) {
    console.log(`\n❌ ISSUES FOUND:`);
    auditResults.issues.forEach((issue, index) => {
      console.log(`\n   ${index + 1}. ${issue.file}`);
      if (issue.issues) {
        issue.issues.forEach((fileIssue) => {
          console.log(`      ${fileIssue.severity.toUpperCase()}: ${fileIssue.message}`);
          if (fileIssue.recommendation) {
            console.log(`      💡 Recommendation: ${fileIssue.recommendation}`);
          }
        });
      }
    });
  }

  if (auditResults.recommendations.length > 0) {
    console.log(`\n💡 RECOMMENDATIONS:`);
    auditResults.recommendations.forEach((rec, index) => {
      console.log(`\n   ${index + 1}. [${rec.priority}] ${rec.title}`);
      console.log(`      Category: ${rec.category}`);
      console.log(`      Description: ${rec.description}`);
      console.log(`      Action: ${rec.action}`);
      if (rec.files && rec.files.length > 0) {
        console.log(
          `      Files: ${rec.files.slice(0, 3).join(', ')}${rec.files.length > 3 ? '...' : ''}`
        );
      }
    });
  }

  console.log(`\n✅ FILES WITH PROPER IMPLEMENTATION:`);
  const properFiles = Object.entries(auditResults.summary)
    .filter(
      ([file, summary]) =>
        summary.issueCount === 0 &&
        (summary.hasWrapperOfficeListings || summary.hasWrapperSearchWidget)
    )
    .map(([file]) => file);

  if (properFiles.length > 0) {
    properFiles.forEach((file) => {
      console.log(`   ✅ ${file}`);
    });
  } else {
    console.log(`   No files found with proper implementation`);
  }

  console.log(`\n🎯 NEXT STEPS:`);
  console.log(`   1. Fix all RAW_HTML_ELEMENT issues (HIGH priority)`);
  console.log(`   2. Add loading states where missing (MEDIUM priority)`);
  console.log(`   3. Standardize parameter usage (MEDIUM priority)`);
  console.log(`   4. Test all RealScout widgets for "No listings available" issue`);
  console.log(`   5. Verify widgets load properly on all pages`);

  console.log(`\n📋 AUDIT COMPLETE`);
  console.log('='.repeat(60));
}

// Main audit function
function runAudit() {
  console.log('🚀 Starting V0-Generated RealScout Widget Audit...\n');

  AUDIT_FILES.forEach((filePath) => {
    console.log(`📄 Auditing: ${filePath}`);
    auditFile(filePath);
  });

  generateRecommendations();
  generateReport();

  // Return exit code based on issues found
  const hasErrors = auditResults.issues.some((issue) =>
    issue.issues?.some((fileIssue) => fileIssue.severity === 'error')
  );

  return hasErrors ? 1 : 0;
}

// Run the audit
if (require.main === module) {
  const exitCode = runAudit();
  process.exit(exitCode);
}

module.exports = { runAudit, auditResults };
