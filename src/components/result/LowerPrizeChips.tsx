"use client";

import { motion } from "framer-motion";

interface PrizeGroup {
  count?: number;
  amount?: string;
  numbers?: string[];
}

interface LowerPrizeChipsProps {
  numbers: Record<string, PrizeGroup>;
}

export function LowerPrizeChips({
  numbers,
}: LowerPrizeChipsProps) {

  if (!numbers || Object.keys(numbers).length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">

      <h3 className="text-2xl font-bold text-navy-900">
        Lower Prize Numbers
      </h3>

      {Object.entries(numbers).map(([key, prize]) => (

        <div
          key={key}
          className="rounded-2xl border border-navy-100 bg-white p-5 card-shadow"
        >

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">

            <div>
              <h4 className="text-lg font-bold text-navy-900 capitalize">
                {key.replaceAll("_", " ")}
              </h4>

              <p className="text-sm text-navy-500">
                Prize Amount: {prize.amount}
              </p>
            </div>

            <div className="rounded-xl bg-navy-100 px-3 py-2 text-sm font-semibold text-navy-800">
              {prize.count} Winners
            </div>
          </div>

          <div className="flex flex-wrap gap-2">

            {prize.numbers?.map((num, i) => (

              <motion.span
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02 }}
                className="px-3 py-2 rounded-lg border border-navy-200 bg-white text-sm font-mono font-medium text-navy-800 hover:border-accent-red hover:text-accent-red transition-colors cursor-default"
              >
                {num}
              </motion.span>

            ))}

          </div>
        </div>

      ))}
    </section>
  );
}