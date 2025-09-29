import { type NextRequest, NextResponse } from 'next/server';

// Static placeholder images for different prompts
const PLACEHOLDER_IMAGES = {
  'luxury residential neighborhood': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  'summerlin west': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  'red rock canyon': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  'las vegas': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  'modern homes': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  'desert landscaping': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  'mountain views': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  'blue sky': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  default: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
};

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Find the best matching placeholder image based on prompt keywords
    const promptLower = prompt.toLowerCase();
    let selectedImage = PLACEHOLDER_IMAGES.default;

    // Check for keyword matches
    for (const [keyword, imagePath] of Object.entries(PLACEHOLDER_IMAGES)) {
      if (keyword !== 'default' && promptLower.includes(keyword)) {
        selectedImage = imagePath;
        break;
      }
    }

    // For now, return the selected placeholder image
    // In the future, you could integrate with actual image generation services like:
    // - OpenAI DALL-E
    // - Midjourney API
    // - Stable Diffusion
    // - Cloudflare AI Workers

    return NextResponse.json({
      success: true,
      imagePath: selectedImage,
      placeholder: true,
      message:
        'Using placeholder image. Consider integrating with a dedicated image generation service.',
      prompt: prompt,
    });
  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate image',
        fallback: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      },
      { status: 500 }
    );
  }
}
