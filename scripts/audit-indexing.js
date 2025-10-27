/**
 * SEO Indexing Audit Script
 * Verifies pages with "Discovered - currently not indexed" status
 */

const fs = require('fs');
const path = require('path');

// Pages to audit
const pagesToAudit = [
  {
    path: '/team',
    file: 'app/team/page.tsx',
    component: 'components/v0/SEOTeamPage.tsx',
    hasCanonical: true,
    hasRobots: true,
    hasContent: true,
    hasV0Component: true,
    hasRealScout: true,
    hasStructuredData: true,
  },
  {
    path: '/press',
    file: 'app/press/page.tsx',
    component: 'components/v0/PressPage.tsx',
    hasCanonical: true,
    hasRobots: true,
    hasContent: true,
    hasV0Component: true,
    hasRealScout: true,
    hasStructuredData: true,
  },
  {
    path: '/testimonials',
    file: 'app/testimonials/page.tsx',
    component: 'components/v0/TestimonialsPage.tsx',
    hasCanonical: true,
    hasRobots: true,
    hasContent: true,
    hasV0Component: true,
    hasRealScout: true,
    hasStructuredData: true,
  },
  {
    path: '/service-area',
    file: 'app/service-area/page.tsx',
    component: 'components/v0/ServiceAreaPage.tsx',
    hasCanonical: true,
    hasRobots: true,
    hasContent: true,
    hasV0Component: true,
    hasRealScout: true,
    hasStructuredData: true,
  },
  {
    path: '/service-area/estancia',
    file: 'app/service-area/[slug]/page.tsx',
    component: 'components/v0/ServiceAreaPage.tsx',
    hasCanonical: true,
    hasRobots: true,
    hasContent: true,
    hasV0Component: true,
    hasRealScout: false,
    hasStructuredData: true,
    note: 'Dynamic route with generateMetadata',
  },
];

// Audit results
const auditResults = [];

console.log('🔍 Starting SEO Indexing Audit...\n');

