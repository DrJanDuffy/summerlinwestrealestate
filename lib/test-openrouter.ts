// OpenRouter integration test utilities for real estate applications

interface OpenRouterTestResult {
  success: boolean;
  message: string;
  details?: any;
}

interface RealEstateModel {
  id: string;
  name: string;
  description: string;
  provider: string;
  pricing: string;
  useCase: string;
}

/**
 * Test OpenRouter integration
 */
export async function testOpenRouterIntegration(): Promise<OpenRouterTestResult> {
  try {
    // Check if OpenRouter API key is configured
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return {
        success: false,
        message: 'OpenRouter API key not configured',
        details: 'Please set OPENROUTER_API_KEY environment variable',
      };
    }

    // Test basic API connectivity
    const response = await fetch('https://openrouter.ai/api/v1/models', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return {
        success: false,
        message: 'OpenRouter API connection failed',
        details: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    const models = await response.json();

    return {
      success: true,
      message: 'OpenRouter integration successful',
      details: {
        modelsAvailable: models.data?.length || 0,
        apiStatus: 'connected',
      },
    };
  } catch (error) {
    return {
      success: false,
      message: 'OpenRouter test failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get recommended models for real estate use cases
 */
export function getRealEstateModels(): RealEstateModel[] {
  return [
    {
      id: 'anthropic/claude-3.5-sonnet',
      name: 'Claude 3.5 Sonnet',
      description: 'Advanced reasoning and analysis for market reports',
      provider: 'Anthropic',
      pricing: '$3.00/1M input tokens',
      useCase: 'Market analysis, property descriptions, client communications',
    },
    {
      id: 'openai/gpt-4o',
      name: 'GPT-4o',
      description: 'Multimodal AI for property analysis and content creation',
      provider: 'OpenAI',
      pricing: '$2.50/1M input tokens',
      useCase: 'Property valuations, listing descriptions, market insights',
    },
    {
      id: 'google/gemini-pro-1.5',
      name: 'Gemini Pro 1.5',
      description: "Google's advanced model for data analysis",
      provider: 'Google',
      pricing: '$1.25/1M input tokens',
      useCase: 'Market data analysis, trend identification, reporting',
    },
    {
      id: 'meta-llama/llama-3.1-405b-instruct',
      name: 'Llama 3.1 405B',
      description: 'Open-source model for general real estate tasks',
      provider: 'Meta',
      pricing: '$0.59/1M input tokens',
      useCase: 'Content generation, client responses, market summaries',
    },
    {
      id: 'mistralai/mistral-7b-instruct',
      name: 'Mistral 7B Instruct',
      description: 'Fast and efficient for simple real estate tasks',
      provider: 'Mistral AI',
      pricing: '$0.20/1M input tokens',
      useCase: 'Quick responses, basic analysis, content formatting',
    },
  ];
}

/**
 * Generate real estate content using OpenRouter
 */
export async function generateRealEstateContent(
  prompt: string,
  model: string = 'anthropic/claude-3.5-sonnet'
): Promise<{ success: boolean; content?: string; error?: string }> {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      throw new Error('OpenRouter API key not configured');
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://summerlinwestrealestate.com',
        'X-Title': 'Summerlin West Real Estate',
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content:
              'You are a professional real estate assistant specializing in Summerlin West, Las Vegas. Provide accurate, helpful information about properties, market conditions, and real estate services.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No content generated');
    }

    return {
      success: true,
      content,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
