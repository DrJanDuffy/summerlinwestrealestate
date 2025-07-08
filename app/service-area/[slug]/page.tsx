import { notFound } from "next/navigation";
import subdivisions from "../subdivisions.json";
import styles from "../page.module.css";
import ClientSubdivisionPage from "./ClientSubdivisionPage";

export default async function SubdivisionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);
  if (!subdivision) {
    return notFound();
  }
  return <ClientSubdivisionPage subdivision={subdivision} />;
} 