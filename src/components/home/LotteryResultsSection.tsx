import { ResultCard } from "@/components/home/ResultCard";
import type { LotteryResult } from "@/types/lottery";
import { Database, Sparkles, TrendingUp } from "lucide-react";

interface LotteryResultsSectionProps {
  results: LotteryResult[];
  source: "supabase" | "fallback";
}

export function LotteryResultsSection({
  results,
  source,
}: LotteryResultsSectionProps) {
  const liveResult = results.find((r) => r.isLive);
  const otherResults = results.filter((r) => r.id !== liveResult?.id);

  return (
    <section id="results" className="scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-red/10 text-accent-red px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Kerala State Lottery
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 flex items-center gap-2">
            <TrendingUp className="h-7 w-7 text-accent-red shrink-0" />
            Latest Results
          </h2>
          <p className="text-navy-500 mt-1 text-sm sm:text-base max-w-xl">
            Live and recent draw numbers — updated from the official result feed.
          </p>
        </div>
        <div
          className={`inline-flex items-center gap-2 self-start rounded-xl border px-3 py-2 text-xs font-semibold ${
            source === "supabase"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-navy-200 bg-navy-50 text-navy-600"
          }`}
        >
          <Database className="h-3.5 w-3.5" />
          {source === "supabase" ? "Live from Supabase" : "Sample data"}
        </div>
      </div>

      <div className="space-y-5">
        {liveResult && (
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent-red via-gold-400 to-navy-900 opacity-75 blur-sm" />
            <div className="relative">
              <ResultCard result={liveResult} index={0} featured />
            </div>
          </div>
        )}

        {otherResults.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {otherResults.map((result, i) => (
              <ResultCard key={result.id} result={result} index={i + 1} />
            ))}
          </div>
        )}
      </div>

      {results.length === 0 && (
        <div className="rounded-2xl border border-dashed border-navy-200 bg-navy-50/50 px-6 py-12 text-center">
          <p className="text-navy-600 font-medium">No results yet</p>
          <p className="text-sm text-navy-400 mt-1">
            Add rows to the <code className="text-accent-red">lottery_results</code> table in
            Supabase.
          </p>
        </div>
      )}
    </section>
  );
}
