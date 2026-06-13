import ResultsArchive from "@/components/result/ResultsArchive";
import { createServerSupabaseClient } from "@/lib/supabase";

export default async function ResultsPage() {
  const supabase = await createServerSupabaseClient();

  const { data: results } = await supabase
    .from("lottery_results")
    .select(
      "id, lottery_name, draw_no, first_prize, seo_slug, draw_date"
    )
    .order("draw_date", {
      ascending: false,
    });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-navy-900 mb-2">
          Kerala Lottery Results Archive
        </h1>

        <p className="text-gray-600 mb-8">
          Browse previous Kerala State Lottery draw
          results. Search by lottery name, draw
          number, or winning ticket number.
        </p>

        <ResultsArchive
          results={results || []}
        />
      </div>
    </main>
  );
}