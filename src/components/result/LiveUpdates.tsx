"use client";

import { useState } from "react";
import { Radio, ChevronDown, ChevronUp } from "lucide-react";

interface LiveUpdate {
  time: string;
  message: string;
}

interface Props {
  updates: LiveUpdate[];
}

export default function LiveUpdates({
  updates,
}: Props) {
  const [expanded, setExpanded] =
    useState(false);

  if (!updates?.length) return null;

  const visibleUpdates = expanded
    ? updates
    : updates.slice(-3).reverse();

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 card-shadow">
      <div className="flex items-center gap-2 mb-5">
        <Radio className="h-5 w-5 text-red-500" />

        <h2 className="text-xl font-bold text-navy-900">
          Live Updates
        </h2>
      </div>

      <div className="space-y-3">
        {visibleUpdates.map(
          (update, index) => (
            <div
              key={index}
              className="flex gap-3 border-b border-navy-100 pb-3"
            >
              <div className="w-20 shrink-0 text-sm font-bold text-red-600">
                {update.time}
              </div>

              <div className="flex-1 text-sm text-navy-800">
                {update.message}
              </div>
            </div>
          )
        )}
      </div>

      {updates.length > 3 && (
        <button
          onClick={() =>
            setExpanded(!expanded)
          }
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-red hover:underline"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              View All Updates (
              {updates.length})
            </>
          )}
        </button>
      )}
    </div>
  );
}