import { lotteryResults, siteConfig } from "@/data/lottery";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const resultPages = lotteryResults.map((r) => ({
    url: `${base}/results/${r.slug}`,
    lastModified: new Date(r.updatedAt),
    changeFrequency: "daily" as const,
    priority: r.isLive ? 1 : 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    ...resultPages,
  ];
}
