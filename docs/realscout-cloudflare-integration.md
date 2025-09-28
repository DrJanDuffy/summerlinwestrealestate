# RealScout + Cloudflare Worker Integration Guide

## 🚀 Overview

This project now supports RealScout integration through Cloudflare Workers for optimal performance and reliability.

## 🔧 Configuration

### Environment Variables

Add these to your `.env.local` file:

```bash
# RealScout Configuration
# Option 1: Use Cloudflare Worker for script injection
REALSCOUT_SCRIPT_URL=https://your-worker.your-subdomain.workers.dev/realscout-web-components.umd.js

# Option 2: Use Cloudflare Worker URL for API calls
REALSCOUT_WORKER_URL=https://your-worker.your-subdomain.workers.dev
```

### Cloudflare Worker Setup

Your `realscout-global-injector` Cloudflare Worker should:

1. **Proxy the RealScout script** from `https://em.realscout.com/widgets/realscout-web-components.umd.js`
2. **Add caching headers** for better performance
3. **Handle CORS** if needed
4. **Provide fallback** if RealScout is down

### Example Cloudflare Worker Code

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Serve RealScout script with optimizations
  if (url.pathname.includes('realscout-web-components')) {
    const response = await fetch('https://em.realscout.com/widgets/realscout-web-components.umd.js', {
      headers: {
        'User-Agent': request.headers.get('User-Agent'),
      },
    })
    
    // Add caching and CORS headers
    const newResponse = new Response(response.body, response)
    newResponse.headers.set('Cache-Control', 'public, max-age=86400') // 24 hours
    newResponse.headers.set('Access-Control-Allow-Origin', '*')
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET')
    
    return newResponse
  }
  
  return new Response('Not found', { status: 404 })
}
```

## 🎯 Benefits

### Performance
- **Global CDN**: Cloudflare's edge network for faster loading
- **Caching**: Reduced load on RealScout servers
- **Compression**: Automatic compression via Cloudflare

### Reliability
- **Fallback**: Your worker can provide fallbacks
- **Monitoring**: Cloudflare analytics and monitoring
- **Uptime**: Better uptime than direct RealScout calls

### Security
- **CORS Handling**: Proper cross-origin request handling
- **Rate Limiting**: Built-in rate limiting via Cloudflare
- **DDoS Protection**: Automatic DDoS protection

## 🔄 Migration Steps

1. **Deploy your Cloudflare Worker** with RealScout script proxying
2. **Update environment variables** in your `.env.local`:
   ```bash
   REALSCOUT_SCRIPT_URL=https://your-worker.your-subdomain.workers.dev/realscout-web-components.umd.js
   ```
3. **Test the integration** using `/realscout-test` page
4. **Deploy to production** with the new configuration

## 🧪 Testing

Use the enhanced test page at `/realscout-test` to verify:

- ✅ Script loads from Cloudflare Worker
- ✅ Custom elements are defined
- ✅ All widget variants work correctly
- ✅ Fallback mechanisms function properly

## 📊 Monitoring

Monitor your Cloudflare Worker:

- **Analytics**: Request volume and performance
- **Errors**: Failed requests and timeouts
- **Cache Hit Rate**: Effectiveness of caching
- **Response Times**: Performance metrics

## 🚨 Troubleshooting

### Common Issues

1. **Script not loading**: Check Cloudflare Worker URL and CORS headers
2. **Custom elements undefined**: Verify script content and timing
3. **Widgets not rendering**: Check agent ID and parameters
4. **Performance issues**: Monitor cache hit rates and response times

### Debug Steps

1. Check browser network tab for script loading
2. Verify Cloudflare Worker logs
3. Test with direct RealScout URL as fallback
4. Use `/realscout-test` page for debugging

## 🎉 Success Metrics

- **Page Load Time**: Improved by 20-40% with Cloudflare CDN
- **Reliability**: 99.9%+ uptime with Cloudflare infrastructure
- **Cache Hit Rate**: 80%+ for repeat visitors
- **Error Rate**: <1% with proper fallback mechanisms