pagesToAudit.forEach((page) => {
  const result = {
    path: page.path,
    status: 'CHECKING',
    issues: [],
    recommendations: [],
  };

  // Check if file exists
  if (fs.existsSync(page.file)) {
    const fileContent = fs.readFileSync(page.file, 'utf8');
    const componentContent = fs.existsSync(page.component)
      ? fs.readFileSync(page.component, 'utf8')
      : '';

    // Verify canonical URL
    if (page.hasCanonical) {
      const canonicalPattern = /canonical:\s*['"](.+?)['"]/;
      const match = fileContent.match(canonicalPattern);
      if (match && match[1].includes('www.summerlinwestrealestate.com')) {
        result.canonical = '✅ Correct';
      } else {
        result.canonical = '⚠️ Issue';
        result.issues.push('Canonical URL not using www domain or missing');
        result.recommendations.push('Update canonical URL to use https://www.summerlinwestrealestate.com');
      }
    }

    // Verify robots directives
    if (page.hasRobots) {
      if (fileContent.includes('index: true')) {
        result.robots = '✅ Index enabled';
      } else {
        result.robots = '⚠️ Issue';
        result.issues.push('Robots index directive missing or set to false');
        result.recommendations.push('Add robots: { index: true, follow: true }');
      }
    }

    // Verify content
    if (page.hasContent) {
      if (componentContent.length > 500) {
        result.content = '✅ Adequate content';
      } else {
        result.content = '⚠️ Issue';
        result.issues.push('Insufficient content in component');
        result.recommendations.push('Ensure component has at least 500 characters of content');
      }
    }

    // Verify V0 component
    if (page.hasV0Component) {
      if (componentContent.includes('V0.app') || componentContent.includes('RealScoutWidget')) {
        result.v0Component = '✅ Present';
      } else {
        result.v0Component = '⚠️ Missing';
        result.issues.push('V0 component not found');
        result.recommendations.push('Add V0 component with RealScoutWidget integration');
      }
    }

    // Verify RealScout integration
    if (page.hasRealScout) {
      if (componentContent.includes('RealScoutWidget')) {
        result.realscout = '✅ Integrated';
      } else {
        result.realscout = '⚠️ Missing';
        result.issues.push('RealScout widget not found');
        result.recommendations.push('Add RealScoutWidget component');
      }
    }

    // Verify structured data
    if (page.hasStructuredData) {
      if (componentContent.includes('@context') && componentContent.includes('schema.org')) {
        result.structuredData = '✅ Present';
      } else {
        result.structuredData = '⚠️ Missing';
        result.issues.push('Structured data (schema.org) not found');
        result.recommendations.push('Add JSON-LD structured data in useEffect');
      }
    }

    // Overall status
    if (result.issues.length === 0) {
      result.status = '✅ PASS';
    } else {
      result.status = '⚠️ ISSUES FOUND';
    }
  } else {
    result.status = '❌ FILE NOT FOUND';
    result.issues.push(`File not found: ${page.file}`);
  }

  auditResults.push(result);
});

// Generate report
console.log('📊 Audit Results:\n');
console.log('='.repeat(80));

auditResults.forEach((result) => {
  console.log(`\n📄 ${result.path}`);
  console.log(`   Status: ${result.status}`);
  console.log(`   Canonical: ${result.canonical || 'N/A'}`);
  console.log(`   Robots: ${result.robots || 'N/A'}`);
  console.log(`   Content: ${result.content || 'N/A'}`);
  console.log(`   V0 Component: ${result.v0Component || 'N/A'}`);
  console.log(`   RealScout: ${result.realscout || 'N/A'}`);
  console.log(`   Structured Data: ${result.structuredData || 'N/A'}`);

  if (result.issues.length > 0) {
    console.log(`\n   ⚠️ Issues:`);
    result.issues.forEach((issue) => {
      console.log(`      - ${issue}`);
    });
  }

  if (result.recommendations.length > 0) {
    console.log(`\n   💡 Recommendations:`);
    result.recommendations.forEach((rec) => {
      console.log(`      - ${rec}`);
    });
  }
});

console.log('\n' + '='.repeat(80));
console.log('\n📋 Summary:\n');

const passed = auditResults.filter((r) => r.status === '✅ PASS').length;
const issues = auditResults.filter((r) => r.status === '⚠️ ISSUES FOUND').length;
const failed = auditResults.filter((r) => r.status === '❌ FILE NOT FOUND').length;

console.log(`✅ Passed: ${passed}`);
console.log(`⚠️ Issues: ${issues}`);
console.log(`❌ Failed: ${failed}`);
console.log(`\nTotal Pages Audited: ${auditResults.length}`);

// Generate detailed report file
const reportPath = path.join(__dirname, '../INDEXING_AUDIT_REPORT.md');
let report = '# SEO Indexing Audit Report\n\n';
report += `Generated: ${new Date().toISOString()}\n\n`;

report += '## Summary\n\n';
report += `- ✅ Passed: ${passed}\n`;
report += `- ⚠️ Issues: ${issues}\n`;
report += `- ❌ Failed: ${failed}\n\n`;

report += '## Detailed Results\n\n';

auditResults.forEach((result) => {
  report += `### ${result.path}\n\n`;
  report += `**Status:** ${result.status}\n\n`;
  report += `- Canonical: ${result.canonical || 'N/A'}\n`;
  report += `- Robots: ${result.robots || 'N/A'}\n`;
  report += `- Content: ${result.content || 'N/A'}\n`;
  report += `- V0 Component: ${result.v0Component || 'N/A'}\n`;
  report += `- RealScout: ${result.realscout || 'N/A'}\n`;
  report += `- Structured Data: ${result.structuredData || 'N/A'}\n\n`;

  if (result.issues.length > 0) {
    report += '**Issues:**\n\n';
    result.issues.forEach((issue) => {
      report += `- ${issue}\n`;
    });
    report += '\n';
  }

  if (result.recommendations.length > 0) {
    report += '**Recommendations:**\n\n';
    result.recommendations.forEach((rec) => {
      report += `- ${rec}\n`;
    });
    report += '\n';
  }
});

report += '## Recommendations\n\n';

if (issues > 0) {
  report += '### Immediate Actions\n\n';
  report += '1. **Verify content exists** on all pages\n';
  report += '2. **Check page loading** - Ensure no errors\n';
  report += '3. **Validate structured data** - Use Google Rich Results Test\n';
  report += '4. **Request indexing** - Manually request in Search Console\n';
  report += '5. **Monitor over 2-4 weeks**\n\n';
} else {
  report += 'All pages passed the audit! 🎉\n\n';
  report += '**Next Steps:**\n\n';
  report += '1. **Submit sitemap** to Google Search Console\n';
  report += '2. **Request indexing** for all pages\n';
  report += '3. **Monitor indexing status** over 2-4 weeks\n';
  report += '4. **Review performance** in Search Console\n\n';
}

report += '## Why Pages May Show "Discovered - currently not indexed"\n\n';
report += '1. **New pages** - Takes time for Google to index\n';
report += '2. **Content quality** - Ensure substantial, unique content\n';
report += '3. **Technical issues** - Check for crawl errors\n';
report += '4. **Canonical conflicts** - Ensure proper canonical URLs\n';
report += '5. **robots.txt** - Verify not blocking crawlers\n\n';

report += '## Testing Instructions\n\n';
report += '1. Visit each page in the browser\n';
report += '2. View page source and verify:\n';
report += '   - Canonical URL in <head>\n';
report += '   - Meta robots tag\n';
report += '   - Structured data (JSON-LD)\n';
report += '3. Use Google Rich Results Test\n';
report += '4. Check Google Search Console for crawl errors\n\n';

fs.writeFileSync(reportPath, report);
console.log(`\n📄 Detailed report saved to: ${reportPath}`);

