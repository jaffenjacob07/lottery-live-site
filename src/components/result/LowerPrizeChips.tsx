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
      <div>
        <h3 className="text-2xl font-bold text-navy-900">
          4th – 9th Prize Winning Numbers
        </h3>

        <p className="text-sm text-navy-500 mt-1">
          Official lower prize winning numbers
        </p>
      </div>

      {Object.entries(numbers).map(([key, prize]) => (
        <div
          key={key}
          className="rounded-3xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-navy-900 capitalize">
                {key.replaceAll("_", " ")}
              </h4>

              {prize.amount && (
                <p className="text-sm text-navy-500 mt-1">
                  Prize Amount: {prize.amount}
                </p>
              )}
            </div>

            {prize.count && (
              <div className="rounded-xl bg-red-50 border border-red-100 px-3 py-2 text-sm font-semibold text-red-600">
                {prize.count} Winners
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {prize.numbers?.map((num, index) => (
              <motion.div
                key={`${num}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.01,
                }}
                className="
                  rounded-xl
                  border
                  border-navy-100
                  bg-navy-50
                  px-3
                  py-3
                  text-center
                  font-mono
                  text-sm
                  sm:text-base
                  font-bold
                  text-navy-900
                  hover:border-accent-red
                  hover:text-accent-red
                  transition-all
                "
              >
                {num}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}