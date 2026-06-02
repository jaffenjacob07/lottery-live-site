"use client";

import { motion } from "framer-motion";
import { Medal } from "lucide-react";

interface PrizeCardsProps {
  firstPrize: string;
  secondPrize?: string | null;
  thirdPrize?: string | null;
  consolationPrizes?: string[] | null;
}

export function PrizeCards({
  secondPrize,
  thirdPrize,
  consolationPrizes = [],
}: PrizeCardsProps) {
  return (
    <div className="space-y-4">

      {/* SECOND + THIRD */}
      <div className="grid sm:grid-cols-2 gap-4">

        {/* SECOND PRIZE */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border-2 border-navy-200 bg-navy-50 p-5 text-center"
        >
          <Medal className="h-6 w-6 text-navy-600 mx-auto mb-2" />

          <p className="text-xs uppercase text-navy-500 mb-1">
            2nd Prize
          </p>

          <p className="text-xl font-bold text-navy-900 tracking-wide">
            {secondPrize || "Not Available"}
          </p>
        </motion.div>

        {/* THIRD PRIZE */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-xl border-2 border-accent-red/30 bg-red-50 p-5 text-center"
        >
          <Medal className="h-6 w-6 text-accent-red mx-auto mb-2" />

          <p className="text-xs uppercase text-navy-500 mb-1">
            3rd Prize
          </p>

          <p className="text-xl font-bold text-navy-900 tracking-wide">
            {thirdPrize || "Not Available"}
          </p>
        </motion.div>

      </div>

      {/* CONSOLATION */}
      {consolationPrizes && consolationPrizes.length > 0 && (
        <div className="rounded-xl border border-navy-100 p-4">

          <p className="text-sm font-semibold text-navy-700 mb-3">
            Consolation Prizes
          </p>

          <div className="flex flex-wrap gap-2">
            {consolationPrizes.map((num, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-navy-100 text-sm font-mono font-semibold text-navy-800"
              >
                {num}
              </span>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}