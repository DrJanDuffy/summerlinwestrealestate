import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import BlogLayout from "@/components/ui/BlogLayout";
import Image from "next/image";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <BlogLayout>
      <article style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 8 }}>{post.title}</h1>
        <p style={{ color: "#3A8DDE", fontWeight: 500, marginBottom: 24 }}>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        {post.image && (
          <Image src={post.image} alt={post.title} width={800} height={320} style={{ borderRadius: 16, marginBottom: 24 }} />
        )}
        <p style={{ fontSize: "1.2rem", color: "#0A2540", marginBottom: 32 }}>{post.excerpt}</p>
        <div style={{ color: "#444", fontSize: "1.1rem" }}>
          <em>Full blog content coming soon.</em>
        </div>
      </article>
    </BlogLayout>
  );
} 