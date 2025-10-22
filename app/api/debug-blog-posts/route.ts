import { NextResponse } from 'next/server';
import { getPosts } from '../../../lib/posts';

export async function GET() {
  try {
    const posts = await getPosts();

    // Get the specific blog posts that are showing 404 errors
    const targetSlugs = [
      '2026-housing-market-outlook',
      'what-buyers-say-they-need-most-and-how-the-markets-responding',
      'why-october-is-the-best-time-to-buy-a-home-in-2025',
      'downsizing-without-debt-how-more-homeowners-are-buying-their-next-house-in-cash',
      'why-experts-say-mortgage-rates-should-ease-over-the-next-year',
      'the-280-shift-in-affordability-every-homebuyer-should-know',
      'dont-let-unrealistic-pricing-cost-you-your-move',
      'why-more-buyers-are-turning-to-new-construction-this-year',
      'closing-costs-unpacked-state-by-state-breakdowns-for-todays-buyers',
      'why-home-prices-arent-actually-flat',
    ];

    const foundPosts = posts.filter((post) => targetSlugs.includes(post.slug));
    const missingPosts = targetSlugs.filter((slug) => !posts.find((post) => post.slug === slug));

    return NextResponse.json({
      totalPosts: posts.length,
      foundPosts: foundPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        id: post.id,
        hasContent: !!post.content,
      })),
      missingPosts,
      allPostSlugs: posts.map((post) => post.slug),
      staticPostsCount: posts.filter((post) => !post.slug.startsWith('rss-post-')).length,
      rssPostsCount: posts.filter((post) => post.slug.startsWith('rss-post-')).length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to fetch posts',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
