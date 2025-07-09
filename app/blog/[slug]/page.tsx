import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import BlogLayout from "@/components/ui/BlogLayout";
import Image from "next/image";
import styles from '@/styles/pages/blog-detail.module.css';

interface PageProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <BlogLayout>
      <article className={styles.blogDetailContainer}>
        <h1 className={styles.blogDetailTitle}>{post.title}</h1>
        <p className={styles.blogDetailDate}>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        {post.image && (
          <Image src={post.image} alt={post.title} width={800} height={320} className={styles.blogDetailImage} />
        )}
        <p className={styles.blogDetailExcerpt}>{post.excerpt}</p>
        <div className={styles.blogDetailContentComingSoon}>
          <em>Full blog content coming soon.</em>
        </div>
      </article>
    </BlogLayout>
  );
} 