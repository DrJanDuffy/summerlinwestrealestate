import { notFound } from "next/navigation";
import subdivisions from "@/app/service-area/subdivisions.json";
import styles from "@/app/service-area/page.module.css";
import ClientSubdivisionPage from "./ClientSubdivisionPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SubdivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);
  if (!subdivision) {
    return notFound();
  }
  return <ClientSubdivisionPage subdivision={subdivision} />;
}
