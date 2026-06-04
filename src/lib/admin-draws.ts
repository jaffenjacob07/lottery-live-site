import { createClient } from "@/utils/supabase/client";

export interface AdminDraw {
  id: string;
  lottery_name: string;
  draw_no: string;
}

export async function getDraws(): Promise<AdminDraw[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("lottery_results")
    .select("id, lottery_name, draw_no")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
}