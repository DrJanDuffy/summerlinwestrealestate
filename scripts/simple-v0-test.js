#!/usr/bin/env node

/**
 * Simple V0 API Test
 */

console.log('🔍 Testing V0 API Access...\n');

// Check if we can access the V0 API without explicit key
async function testV0Access() {
  try {
    console.log('Testing Vercel V0 API access...');
    
    // Try to make a simple request to V0 API
    const response = await fetch('https://api.v0.app/v1/generate-component', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.V0_API_KEY || 'test'}`,
      },
      body: JSON.stringify({
        prompt: 'Create a simple React component that displays "Hello World"',
        model: 'v0-1.5-md',
        framework: 'next',
        style: 'tailwind',
        typescript: true
      })
    });

    if (response.ok) {
      console.log('✅ V0 API is accessible!');
      const data = await response.json();
      console.log('Response received:', data);
    } else {
      console.log('❌ V0 API returned error:', response.status, response.statusText);
      const errorText = await response.text();
      console.log('Error details:', errorText);
    }
    
  } catch (error) {
    console.log('❌ Error accessing V0 API:', error.message);
  }
}

// Check environment variables more thoroughly
console.log('Environment Variables Check:');
console.log('============================');

// Check all environment variables that might contain API keys
const allEnvVars = Object.keys(process.env);
const apiKeyVars = allEnvVars.filter(key => 
  key.includes('API') || 
  key.includes('KEY') || 
  key.includes('TOKEN') ||
  key.includes('V0') ||
  key.includes('VERCEL') ||
  key.includes('AI')
);

console.log('Found potential API key variables:');
apiKeyVars.forEach(key => {
  const value = process.env[key];
  console.log(`  ${key}: ${value ? `${value.substring(0, 8)}...` : 'not set'}`);
});

// Test V0 access
testV0Access();

console.log('\n💡 If V0_API_KEY is not found, you may need to:');
console.log('1. Set it in your system environment variables');
console.log('2. Create a .env.local file with V0_API_KEY=your_key');
console.log('3. Add it to Vercel project environment variables');
console.log('4. Get your API key from: https://vercel.com/account/tokens');



