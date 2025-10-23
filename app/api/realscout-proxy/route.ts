import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const agentId = searchParams.get('agentId') || 'QWdlbnQtMjI1MDUw';
    const officeId = searchParams.get('officeId') || process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID;
    
    // Try multiple RealScout API endpoints
    const endpoints = [
      `https://em.realscout.com/api/v1/agents/${agentId}/listings`,
      `https://api.realscout.com/v1/agents/${agentId}/listings`,
      `https://em.realscout.com/api/v1/listings?agentId=${agentId}`,
      `https://drjanduffy.realscout.com/api/v1/agents/${agentId}/listings`
    ];

    // If office ID is provided, try office endpoints
    if (officeId) {
      endpoints.unshift(
        `https://em.realscout.com/api/v1/offices/${officeId}/listings`,
        `https://api.realscout.com/v1/offices/${officeId}/listings`
      );
    }

    let lastError = '';
    
    for (const endpoint of endpoints) {
      try {
        console.log(`Trying RealScout API: ${endpoint}`);
        
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'SummerlinWestRealEstate/1.0',
          },
          // Add timeout
          signal: AbortSignal.timeout(10000)
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`Success for ${endpoint}:`, data);
          
          return NextResponse.json({
            success: true,
            endpoint: endpoint,
            data: data,
            agentId: agentId,
            officeId: officeId,
            timestamp: new Date().toISOString()
          });
        } else {
          lastError = `HTTP ${response.status}: ${response.statusText}`;
          console.log(`API Error for ${endpoint}:`, lastError);
        }
      } catch (apiError) {
        lastError = `Network Error: ${apiError}`;
        console.log(`Network Error for ${endpoint}:`, apiError);
      }
    }

    // If all endpoints fail, return error with fallback data
    return NextResponse.json({
      success: false,
      error: `All endpoints failed. Last error: ${lastError}`,
      agentId: agentId,
      officeId: officeId,
      fallbackData: {
        listings: [
          {
            id: 'fallback-1',
            address: '123 Summerlin West Dr, Las Vegas, NV 89134',
            price: 1295000,
            bedrooms: 4,
            bathrooms: 3,
            squareFeet: 3200,
            status: 'For Sale',
            community: 'The Vistas',
            description: 'Luxury single-story home with Red Rock Canyon views'
          },
          {
            id: 'fallback-2',
            address: '456 Stonebridge Way, Las Vegas, NV 89135',
            price: 975000,
            bedrooms: 3,
            bathrooms: 2,
            squareFeet: 2800,
            status: 'For Sale',
            community: 'Stonebridge',
            description: 'Modern gated community home with premium finishes'
          },
          {
            id: 'fallback-3',
            address: '789 Redpoint Circle, Las Vegas, NV 89144',
            price: 1595000,
            bedrooms: 5,
            bathrooms: 4,
            squareFeet: 4200,
            status: 'For Sale',
            community: 'Redpoint',
            description: 'Exceptional two-story residence with resort-style amenities'
          }
        ],
        totalCount: 3,
        message: 'Using fallback data - RealScout API unavailable'
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('RealScout API proxy error:', error);
    
    return NextResponse.json({
      success: false,
      error: `Server error: ${error}`,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
