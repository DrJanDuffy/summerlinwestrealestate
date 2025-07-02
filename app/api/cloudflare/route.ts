import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  
  if (!apiToken) {
    return NextResponse.json({ error: 'Cloudflare API token not configured' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.cloudflare.com/client/v4/user/tokens/verify', {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Cloudflare API error: ${data.errors?.[0]?.message || 'Unknown error'}`);
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Cloudflare API Error:', error);
    return NextResponse.json({ error: 'Failed to verify Cloudflare token' }, { status: 500 });
  }
} 