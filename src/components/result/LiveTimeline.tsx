"use client";

import type { LiveUpdate } from "@/types/lottery";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

const icons = {
  info: Info,
  result: CheckCircle,
  alert: AlertCircle,
};

const colors = {
  info: "text-navy-600 bg-navy-100",
  result: "text-green-700 bg-green-100",
  alert: "text-accent-red bg-red-100",
};

export function LiveTimeline({ updates }: { updates: LiveUpdate[] }) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow">
      <h3 className="font-bold text-navy-900 mb-5">Live Updates</h3>
      <ol className="relative border-l-2 border-navy-200 ml-3 space-y-6">
        {updates.map((update, i) => {
          const Icon = icons[update.type];
          return (
            <motion.li
              key={update.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-8"
            >
              <span
                className={`absolute -left-[1.35rem] flex h-7 w-7 items-center justify-center rounded-full ${colors[update.type]}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <time className="text-xs font-semibold text-accent-red">{update.time}</time>
              <p className="text-sm text-navy-700 mt-0.5">{update.message}</p>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
