import { type NextRequest, NextResponse } from 'next/server';
import { generateComponent } from '../../../../lib/v0';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, model = 'gpt-5' } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const component = await generateComponent(prompt, { model });

    return NextResponse.json({
      success: true,
      component,
      model,
    });
  } catch (error) {
    console.error('V0 API Error:', error);
    return NextResponse.json({ error: 'Failed to generate component' }, { status: 500 });
  }
}
