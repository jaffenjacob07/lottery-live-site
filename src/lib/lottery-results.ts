import { lotteryResults as fallbackResults } from "@/data/lottery";
import { createServerSupabaseClient } from "@/lib/supabase";
import type { LotteryResult } from "@/types/lottery";

/** Row shape for the `lottery_results` Supabase table (snake_case columns). */
export interface LotteryResultRow {
  id: string;
  slug: string;
  name: string;
  draw_number: string;
  draw_date: string;
  first_prize: string;
  location: string;
  is_live: boolean;
  updated_at: string;
  author?: string | null;
  author_role?: string | null;
  hero_image?: string | null;
  second_prize?: string | null;
  third_prize?: string | null;
  consolation_prizes?: string[] | null;
  lower_prizes?: string[] | null;
  pdf_url?: string | null;
  yesterday_slug?: string | null;
}

export function mapLotteryResultRow(row: LotteryResultRow): LotteryResult {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    drawNumber: row.draw_number,
    date: row.draw_date,
    firstPrize: row.first_prize,
    location: row.location,
    isLive: row.is_live,
    updatedAt: row.updated_at,
    author: row.author ?? "Results Desk",
    authorRole: row.author_role ?? "Editor",
    heroImage:
      row.hero_image ??
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80",
    secondPrize: row.second_prize ?? "",
    thirdPrize: row.third_prize ?? "",
    consolationPrizes: row.consolation_prizes ?? [],
    lowerPrizes: row.lower_prizes ?? [],
    pdfUrl: row.pdf_url ?? undefined,
    yesterdaySlug: row.yesterday_slug ?? undefined,
  };
}

export async function fetchLotteryResults(): Promise<{
  results: LotteryResult[];
  source: "supabase" | "fallback";
  error?: string;
}> {
  try {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
      .from("lottery_results")
      .select("*")
      .order("draw_date", { ascending: false });
      

    if (error) {
      console.error("[lottery_results]", error.message);
      return {
        results: fallbackResults,
        source: "fallback",
        error: error.message,
      };
    }

    if (!data?.length) {
      return { results: fallbackResults, source: "fallback" };
    }

    return {
      results: (data as LotteryResultRow[]).map(mapLotteryResultRow),
      source: "supabase",
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[lottery_results]", message);
    return {
      results: fallbackResults,
      source: "fallback",
      error: message,
    };
  }
}
