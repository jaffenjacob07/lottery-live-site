"use client";

import { motion } from "framer-motion";

export function LowerPrizeChips({ numbers }: { numbers: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-navy-900 mb-4">Lower Prize Numbers</h3>
      <div className="flex flex-wrap gap-2">
        {numbers.map((num, i) => (
          <motion.span
            key={num}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className="px-3 py-2 rounded-lg border border-navy-200 bg-white text-sm font-mono font-medium text-navy-800 hover:border-accent-red hover:text-accent-red transition-colors cursor-default"
          >
            {num}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
