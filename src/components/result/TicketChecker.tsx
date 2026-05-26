"use client";

import { clientInitial } from "@/lib/motion-client";
import { useMounted } from "@/lib/use-mounted";
import { motion } from "framer-motion";
import { Search, Ticket } from "lucide-react";
import { useState } from "react";

export function TicketChecker() {
  const mounted = useMounted();
  const [ticket, setTicket] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticket.trim()) {
      setMessage("Please enter your ticket number.");
      return;
    }
    setMessage(
      `Checking ${ticket.toUpperCase()}... Demo: No match found in today's published results.`
    );
  };

  return (
    <motion.div
      initial={clientInitial(mounted, { opacity: 0, y: 12 })}
      whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      className="rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-5 sm:p-6 card-shadow"
    >
      <div className="flex items-center gap-2 mb-4">
        <Ticket className="h-5 w-5 text-accent-red" />
        <h3 className="font-bold text-navy-900">Check Your Ticket</h3>
      </div>
      <p className="text-sm text-navy-500 mb-4">
        Enter your full ticket number (e.g. KA 458921) to check against today&apos;s
        results.
      </p>
      <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={ticket}
          onChange={(e) => setTicket(e.target.value)}
          placeholder="e.g. KA 458921"
          className="flex-1 px-4 py-3 rounded-xl border border-navy-200 focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 outline-none font-mono uppercase"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-accent-red transition-colors"
        >
          <Search className="h-4 w-4" />
          Check
        </button>
      </form>
      {message && (
        <p className="mt-3 text-sm text-navy-600 bg-navy-100 rounded-lg px-4 py-2">
          {message}
        </p>
      )}
    </motion.div>
  );
}
