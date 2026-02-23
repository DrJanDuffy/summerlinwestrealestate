const REALSCOUT_SCRIPT_URL = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
const CACHE_TTL = 60 * 60 * 24; // 24 hours

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Only handle RealScout script requests
    if (!url.pathname.includes('realscout')) {
      return new Response('Not found', { status: 404 });
    }

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    const cacheKey = new Request(REALSCOUT_SCRIPT_URL, request);
    const cache = caches.default;

    // Check cache first
    let response = await cache.match(cacheKey);

    if (!response) {
      response = await fetch(REALSCOUT_SCRIPT_URL, {
        headers: {
          'User-Agent': request.headers.get('User-Agent') ?? 'Cloudflare-Worker/1.0',
          Accept: 'application/javascript, */*',
        },
        signal: AbortSignal.timeout(10_000),
      });

      if (!response.ok) {
        return new Response(`Failed to fetch RealScout script: ${response.status}`, {
          status: 502,
          headers: { 'Content-Type': 'text/plain' },
        });
      }

      // Clone before caching (body can only be consumed once)
      const responseToCache = new Response(response.clone().body, {
        status: response.status,
        headers: {
          'Content-Type': response.headers.get('Content-Type') ?? 'application/javascript',
          'Cache-Control': `public, max-age=${CACHE_TTL}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'X-Served-By': 'realscout-global-injector',
        },
      });

      ctx.waitUntil(cache.put(cacheKey, responseToCache));
    }

    // Return with CORS headers always set
    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') ?? 'application/javascript',
        'Cache-Control': `public, max-age=${CACHE_TTL}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'X-Served-By': 'realscout-global-injector',
      },
    });
  },
} satisfies ExportedHandler;
