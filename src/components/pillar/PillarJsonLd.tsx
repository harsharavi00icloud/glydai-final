import type { Pillar } from "@/data/pillars";

export function PillarJsonLd({ data }: { data: Pillar }) {
  const url = `https://glydai.com/${data.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.navLabel,
      description: data.description,
      url,
      areaServed: { "@type": "Country", name: "United States" },
      provider: {
        "@type": "Organization",
        name: "GlydAI",
        url: "https://glydai.com",
      },
      serviceType: data.h1,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://glydai.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.navLabel,
          item: url,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
