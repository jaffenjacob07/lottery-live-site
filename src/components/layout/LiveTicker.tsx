"use client";

import type { BreakingNews } from "@/types/lottery";
import { Radio } from "lucide-react";

interface LiveTickerProps {
  items: BreakingNews[];
}

export function LiveTicker({ items }: LiveTickerProps) {
  const doubled = [...items, ...items];

  return (
    <div className="bg-navy-950 text-white overflow-hidden border-b border-navy-800">
      <div className="flex items-stretch max-w-7xl mx-auto">
        <div className="flex shrink-0 items-center gap-2 bg-accent-red px-4 py-2.5 font-bold text-xs uppercase tracking-wider z-10">
          <Radio className="h-4 w-4" />
          <span className="hidden sm:inline">Breaking</span>
          <span className="sm:hidden">Live</span>
        </div>
        <div className="relative flex-1 overflow-hidden py-2.5">
          <div className="ticker-scroll flex whitespace-nowrap gap-12">
            {doubled.map((item, i) => (
              <span key={`${item.id}-${i}`} className="text-sm text-navy-100">
                <span className="text-accent-red font-semibold mr-2">●</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
