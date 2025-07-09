import { NextRequest, NextResponse } from 'next/server';
import { experimental_generateImage as generateImage } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  const { image } = await generateImage({
    model: openai.image('dall-e-3'),
    prompt,
  });
  return NextResponse.json({ base64: image.base64 });
} 