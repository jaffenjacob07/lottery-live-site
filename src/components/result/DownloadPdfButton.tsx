"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

export function DownloadPdfButton({
  pdfUrl,
}: {
  pdfUrl?: string;
}) {
  if (!pdfUrl) return null;

  return (
    <motion.a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark text-white font-semibold px-5 py-3 rounded-full shadow-lg shadow-accent-red/30 transition-colors"
      aria-label="View Official PDF"
    >
      <Download className="h-5 w-5" />
      <span className="hidden sm:inline">
        View Official PDF
      </span>
    </motion.a>
  );
}