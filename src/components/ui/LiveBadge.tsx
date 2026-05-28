"use client";

import { motion } from "framer-motion";

export function LiveBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs";

  return (
    <motion.span
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center gap-1.5 rounded font-bold uppercase tracking-wider text-white bg-accent-red ${sizeClasses}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white live-pulse" />
      </span>
      Live
    </motion.span>
  );
}
