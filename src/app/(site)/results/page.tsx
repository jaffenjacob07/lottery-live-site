import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase";

export default async function ResultsPage() {
  const supabase = await createServerSupabaseClient();

  const { data: results } = await supabase
    .from("lottery_results")
    .select("id, lottery_name, draw_no, first_prize, seo_slug")
    .order("draw_date", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          Kerala Lottery Results
        </h1>

        <p className="text-gray-600 mb-8">
          Latest Kerala State Lottery results.
        </p>

        <div className="grid gap-4">
          {results?.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-xl border p-5 shadow-sm"
            >
              <h2 className="text-xl font-bold mb-2">
                {result.lottery_name}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                Draw No: {result.draw_no}
              </p>

              <div className="bg-navy-900 text-white rounded-lg p-4 mb-4">
                <p className="text-xs uppercase opacity-70">
                  1st Prize
                </p>

                <p className="text-2xl font-bold">
                  {result.first_prize}
                </p>
              </div>

              <Link
                href={`/results/${result.seo_slug}`}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-navy-900 text-white"
              >
                View Detailed Result →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}