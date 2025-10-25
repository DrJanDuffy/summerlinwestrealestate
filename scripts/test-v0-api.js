#!/usr/bin/env node

/**
 * Test V0 API Key Integration
 */

console.log('🔍 Testing V0 API Key Integration...\n');

// Check environment variables
console.log('Environment Variables Check:');
console.log('============================');

// Check for V0_API_KEY
if (process.env.V0_API_KEY) {
  console.log('✅ V0_API_KEY found in environment');
  console.log(`   Key length: ${process.env.V0_API_KEY.length} characters`);
  console.log(`   Key starts with: ${process.env.V0_API_KEY.substring(0, 8)}...`);
} else {
  console.log('❌ V0_API_KEY not found in environment');
}

// Check for other related environment variables
const relatedVars = [
  'VERCEL_TOKEN',
  'VERCEL_API_TOKEN', 
  'AI_API_KEY',
  'OPENAI_API_KEY',
  'ANTHROPIC_API_KEY',
  'GOOGLE_API_KEY'
];

console.log('\nOther Related Environment Variables:');
console.log('====================================');
relatedVars.forEach(varName => {
  if (process.env[varName]) {
    console.log(`✅ ${varName} found`);
  } else {
    console.log(`❌ ${varName} not found`);
  }
});

// Test the V0 integration
console.log('\nTesting V0 Integration:');
console.log('======================');

try {
  const { validateV0Config } = require('../lib/v0.ts');
  const isValid = validateV0Config();
  
  if (isValid) {
    console.log('✅ V0 configuration is valid');
  } else {
    console.log('❌ V0 configuration is invalid');
  }
} catch (error) {
  console.log('❌ Error testing V0 integration:', error.message);
}

// Test a simple V0 API call
console.log('\nTesting V0 API Call:');
console.log('====================');

async function testV0API() {
  try {
    const { v0 } = require('../lib/v0.ts');
    
    const result = await v0.generateText({
      prompt: 'Generate a simple React component that displays "Hello World"',
      temperature: 0.7,
      maxTokens: 1000
    });
    
    console.log('✅ V0 API call successful!');
    console.log('Generated content preview:', result.text.substring(0, 200) + '...');
    
  } catch (error) {
    console.log('❌ V0 API call failed:', error.message);
  }
}

testV0API();

console.log('\n📋 Next Steps:');
console.log('==============');
console.log('1. If V0_API_KEY is not found, you may need to:');
console.log('   - Create a .env.local file with V0_API_KEY=your_key');
console.log('   - Set the environment variable in your system');
console.log('   - Add it to Vercel environment variables');
console.log('');
console.log('2. If V0_API_KEY is found but API calls fail:');
console.log('   - Check if the API key is valid');
console.log('   - Verify the key has proper permissions');
console.log('   - Check network connectivity');
console.log('');
console.log('3. Get V0 API key from: https://vercel.com/account/tokens');



