const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', '.next/**', 'dist/**', 'fix-apostrophes.js']
});

console.log(`Found ${files.length} files to process...`);

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix unescaped apostrophes in JSX content
  // Look for patterns like: "Don't", "Vegas'", "buyer's", etc.
  const apostropheRegex = /(\w)'(\w)/g;
  if (content.match(apostropheRegex)) {
    content = content.replace(/(\w)'(\w)/g, "$1&apos;$2");
    modified = true;
  }

  // Also fix apostrophes at the end of words
  const endApostropheRegex = /(\w)'(\s|$|\.|,|;|!|\?|\)|"|'|`)/g;
  if (content.match(endApostropheRegex)) {
    content = content.replace(/(\w)'(\s|$|\.|,|;|!|\?|\)|"|'|`)/g, "$1&apos;$2");
    modified = true;
  }

  // Fix apostrophes at the beginning of words (contractions)
  const startApostropheRegex = /(\s|^|\(|"|'|`)'(\w)/g;
  if (content.match(startApostropheRegex)) {
    content = content.replace(/(\s|^|\(|"|'|`)'(\w)/g, "$1&apos;$2");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed apostrophes in: ${filePath}`);
  }
});

console.log('\nApostrophe fixes completed!');
console.log('All unescaped apostrophes have been replaced with &apos; HTML entities.'); 