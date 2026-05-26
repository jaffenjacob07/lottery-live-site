"use client";

import type { LotteryResult } from "@/types/lottery";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Trophy } from "lucide-react";
import Link from "next/link";

interface ResultCardProps {
  result: LotteryResult;
  index?: number;
}

export function ResultCard({ result, index = 0 }: ResultCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl border border-navy-100 bg-white card-shadow hover:border-accent-red/30 hover:shadow-lg transition-all overflow-hidden"
    >
      <div className="h-1.5 bg-gradient-to-r from-navy-900 via-accent-red to-navy-900" />
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-navy-900">{result.name}</h3>
              {result.isLive && <LiveBadge size="sm" />}
            </div>
            <p className="text-sm font-semibold text-accent-red">{result.drawNumber}</p>
          </div>
          <Trophy className="h-8 w-8 text-navy-200 group-hover:text-accent-red transition-colors shrink-0" />
        </div>

        <dl className="space-y-2 text-sm mb-5">
          <div className="flex justify-between">
            <dt className="text-navy-500">Date</dt>
            <dd className="font-medium text-navy-800">{formatDate(result.date)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-navy-500">First Prize</dt>
            <dd className="font-bold text-navy-900 tracking-wide">{result.firstPrize}</dd>
          </div>
          <div className="flex justify-between items-center">
            <dt className="text-navy-500">Location</dt>
            <dd className="flex items-center gap-1 font-medium text-navy-800">
              <MapPin className="h-3.5 w-3.5 text-accent-red" />
              {result.location}
            </dd>
          </div>
        </dl>

        <Link
          href={`/results/${result.slug}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-navy-900 text-white text-sm font-semibold hover:bg-navy-800 transition-colors group-hover:bg-accent-red group-hover:hover:bg-accent-red-dark"
        >
          View Detailed Result
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
