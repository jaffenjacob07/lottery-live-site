import { lotteryResults as fallbackResults } from "@/data/lottery";
import { createServerSupabaseClient } from "@/lib/supabase";
import type { LotteryResult } from "@/types/lottery";

export interface LotteryResultRow {
  id: string;
  lottery_name: string;
  draw_no: string;
  first_prize: string;
  location: string;
  is_live: boolean;
  created_at: string;
}

export function mapLotteryResultRow(
  row: LotteryResultRow,
): LotteryResult {
  return {
    id: row.id,
    slug: row.draw_no.toLowerCase(),

    name: row.lottery_name,

    drawNumber: row.draw_no,

    date: row.created_at,

    firstPrize: row.first_prize,

    location: row.location,

    isLive: row.is_live,

    updatedAt: row.created_at,

    author: "Results Desk",

    authorRole: "Editor",

    heroImage:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80",

    secondPrize: "",

    thirdPrize: "",

    consolationPrizes: [],

    lowerPrizes: [],
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
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[lottery_results]", error.message);

      return {
        results: fallbackResults,
        source: "fallback",
        error: error.message,
      };
    }

    if (!data?.length) {
      return {
        results: fallbackResults,
        source: "fallback",
      };
    }

    return {
      results: (data as LotteryResultRow[]).map(
        mapLotteryResultRow,
      ),

      source: "supabase",
    };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error";

    console.error("[lottery_results]", message);

    return {
      results: fallbackResults,
      source: "fallback",
      error: message,
    };
  }
}