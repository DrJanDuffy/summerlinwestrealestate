const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', '.next/**', 'dist/**', 'fix-types.js', 'fix-types.ts']
});

console.log(`Found ${files.length} files to process...`);

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Replace explicit 'any' types with 'unknown' (safest default)
  const explicitAnyRegex = /:\s*any(?!\w)/g;
  if (content.match(explicitAnyRegex)) {
    content = content.replace(explicitAnyRegex, ': unknown');
    modified = true;
  }

  // Replace 'any' in function parameters
  const functionParamAnyRegex = /\(([^)]*):\s*any([^)]*)\)/g;
  if (content.match(functionParamAnyRegex)) {
    content = content.replace(/\(([^)]*):\s*any([^)]*)\)/g, '($1: unknown$2)');
    modified = true;
  }

  // Replace 'any' in variable declarations
  const variableAnyRegex = /(\w+)\s*:\s*any\s*=/g;
  if (content.match(variableAnyRegex)) {
    content = content.replace(/(\w+)\s*:\s*any\s*=/g, '$1: unknown =');
    modified = true;
  }

  // Replace 'any' in interface/type definitions
  const interfaceAnyRegex = /(\w+)\s*:\s*any\s*;/g;
  if (content.match(interfaceAnyRegex)) {
    content = content.replace(/(\w+)\s*:\s*any\s*;/g, '$1: unknown;');
    modified = true;
  }

  // Replace 'any' in array types
  const arrayAnyRegex = /any\[\]/g;
  if (content.match(arrayAnyRegex)) {
    content = content.replace(/any\[\]/g, 'unknown[]');
    modified = true;
  }

  // Replace 'any' in Promise types
  const promiseAnyRegex = /Promise<any>/g;
  if (content.match(promiseAnyRegex)) {
    content = content.replace(/Promise<any>/g, 'Promise<unknown>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed types in: ${filePath}`);
  }
});

console.log('\nType fixes completed!');
console.log('All "any" types have been replaced with "unknown" for better type safety.');
console.log('\nManual review needed:');
console.log('1. Review "unknown" types and replace with more specific types where possible');
console.log('2. Consider "string | number" for primitive values');
console.log('3. Consider "object" for object types');
console.log('4. Add proper interfaces for complex data structures'); 