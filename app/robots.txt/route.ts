// import { MetadataRoute } from 'next';

export function GET(): Response {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

Sitemap: https://summerlinwestrealestate.com/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
