import { BlogPost, BlogLayoutProps } from '@/types/blog';
import Link from "next/link";
import Image from "next/image";
import Parser from "rss-parser";
import styles from './blog.module.css';

export const dynamic = "force-dynamic";

const HYPERLOCAL_KEYWORDS = [
  "summerlin",
  "summerlin west",
  "the vistas",
  "stonebridge",
  "redpoint",
  "reverence",
  "downtown summerlin",
  // Add more neighborhoods as needed
];

const NEIGHBORHOODS = [
  "The Vistas",
  "Stonebridge",
  "Redpoint",
  "Reverence",
  "Downtown Summerlin",
  "The Paseos",
  "Redpoint Square",
];

const LOCAL_MARKET_INSIGHTS = [
  "Did you know? Summerlin West homes sell 20% faster than the Las Vegas average!",
  "Fun fact: The Vistas Park hosts free summer concerts for residents.",
  "Stonebridge features some of the newest luxury homes in Summerlin West.",
  "Redpoint is known for its modern architecture and walkable amenities.",
  "Reverence offers stunning mountain views and exclusive gated living.",
  "Downtown Summerlin has over 125 shops and restaurants just minutes away!",
  "The Paseos features top-rated schools and beautiful parks.",
];

const LOCAL_EVENTS = [
  "Check out the Summerlin Farmers Market this Saturday at Downtown Summerlin!",
  "Join us for Movies in the Park at The Vistas this Friday night.",
  "Don't miss the Summerlin Art Festival coming up next month!",
  "Explore the new trails opening in Stonebridge this weekend.",
  "Sign up for the Summerlin West Community Garage Sale!",
];

function isHyperlocal(post: BlogPost) {
  const text = `${post.title} ${post.contentSnippet || ''} ${post.content || ''}`.toLowerCase();
  return HYPERLOCAL_KEYWORDS.some((kw) => text.includes(kw));
}

const LOCAL_INTRO =
  "This update is brought to you by your Summerlin West real estate experts. Here's how this news impacts our local market:";
const LOCAL_CTA =
  "If you have questions about how this affects your home or your plans in Summerlin West, contact us for a hyperlocal perspective!";

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function fetchRssPosts() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18");
  return (feed.items || []);
}

// BlogPost interface
interface BlogPost {
  id: string;
  title: string;
  slug: string; // Make slug always a string
  excerpt: string; // Make excerpt always a string
  content: string;
  image?: string;
  alt?: string;
  publishedAt: string;
  author: string;
  date: string; // Add date property
}

// Format function to ensure BlogPost shape
const formatPost = (post: BlogPost): BlogPost => {
  return {
    ...post,
    alt: post.alt || `Image for ${post.title}`,
    slug: post.slug || `/blog/${post.id}`,
  };
};

const chunkArray = <T,>(arr: T[], chunkSize = 3): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

export default async function BlogIndexPage() {
  const posts = (await fetchRssPosts()).filter(
    post => isHyperlocal(post) || true // Show all, but localize generics
  );
  return (
    <div className={styles.container}>
      <BlogLayout posts={posts.map(formatPost)}>
        {children}
      </BlogLayout>
    </div>
  );
} 