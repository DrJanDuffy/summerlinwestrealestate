import { NextRequest, NextResponse } from 'next/server';
import { generateComponent } from '../../../../lib/v0';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, options = {} } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const component = await generateComponent(prompt, {
      framework: 'next',
      style: 'tailwind',
      includeTypes: true,
      model: 'v0-1.5-md',
      ...options,
    });

    return NextResponse.json({
      component,
      metadata: {
        generatedAt: new Date().toISOString(),
        options: { framework: 'next', style: 'tailwind', model: 'v0-1.5-md', ...options },
      },
    });
  } catch (error) {
    console.error('Error generating component:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate component' },
      { status: 500 }
    );
  }
}
