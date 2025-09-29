#!/usr/bin/env node

/**
 * V0-Generated RealScout Widget Fix Script
 * Automatically fixes all identified RealScout widget issues
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = process.cwd();

// Files that need fixing based on audit
const FILES_TO_FIX = [
  'app/about/AboutClient.tsx',
  'app/properties/PropertiesClient.tsx',
  'app/current-listing/CurrentListingClient.tsx',
  'app/communities/page.tsx',
  'app/communities/[slug]/page.tsx',
  'app/service-area/page.tsx',
  'app/service-area/[slug]/ClientSubdivisionPage.tsx',
  'app/market-reports/MarketReportsClient.tsx',
  'app/contact/ContactClient.tsx',
  'app/blog/page.tsx',
  'app/new-homes-summerlin/NewHomesSummerlinClient.tsx',
  'app/downtown-summerlin/page.tsx',
  'app/the-vistas/page.tsx'
];

// Fix patterns
const FIX_PATTERNS = {
  // Import statements to add
  importStatement: `import dynamic from 'next/dynamic';

const RealScoutOfficeListingsWrapper = dynamic(() => import('../../components/ui/RealScoutOfficeListingsWrapper'), {
  ssr: false,
});`,

  // Raw office listings replacement
  rawOfficeListings: {
    pattern: /<realscout-office-listings[^>]*>/g,
    replacement: (match) => {
      // Extract parameters from the match
      const agentMatch = match.match(/agent-encoded-id="([^"]*)"/);
      const priceMinMatch = match.match(/price-min="([^"]*)"/);
      const priceMaxMatch = match.match(/price-max="([^"]*)"/);
      const sortOrderMatch = match.match(/sort-order="([^"]*)"/);
      const listingStatusMatch = match.match(/listing-status="([^"]*)"/);
      const propertyTypesMatch = match.match(/property-types="([^"]*)"/);
      const maxListingsMatch = match.match(/max-listings="([^"]*)"/);
      
      const agentId = agentMatch ? agentMatch[1] : 'QWdlbnQtMjI1MDUw';
      const priceMin = priceMinMatch ? priceMinMatch[1] : '400000';
      const priceMax = priceMaxMatch ? priceMaxMatch[1] : '2000000';
      const sortOrder = sortOrderMatch ? sortOrderMatch[1] : 'PRICE_LOW';
      const listingStatus = listingStatusMatch ? listingStatusMatch[1] : 'For Sale';
      const propertyTypes = propertyTypesMatch ? propertyTypesMatch[1] : ',SFR,MF,TC,LAL,MOBILE,OTHER';
      const maxListings = maxListingsMatch ? maxListingsMatch[1] : '12';
      
      return `<RealScoutOfficeListingsWrapper 
              agentEncodedId="${agentId}" 
              sortOrder="${sortOrder}" 
              listingStatus="${listingStatus}" 
              propertyTypes="${propertyTypes}" 
              priceMin="${priceMin}" 
              priceMax="${priceMax}"
              maxListings={${maxListings}}
              className="mt-6"
            />`;
    }
  },

  // Raw search widget replacement
  rawSearchWidget: {
    pattern: /<realscout-search-widget[^>]*>/g,
    replacement: `<RealScoutAdvancedSearch className="mt-6" />`
  },

  // Raw lead capture replacement
  rawLeadCapture: {
    pattern: /<realscout-lead-capture[^>]*>/g,
    replacement: `<RealScoutLeadCapture className="mt-6" />`
  }
};

function fixFile(filePath) {
  const fullPath = path.join(PROJECT_ROOT, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let hasChanges = false;
  
  // Check if file needs the import statement
  const needsImport = content.includes('<realscout-office-listings') && !content.includes('RealScoutOfficeListingsWrapper');
  
  if (needsImport) {
    // Add import statement after existing imports
    const importMatch = content.match(/(import[^;]+;[\s\n]*)+/);
    if (importMatch) {
      const importEnd = importMatch[0].length;
      content = content.slice(0, importEnd) + '\n' + FIX_PATTERNS.importStatement + '\n' + content.slice(importEnd);
      hasChanges = true;
    }
  }
  
  // Replace raw HTML elements
  if (content.includes('<realscout-office-listings')) {
    content = content.replace(FIX_PATTERNS.rawOfficeListings.pattern, FIX_PATTERNS.rawOfficeListings.replacement);
    hasChanges = true;
  }
  
  if (content.includes('<realscout-search-widget')) {
    content = content.replace(FIX_PATTERNS.rawSearchWidget.pattern, FIX_PATTERNS.rawSearchWidget.replacement);
    hasChanges = true;
  }
  
  if (content.includes('<realscout-lead-capture')) {
    content = content.replace(FIX_PATTERNS.rawLeadCapture.pattern, FIX_PATTERNS.rawLeadCapture.replacement);
    hasChanges = true;
  }
  
  if (hasChanges) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } else {
    console.log(`⏭️  No changes needed: ${filePath}`);
    return false;
  }
}

function runFix() {
  console.log('🔧 Starting V0-Generated RealScout Widget Fix...\n');
  
  let fixedCount = 0;
  
  FILES_TO_FIX.forEach(filePath => {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`\n📊 FIX SUMMARY:`);
  console.log(`   Files processed: ${FILES_TO_FIX.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`   Files unchanged: ${FILES_TO_FIX.length - fixedCount}`);
  
  if (fixedCount > 0) {
    console.log(`\n🎯 NEXT STEPS:`);
    console.log(`   1. Test the fixed widgets for "No listings available" issue`);
    console.log(`   2. Verify all pages load properly`);
    console.log(`   3. Check browser console for any errors`);
    console.log(`   4. Run the audit again to verify fixes`);
  }
  
  console.log(`\n✅ FIX COMPLETE`);
  return fixedCount > 0;
}

// Run the fix
if (require.main === module) {
  const hasChanges = runFix();
  process.exit(hasChanges ? 0 : 1);
}

module.exports = { runFix };
