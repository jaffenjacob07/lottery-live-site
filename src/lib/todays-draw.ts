import { getLiveResult } from "@/lib/lottery-results";

export async function getTodaysDraw() {
  return await getLiveResult();
}