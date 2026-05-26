"use client";

import { clientInitial } from "@/lib/motion-client";
import { useMounted } from "@/lib/use-mounted";
import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";

interface PrizeCardsProps {
  firstPrize: string;
  secondPrize: string;
  thirdPrize: string;
  consolationPrizes: string[];
}

export function PrizeCards({
  firstPrize,
  secondPrize,
  thirdPrize,
  consolationPrizes,
}: PrizeCardsProps) {
  const mounted = useMounted();

  return (
    <div className="space-y-4">
      <motion.div
        initial={clientInitial(mounted, { opacity: 0, y: 12 })}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl gold-gradient p-[3px]"
      >
        <div className="rounded-2xl bg-navy-950 px-6 py-8 text-center">
          <Award className="h-8 w-8 text-gold-400 mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest text-navy-300 mb-2">
            1st Prize — ₹80 Lakhs
          </p>
          <p className="text-3xl sm:text-4xl font-black text-white tracking-widest">
            {firstPrize}
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        <motion.div
          initial={clientInitial(mounted, { opacity: 0, x: -12 })}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border-2 border-navy-200 bg-navy-50 p-5 text-center"
        >
          <Medal className="h-6 w-6 text-navy-600 mx-auto mb-2" />
          <p className="text-xs uppercase text-navy-500 mb-1">2nd Prize</p>
          <p className="text-xl font-bold text-navy-900 tracking-wide">{secondPrize}</p>
        </motion.div>
        <motion.div
          initial={clientInitial(mounted, { opacity: 0, x: 12 })}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-xl border-2 border-accent-red/30 bg-red-50 p-5 text-center"
        >
          <Medal className="h-6 w-6 text-accent-red mx-auto mb-2" />
          <p className="text-xs uppercase text-navy-500 mb-1">3rd Prize</p>
          <p className="text-xl font-bold text-navy-900 tracking-wide">{thirdPrize}</p>
        </motion.div>
      </div>

      {consolationPrizes.length > 0 && (
        <div className="rounded-xl border border-navy-100 p-4">
          <p className="text-sm font-semibold text-navy-700 mb-3">Consolation Prizes</p>
          <div className="flex flex-wrap gap-2">
            {consolationPrizes.map((num) => (
              <span
                key={num}
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
