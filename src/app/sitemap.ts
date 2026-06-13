import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data } = await supabase
    .from("lottery_results")
    .select("seo_slug, created_at, is_live");

  const baseUrl = "https://keralaliveresults.in";

  const resultPages =
    data?.map((result) => ({
      url: `${baseUrl}/results/${result.seo_slug}`,
      lastModified: new Date(result.created_at),
      changeFrequency: "daily" as const,
      priority: result.is_live ? 1 : 0.8,
    })) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...resultPages,
  ];
}