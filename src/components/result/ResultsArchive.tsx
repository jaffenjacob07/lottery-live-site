"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

interface Result {
  id: string;
  lottery_name: string;
  draw_no: string;
  first_prize: string;
  seo_slug: string;
}

export default function ResultsArchive({
  results,
}: {
  results: Result[];
}) {
  const [search, setSearch] = useState("");

  const filteredResults = useMemo(() => {
    return results.filter((result) => {
      const q = search.toLowerCase();

      return (
        result.lottery_name.toLowerCase().includes(q) ||
        result.draw_no.toLowerCase().includes(q) ||
        result.first_prize.toLowerCase().includes(q)
      );
    });
  }, [results, search]);

  return (
    <>
      {/* Search Box */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search lottery, draw number or winning number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredResults.length} results
      </p>

      {/* Results */}
      <div className="space-y-5">
        {filteredResults.map((result) => (
          <article
            key={result.id}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Top Accent */}
            <div className="h-1 bg-red-500" />

            <div className="p-5">
              {/* Lottery Name */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-navy-900">
                  {result.lottery_name}
                </h2>

                <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full font-medium">
                  Result
                </span>
              </div>

              {/* Draw Number */}
              <p className="text-sm text-red-500 font-medium mb-4">
                {result.draw_no}
              </p>

              {/* First Prize */}
              <div className="bg-navy-900 text-white rounded-xl p-5 mb-4 text-center">
                <p className="text-xs uppercase tracking-wide opacity-70 mb-1">
                  1st Prize
                </p>

                <p className="text-4xl font-extrabold">
                  {result.first_prize}
                </p>
              </div>

              {/* Button */}
              <Link
                href={`/results/${result.seo_slug}`}
                className="w-full flex items-center justify-center rounded-xl bg-navy-900 text-white py-3 font-semibold hover:opacity-90 transition"
              >
                View Detailed Result →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}