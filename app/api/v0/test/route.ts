import { type NextRequest, NextResponse } from 'next/server';
import { validateV0Config, v0 } from '../../../../lib/v0';

export async function GET(request: NextRequest) {
  try {
    // Test 1: Validate configuration
    const configValid = validateV0Config();
    
    if (!configValid) {
      return NextResponse.json({
        success: false,
        error: 'V0 API configuration is invalid',
        details: {
          hasApiKey: !!process.env.V0_API_KEY,
          apiKeyLength: process.env.V0_API_KEY?.length || 0,
          isPlaceholder: process.env.V0_API_KEY === 'your_api_key_here',
        }
      }, { status: 400 });
    }

    // Test 2: Simple API call
    const testPrompt = 'Generate a simple React button component with TypeScript';
    
    const result = await v0.generateText({
      prompt: testPrompt,
      temperature: 0.7,
      maxTokens: 1000,
      model: 'v0-1.5-md',
    });

    return NextResponse.json({
      success: true,
      message: 'V0 API key is working correctly',
      testResult: {
        prompt: testPrompt,
        responseLength: result.text?.length || 0,
        hasResponse: !!result.text,
        model: 'v0-1.5-md',
      },
      config: {
        hasApiKey: !!process.env.V0_API_KEY,
        apiKeyLength: process.env.V0_API_KEY?.length || 0,
        isPlaceholder: process.env.V0_API_KEY === 'your_api_key_here',
      }
    });

  } catch (error) {
    console.error('V0 API Test Error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'V0 API test failed',
      details: {
        message: error instanceof Error ? error.message : 'Unknown error',
        hasApiKey: !!process.env.V0_API_KEY,
        apiKeyLength: process.env.V0_API_KEY?.length || 0,
        isPlaceholder: process.env.V0_API_KEY === 'your_api_key_here',
      }
    }, { status: 500 });
  }
}


