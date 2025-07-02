import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cloudflareToken = process.env.CLOUDFLARE_API_TOKEN;
  const fubApiKey = process.env.FUB_API_KEY;
  
  return NextResponse.json({ 
    message: 'Environment variables test',
    cloudflareToken: cloudflareToken ? 'Set (hidden)' : 'Not set',
    fubApiKey: fubApiKey ? 'Set (hidden)' : 'Not set',
    allEnvVars: Object.keys(process.env).filter(key => key.includes('CLOUDFLARE') || key.includes('FUB'))
  });
} 