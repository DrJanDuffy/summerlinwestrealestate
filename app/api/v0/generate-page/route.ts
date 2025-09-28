import { NextRequest, NextResponse } from 'next/server';
import { generateRealEstatePage } from '../../../../lib/v0';

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { pageType, requirements = {} } = body;

    if (!pageType) {
      return NextResponse.json(
        { error: 'Page type is required' },
        { status: 400 }
      );
    }

    const page = await generateRealEstatePage(
      pageType as 'property-listing' | 'community' | 'market-report' | 'contact',
      {
        location: 'Summerlin West',
        features: ['luxury homes', 'Red Rock Canyon views', 'master-planned community'],
        seoKeywords: ['Summerlin West real estate', 'luxury homes Las Vegas', 'The Vistas'],
        model: 'gpt-5',
        ...requirements,
      }
    );

    return NextResponse.json({
      page,
      metadata: {
        generatedAt: new Date().toISOString(),
        pageType,
        requirements,
      },
    });
  } catch (error) {
    console.error('Error generating page:', error);
    return NextResponse.json(
      { error: 'Failed to generate page' },
      { status: 500 }
    );
  }
}
