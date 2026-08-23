import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pillars, type PillarSlug } from "@/data/pillars";
import { ServicePillarPage } from "./ServicePillarPage";

export function pillarMetadata(slug: PillarSlug): Metadata {
  const p = pillars[slug];
  const url = `https://glydai.com/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      type: "website",
      siteName: "GlydAI",
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
    },
    robots: { index: true, follow: true },
  };
}

export function PillarPage({ slug }: { slug: PillarSlug }) {
  const p = pillars[slug];
  if (!p) notFound();
  return <ServicePillarPage data={p} />;
}
