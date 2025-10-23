import { NextRequest, NextResponse } from 'next/server';

/**
 * Test endpoint for Vercel Agent analysis
 * This endpoint demonstrates various code patterns that Vercel Agent can analyze
 */

interface TestData {
  id: string;
  name: string;
  price: number;
  location: string;
  features: string[];
}

// Example function with potential issues for Vercel Agent to catch
export async function GET(request: NextRequest) {
  try {
    // Simulate some data processing
    const testData: TestData[] = [
      {
        id: '1',
        name: 'Luxury Home in The Vistas',
        price: 1200000,
        location: 'Summerlin West',
        features: ['Pool', 'Mountain Views', 'Gated Community']
      },
      {
        id: '2', 
        name: 'Modern Condo Downtown',
        price: 650000,
        location: 'Downtown Summerlin',
        features: ['Walkable', 'Shopping', 'Entertainment']
      }
    ];

    // Process the data (potential performance issue)
    const processedData = testData.map(item => ({
      ...item,
      priceFormatted: `$${item.price.toLocaleString()}`,
      featureCount: item.features.length
    }));

    // Add some analytics tracking
    const analytics = {
      timestamp: new Date().toISOString(),
      endpoint: '/api/test-vercel-agent',
      dataCount: processedData.length,
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    return NextResponse.json({
      success: true,
      data: processedData,
      analytics,
      message: 'Test endpoint working correctly'
    });

  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp: new Date().toISOString()
    });
  }
}

// POST method for testing form submissions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.status(400).json({
        success: false,
        error: 'Name and email are required'
      });
    }

    // Simulate lead capture
    const leadData = {
      id: Math.random().toString(36).substr(2, 9),
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      message: body.message || null,
      timestamp: new Date().toISOString(),
      source: 'test-vercel-agent'
    };

    // In a real implementation, you would save to database
    console.log('Lead captured:', leadData);

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      leadId: leadData.id
    });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.status(500).json({
      success: false,
      error: 'Failed to process request'
    });
  }
}
