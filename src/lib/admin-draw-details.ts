import { createClient } from "@/utils/supabase/client";

export async function getDrawById(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("lottery_results")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}