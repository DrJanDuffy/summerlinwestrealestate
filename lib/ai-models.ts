/**
 * AI Model Configuration for Summerlin West Real Estate
 * 
 * This file centralizes all AI model configurations and provides
 * utilities for selecting the best model for specific tasks.
 * 
 * Updated for September 2025 with latest model capabilities
 */

export interface ModelConfig {
  name: string;
  provider: string;
  release: string;
  contextWindow: number;
  strengths: string[];
  bestFor: string[];
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
  costTier: 'low' | 'medium' | 'high' | 'enterprise';
  responseTime: string;
}

export const AI_MODELS: Record<string, ModelConfig> = {
  'openai/gpt-4o': {
    name: 'GPT-4o',
    provider: 'OpenAI',
    release: 'May 2024',
    contextWindow: 128000,
    strengths: ['Enhanced reasoning', 'Multimodal capabilities', 'Superior code generation', 'Next.js expertise'],
    bestFor: ['Component generation', 'Complex problem-solving', 'Real estate content', 'Form optimization'],
    temperature: 0.7,
    maxTokens: 4000,
    topP: 0.9,
    frequencyPenalty: 0.1,
    presencePenalty: 0.1,
    costTier: 'medium',
    responseTime: '2-5 seconds'
  },
  'anthropic/claude-3.5-sonnet': {
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    release: 'June 2024',
    contextWindow: 200000,
    strengths: ['Exceptional reasoning', 'Long-form memory', 'Code generation excellence', 'Complex analysis'],
    bestFor: ['Market analysis', 'Content strategy', 'Strategic planning', 'Community research'],
    temperature: 0.3,
    maxTokens: 8000,
    topP: 0.8,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
    costTier: 'high',
    responseTime: '5-10 seconds'
  },
  'google/gemini-pro-1.5': {
    name: 'Gemini Pro 1.5',
    provider: 'Google DeepMind',
    release: 'February 2024',
    contextWindow: 1000000,
    strengths: ['Robust multimodal processing', 'Google ecosystem integration', 'SEO optimization', 'Comprehensive data processing'],
    bestFor: ['SEO content', 'Image analysis', 'Google integration', 'Multimodal content'],
    temperature: 0.5,
    maxTokens: 6000,
    topP: 0.85,
    frequencyPenalty: 0.05,
    presencePenalty: 0.05,
    costTier: 'medium',
    responseTime: '3-8 seconds'
  },
  'meta-llama/llama-3.1-405b-instruct': {
    name: 'Llama 3.1 405B',
    provider: 'Meta',
    release: 'July 2024',
    contextWindow: 128000,
    strengths: ['Large context', 'Multilingual support', 'Enterprise reliability', 'Cost-effective'],
    bestFor: ['Multilingual content', 'Enterprise applications', 'International real estate', 'Scalable processing'],
    temperature: 0.6,
    maxTokens: 5000,
    topP: 0.9,
    frequencyPenalty: 0.1,
    presencePenalty: 0.1,
    costTier: 'medium',
    responseTime: '4-9 seconds'
  },
  'openai/dall-e-3': {
    name: 'DALL-E 3',
    provider: 'OpenAI',
    release: 'October 2023',
    contextWindow: 0, // Image generation model
    strengths: ['Highly realistic visuals', 'Sharp text rendering', 'Broad style range', 'Professional quality'],
    bestFor: ['Property images', 'Community visuals', 'Marketing materials', 'Custom digital art'],
    temperature: 0.8,
    maxTokens: 0, // Not applicable for image generation
    topP: 0.9,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0,
    costTier: 'high',
    responseTime: '10-30 seconds'
  }
};

export type TaskType = 'component' | 'analysis' | 'seo' | 'multilingual' | 'image' | 'form' | 'market-report' | 'community-page';

export const TASK_MODEL_MAPPING: Record<TaskType, string> = {
  component: 'openai/gpt-4o',
  analysis: 'anthropic/claude-3.5-sonnet',
  seo: 'google/gemini-pro-1.5',
  multilingual: 'meta-llama/llama-3.1-405b-instruct',
  image: 'openai/dall-e-3',
  form: 'openai/gpt-4o',
  'market-report': 'anthropic/claude-3.5-sonnet',
  'community-page': 'anthropic/claude-3.5-sonnet'
};

/**
 * Select the best AI model for a specific task
 * 
 * @param taskType - Type of task to perform
 * @returns ModelConfig - Configuration for the recommended model
 */
