import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogLayout from '../../../components/ui/BlogLayout';
import { getPosts } from '../../../lib/posts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Summerlin West Real Estate',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Summerlin West Real Estate Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.summerlinwestrealestate.com/blog/${slug}`,
      siteName: 'Summerlin West Real Estate',
      images: [
        {
          url: post.image || '/images/og-image.svg',
          width: 800,
          height: 400,
          alt: post.alt || post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || '/images/og-image.svg'],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return <BlogLayout posts={[post]} currentPost={post} isPostPage={true} />;
}
