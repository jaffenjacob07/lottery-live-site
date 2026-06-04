import { lotteryResults as fallbackResults } from "@/data/lottery";
import { createClient } from "@supabase/supabase-js";
import type { LotteryResult } from "@/types/lottery";

export interface LotteryResultRow {
  id: string;

  lottery_name: string;

  draw_no: string;

  first_prize: string;

  second_prize?: string | null;

  third_prize?: string | null;

  fourth_prize?: string | null;

  fifth_prize?: string | null;

  sixth_prize?: string | null;

  seventh_prize?: string | null;

  eighth_prize?: string | null;

  ninth_prize?: string | null;

  consolation_prize?: string | null;

  lower_prizes?: any;

  article_content?: string | null;

  meta_title?: string | null;

  meta_description?: string | null;

  pdf_url?: string | null;

  seo_slug?: string | null;

  location: string;

  is_live: boolean;

  created_at: string;

  draw_date?: string | null;

  live_updates?:
    | {
        time: string;
        message: string;
      }[]
    | null;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function mapLotteryResultRow(
  row: LotteryResultRow
): LotteryResult {
  return {
    id: row.id,

    slug:
      row.seo_slug ||
      row.draw_no.toLowerCase(),

    name: row.lottery_name,

    drawNumber: row.draw_no,

    date:
      row.draw_date ||
      row.created_at,

    firstPrize:
      row.first_prize || "",

    secondPrize:
      row.second_prize || "",

    thirdPrize:
      row.third_prize || "",

    fourthPrize:
      row.fourth_prize || "",

    fifthPrize:
      row.fifth_prize || "",

    sixthPrize:
      row.sixth_prize || "",

    seventhPrize:
      row.seventh_prize || "",

    eighthPrize:
      row.eighth_prize || "",

    ninthPrize:
      row.ninth_prize || "",

    consolationPrizes:
      row.consolation_prize
        ? row.consolation_prize.split(",")
        : [],

    lowerPrizes:
      row.lower_prizes || {},

    articleContent:
      row.article_content || "",

    metaTitle:
      row.meta_title || "",

    metaDescription:
      row.meta_description || "",

    pdfUrl:
      row.pdf_url || "",

    location:
      row.location || "",

    isLive:
      row.is_live,

    updatedAt:
      row.created_at,

    author:
      "Results Desk",

    authorRole:
      "Editor",

    heroImage:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80",

    live_updates:
      row.live_updates || [],
  };
}

export async function fetchLotteryResults(): Promise<{
  results: LotteryResult[];
  source: "supabase" | "fallback";
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from("lottery_results")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(
        "[lottery_results]",
        error.message
      );

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
        mapLotteryResultRow
      ),
      source: "supabase",
    };
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Unknown error";

    console.error(
      "[lottery_results]",
      message
    );

    return {
      results: fallbackResults,
      source: "fallback",
      error: message,
    };
  }
}

export async function getLotteryResultBySlug(
  slug: string
) {
  try {
    const { data } = await supabase
      .from("lottery_results")
      .select("*")
      .eq("seo_slug", slug)
      .single();

    if (!data) return null;

    return mapLotteryResultRow(
      data as LotteryResultRow
    );
  } catch {
    return null;
  }
}