export function selectBestModel(taskType: TaskType): ModelConfig {
  const modelName = TASK_MODEL_MAPPING[taskType];
  return AI_MODELS[modelName];
}

/**
 * Get model configuration by name
 * 
 * @param modelName - Name of the model
 * @returns ModelConfig - Configuration for the model
 */
export function getModelConfig(modelName: string): ModelConfig | null {
  return AI_MODELS[modelName] || null;
}

/**
 * Get all available models for a specific use case
 * 
 * @param useCase - Use case description
 * @returns ModelConfig[] - Array of suitable models
 */
export function getModelsForUseCase(useCase: string): ModelConfig[] {
  const suitableModels: ModelConfig[] = [];
  
  Object.values(AI_MODELS).forEach(model => {
    if (model.bestFor.some(use => use.toLowerCase().includes(useCase.toLowerCase()))) {
      suitableModels.push(model);
    }
  });
  
  return suitableModels.sort((a, b) => {
    // Sort by cost tier (low to high) and then by response time
    const costOrder = { low: 0, medium: 1, high: 2, enterprise: 3 };
    return costOrder[a.costTier] - costOrder[b.costTier];
  });
}

/**
 * Get optimal parameters for a specific model and task
 * 
 * @param modelName - Name of the model
 * @param taskType - Type of task
 * @returns Partial<ModelConfig> - Optimized parameters
 */
export function getOptimalParameters(modelName: string, taskType: TaskType): Partial<ModelConfig> {
  const model = AI_MODELS[modelName];
  if (!model) return {};

  // Task-specific parameter adjustments
  const adjustments: Record<TaskType, Partial<ModelConfig>> = {
    component: { temperature: 0.7, maxTokens: 4000 },
    analysis: { temperature: 0.3, maxTokens: 8000 },
    seo: { temperature: 0.5, maxTokens: 6000 },
    multilingual: { temperature: 0.6, maxTokens: 5000 },
    image: { temperature: 0.8 },
    form: { temperature: 0.7, maxTokens: 3000 },
    'market-report': { temperature: 0.3, maxTokens: 8000 },
    'community-page': { temperature: 0.4, maxTokens: 6000 }
  };

  return {
    ...model,
    ...adjustments[taskType]
  };
}

/**
 * Validate model availability and configuration
 * 
 * @param modelName - Name of the model to validate
 * @returns boolean - Whether the model is available and configured
 */
export function validateModelAvailability(modelName: string): boolean {
  const model = AI_MODELS[modelName];
  if (!model) return false;

  // All models are available through OpenRouter
  return !!process.env.OPENROUTER_API_KEY;
}

/**
 * Get fallback model for a primary model
 * 
 * @param primaryModel - Primary model name
 * @returns string - Fallback model name
 */
export function getFallbackModel(primaryModel: string): string {
  const fallbacks: Record<string, string> = {
    'openai/gpt-4o': 'openai/gpt-4o-mini',
    'anthropic/claude-3.5-sonnet': 'anthropic/claude-3-haiku',
    'google/gemini-pro-1.5': 'google/gemini-pro',
    'meta-llama/llama-3.1-405b-instruct': 'meta-llama/llama-3.1-70b-instruct',
    'openai/dall-e-3': 'openai/dall-e-2'
  };

  return fallbacks[primaryModel] || 'openai/gpt-4o-mini';
}

/**
 * Calculate estimated cost for a model operation
 * 
 * @param modelName - Name of the model
 * @param inputTokens - Number of input tokens
 * @param outputTokens - Number of output tokens
 * @returns number - Estimated cost in USD
 */
export function calculateEstimatedCost(modelName: string, inputTokens: number, outputTokens: number): number {
  // OpenRouter pricing (simplified cost calculation)
  const costPer1KTokens: Record<string, { input: number; output: number }> = {
    'openai/gpt-4o': { input: 0.005, output: 0.015 },
    'anthropic/claude-3.5-sonnet': { input: 0.003, output: 0.015 },
    'google/gemini-pro-1.5': { input: 0.00125, output: 0.005 },
    'meta-llama/llama-3.1-405b-instruct': { input: 0.0027, output: 0.0027 },
    'openai/dall-e-3': { input: 0.0, output: 0.04 } // Per image
  };

  const costs = costPer1KTokens[modelName];
  if (!costs) return 0;

  const inputCost = (inputTokens / 1000) * costs.input;
  const outputCost = (outputTokens / 1000) * costs.output;

  return inputCost + outputCost;
}
