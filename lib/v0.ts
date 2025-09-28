/**
 * V0 API Configuration for AI-powered development
 *
 * This utility provides access to OpenRouter API for generating
 * React components and Next.js applications with AI assistance.
 * Updated for September 2025 with latest model capabilities.
 * Uses OpenRouter for unified access to multiple AI models.
 *
 * @see https://openrouter.ai/docs
 */

// Placeholder for V0 API - will be implemented when needed
export const v0 = {
  generateText: async (options: { prompt: string; temperature?: number; maxTokens?: number }) => {
    // Placeholder implementation
    return { text: '// Component generation placeholder - implement when needed' };
  },
};

/**
 * Generate React components using v0's AI model
 *
 * @param prompt - Description of the component to generate
 * @param options - Additional options for generation
 * @returns Promise<string> - Generated React component code
 */
export async function generateComponent(
  prompt: string,
  options: {
    framework?: 'react' | 'next';
    style?: 'tailwind' | 'css' | 'styled-components';
    includeTypes?: boolean;
    model?: string;
  } = {}
): Promise<string> {
  const { framework = 'next', style = 'tailwind', includeTypes = true, model } = options;

  const systemPrompt = `You are an expert React/Next.js developer specializing in real estate websites. 
Generate clean, modern, accessible React components using ${framework} and ${style}.

Requirements:
- Use TypeScript with strict typing
- Follow Next.js 15+ best practices
- Implement responsive design (mobile-first)
- Include proper accessibility attributes
- Use semantic HTML elements
- Optimize for Core Web Vitals
- Follow real estate industry standards
- Include proper SEO considerations

For real estate components, consider:
- Property listings and cards
- Search filters and forms
- Image galleries and virtual tours
- Contact forms and lead capture
- Market data displays
- Community information sections

Generate only the component code, no explanations.`;

  try {
    const result = await v0.generateText({
      prompt: `${systemPrompt}\n\nUser: ${prompt}`,
      temperature: 0.7,
      maxTokens: 4000,
    });

    return result.text || '';
  } catch (error) {
    console.error('Error generating component:', error);
    throw new Error('Failed to generate component with v0 API');
  }
}

/**
 * Generate complete page layouts for real estate websites
 *
 * @param pageType - Type of page to generate
 * @param requirements - Specific requirements for the page
 * @returns Promise<string> - Generated page component code
 */
export async function generateRealEstatePage(
  pageType: 'property-listing' | 'community' | 'market-report' | 'contact',
  requirements: {
    location?: string;
    features?: string[];
    seoKeywords?: string[];
    model?: 'gpt-5' | 'claude-4-opus' | 'gemini-2.5-pro';
  } = {}
): Promise<string> {
  const {
    location = 'Summerlin West',
    features = [],
    seoKeywords = [],
    model = 'gpt-5',
  } = requirements;

  const systemPrompt = `You are an expert real estate developer specializing in ${pageType} pages for Dr. Janet Duffy's Summerlin West Real Estate business.

Generate a complete Next.js page component with:
- TypeScript interfaces and proper typing
- Tailwind CSS 4+ styling with mobile-first responsive design
- SEO optimization with proper meta tags and structured data
- Accessibility compliance (WCAG 2.1 AA)
- Core Web Vitals optimization
- Real estate industry best practices

Page Type: ${pageType}
Location: ${location}
Features: ${features.join(', ')}
SEO Keywords: ${seoKeywords.join(', ')}

Generate only the complete page component code, no explanations.`;

  try {
    const result = await v0.generateText({
      prompt: `${systemPrompt}\n\nUser: Generate a ${pageType} page for ${location}`,
      temperature: 0.7,
      maxTokens: 6000,
    });

    return result.text || '';
  } catch (error) {
    console.error('Error generating real estate page:', error);
    throw new Error('Failed to generate real estate page with v0 API');
  }
}

/**
 * Generate content using the best model for the task
 *
 * @param prompt - Content generation prompt
 * @param taskType - Type of task to perform
 * @param options - Additional options for generation
 * @returns Promise<string> - Generated content
 */
export async function generateWithBestModel(
  prompt: string,
  taskType:
    | 'component'
    | 'analysis'
    | 'seo'
    | 'multilingual'
    | 'image'
    | 'form'
    | 'market-report'
    | 'community-page',
  options: {
    temperature?: number;
    max_tokens?: number;
    includeTypes?: boolean;
    model?: string;
  } = {}
): Promise<string> {
  const { temperature, max_tokens, includeTypes = true, model } = options;

  const systemPrompt = `You are an expert AI assistant specialized in ${taskType} tasks for real estate websites.

Generate high-quality content with:
- Professional real estate industry standards
- SEO optimization where applicable
- Accessibility compliance
- Mobile-first responsive design
- TypeScript types ${includeTypes ? 'included' : 'not required'}

Generate only the requested content, no explanations.`;

  try {
    const result = await v0.generateText({
      prompt: `${systemPrompt}\n\nUser: ${prompt}`,
      temperature: temperature || 0.7,
      maxTokens: max_tokens || 4000,
    });

    return result.text || '';
  } catch (error) {
    console.error('Error generating content with best model:', error);
    throw new Error(`Failed to generate content`);
  }
}

/**
 * Validate OpenRouter API configuration
 *
 * @returns boolean - Whether the API is properly configured
 */
export function validateV0Config(): boolean {
  if (!process.env.OPENROUTER_API_KEY) {
    console.error('OPENROUTER_API_KEY is not set in environment variables');
    return false;
  }

  if (process.env.OPENROUTER_API_KEY === 'your_api_key_here') {
    console.error('Please replace the placeholder API key with your actual OpenRouter API key');
    return false;
  }

  return true;
}
