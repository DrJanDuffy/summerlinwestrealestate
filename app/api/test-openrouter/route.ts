import { NextResponse } from 'next/server';
import { getRealEstateModels, testOpenRouterIntegration } from '../../../lib/test-openrouter';

export async function GET() {
  try {
    // Test OpenRouter integration
    const testResult = await testOpenRouterIntegration();

    // Get available models for real estate use cases
    const realEstateModels = getRealEstateModels();

    return NextResponse.json({
      success: testResult.success,
      message: testResult.message,
      details: testResult.details,
      availableModels: realEstateModels,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('OpenRouter test error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'OpenRouter test failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
