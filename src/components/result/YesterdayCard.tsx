import { getResultBySlug } from "@/data/lottery";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function YesterdayCard({ yesterdaySlug }: { yesterdaySlug?: string }) {
  if (!yesterdaySlug) return null;
  const result = getResultBySlug(yesterdaySlug);
  if (!result) return null;

  return (
    <div className="rounded-2xl border border-dashed border-navy-300 bg-navy-50 p-5">
      <p className="text-xs uppercase tracking-wider text-navy-500 mb-2">Yesterday</p>
      <h4 className="font-bold text-navy-900">
        {result.name} {result.drawNumber}
      </h4>
      <p className="text-sm text-navy-600 mt-1">{formatDate(result.date)}</p>
      <p className="text-lg font-bold text-navy-900 mt-2 font-mono">{result.firstPrize}</p>
      <Link
        href={`/results/${result.slug}`}
        className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-accent-red hover:underline"
      >
        View result <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
