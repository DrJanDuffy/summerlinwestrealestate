import { notFound } from "next/navigation";
import { posts } from "../../../lib/posts";
import BlogLayout from "../../../components/ui/BlogLayout";
import Image from "next/image";
import styles from "@/styles/pages/blog-detail.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return <BlogLayout posts={[post]} currentPost={post} isPostPage={true} />;
}
