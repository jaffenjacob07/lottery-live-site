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
  featured?: boolean;
}

export function ResultCard({
  result,
  index = 0,
  featured = false,
}: ResultCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group rounded-2xl border bg-white card-shadow hover:border-accent-red/30 hover:shadow-lg transition-all overflow-hidden ${
        featured
          ? "border-accent-red/20 sm:flex sm:items-stretch"
          : "border-navy-100"
      }`}
    >
      <div
        className={`bg-gradient-to-r from-navy-900 via-accent-red to-navy-900 ${
          featured
            ? "sm:w-1.5 sm:min-h-full h-2 sm:h-auto w-full"
            : "h-1.5"
        }`}
      />

      <div className={`flex-1 p-5 sm:p-6 ${featured ? "sm:py-7" : ""}`}>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3
                className={`font-bold text-navy-900 truncate ${
                  featured ? "text-xl sm:text-2xl" : "text-lg"
                }`}
              >
                {result.name}
              </h3>

              {result.isLive && <LiveBadge size="sm" />}
            </div>

            <p className="text-sm font-semibold text-accent-red">
              {result.drawNumber}
            </p>
          </div>

          <Trophy
            className={`text-navy-200 group-hover:text-accent-red transition-colors shrink-0 ${
              featured
                ? "h-10 w-10 sm:h-12 sm:w-12"
                : "h-8 w-8"
            }`}
          />
        </div>

        <div
          className={`rounded-xl gold-gradient p-[1px] mb-4 ${
            featured ? "sm:mb-5" : ""
          }`}
        >
          <div className="rounded-[11px] bg-navy-950 px-4 py-3 sm:py-4 text-center sm:text-left">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-navy-400 mb-0.5">
              1st Prize
            </p>

            <p
              className={`font-black text-white tracking-wider break-all ${
                featured
                  ? "text-xl sm:text-2xl"
                  : "text-lg"
              }`}
            >
              {result.firstPrize}
            </p>
          </div>
        </div>

        <dl className="space-y-2 text-sm mb-5">
          <div className="flex justify-between gap-4">
            <dt className="text-navy-500 shrink-0">
              Date
            </dt>

            <dd className="font-medium text-navy-800 text-right">
              <span suppressHydrationWarning>
                {formatDate(result.date)}
              </span>
            </dd>
          </div>

          <div className="flex justify-between items-center gap-4">
            <dt className="text-navy-500 shrink-0">
              Location
            </dt>

            <dd className="flex items-center gap-1 font-medium text-navy-800 text-right">
              <MapPin className="h-3.5 w-3.5 text-accent-red shrink-0" />

              <span className="truncate">
                {result.location}
              </span>
            </dd>
          </div>
        </dl>

        <Link
          href={`/results/${result.slug}`}
          className={`flex items-center justify-center gap-2 w-full rounded-xl bg-navy-900 text-white font-semibold hover:bg-navy-800 transition-colors group-hover:bg-accent-red group-hover:hover:bg-accent-red-dark ${
            featured
              ? "py-3 text-base"
              : "py-2.5 text-sm"
          }`}
        >
          View Detailed Result

          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}