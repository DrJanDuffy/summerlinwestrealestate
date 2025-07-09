export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  alt?: string;
  publishedAt: string;
  author: string;
  date: string;
}

export interface BlogLayoutProps {
  posts?: BlogPost[];
  children: React.ReactNode;
} 