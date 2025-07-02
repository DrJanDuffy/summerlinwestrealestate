import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const { name, email, phone, page } = await req.json();
  const apiKey = process.env.FUB_API_KEY;

  if (!email || !apiKey) {
    return NextResponse.json({ error: 'Missing email or API key' }, { status: 400 });
  }

  try {
    // Send lead to Follow Up Boss
    const response = await axios.post(
      'https://api.followupboss.com/v1/people',
      {
        email: [email],
        name: name || undefined,
        phones: phone ? [{ number: phone }] : undefined,
        source: 'Summerlin West Website',
        tags: [page || 'Website Lead'],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
        },
      }
    );
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error?.response?.data || 'Failed to send lead' }, { status: 500 });
  }
} 