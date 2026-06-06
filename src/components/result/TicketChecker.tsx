"use client";

import { motion } from "framer-motion";
import { Search, Ticket } from "lucide-react";
import { useState } from "react";
import type { LotteryResult } from "@/types/lottery";

interface Props {
  result: LotteryResult;
}

export function TicketChecker({ result }: Props) {
  const [ticket, setTicket] = useState("");
  const [message, setMessage] = useState("");

  function normalize(input: string) {
    return input.replace(/\s+/g, "").toUpperCase();
  }

  function checkTicket(e: React.FormEvent) {
    e.preventDefault();

    const entered = normalize(ticket);

    if (!entered) {
      setMessage("Please enter your ticket number.");
      return;
    }

    // 1st Prize
    if (
      normalize(result.firstPrize) === entered
    ) {
      setMessage(
        "🎉 1st Prize Winner - ₹1 Crore"
      );
      return;
    }

    // 2nd Prize
    if (
      normalize(result.secondPrize) === entered
    ) {
      setMessage(
        "🎉 2nd Prize Winner"
      );
      return;
    }

    // 3rd Prize
    if (
      normalize(result.thirdPrize) === entered
    ) {
      setMessage(
        "🎉 3rd Prize Winner"
      );
      return;
    }

// Consolation Prize
const consolationList =
  result.consolationPrizes
    ?.flatMap((item) =>
      item
        .match(/[A-Z]{2}\s?\d{6}/g) || []
    ) || [];

console.log(consolationList);

if (
  consolationList.some(
    (ticketNumber) =>
      normalize(ticketNumber) === entered
  )
) {
  setMessage(
    "🎉 Consolation Prize Winner - ₹5,000"
  );
  return;
}

    const last4 = entered.slice(-4);

    const lower = result.lowerPrizes;

    if (
      lower?.fourth_prize?.numbers?.includes(
        last4
      )
    ) {
      setMessage(
        "🎉 4th Prize Winner - ₹5,000"
      );
      return;
    }

    if (
      lower?.fifth_prize?.numbers?.includes(
        last4
      )
    ) {
      setMessage(
        "🎉 5th Prize Winner - ₹2,000"
      );
      return;
    }

    if (
      lower?.sixth_prize?.numbers?.includes(
        last4
      )
    ) {
      setMessage(
        "🎉 6th Prize Winner - ₹1,000"
      );
      return;
    }

    if (
      lower?.seventh_prize?.numbers?.includes(
        last4
      )
    ) {
      setMessage(
        "🎉 7th Prize Winner - ₹500"
      );
      return;
    }

    if (
      lower?.eighth_prize?.numbers?.includes(
        last4
      )
    ) {
      setMessage(
        "🎉 8th Prize Winner - ₹100"
      );
      return;
    }

    if (
      lower?.ninth_prize?.numbers?.includes(
        last4
      )
    ) {
      setMessage(
        "🎉 9th Prize Winner - ₹50"
      );
      return;
    }

    setMessage(
      "❌ No winning prize found for this ticket."
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-5 sm:p-6 card-shadow"
    >
      <div className="flex items-center gap-2 mb-4">
        <Ticket className="h-5 w-5 text-accent-red" />
        <h3 className="font-bold text-navy-900">
          Check Your Ticket
        </h3>
      </div>

      <p className="text-sm text-navy-500 mb-4">
        Example: RJ587609
      </p>

      <form
        onSubmit={checkTicket}
        className="flex flex-col sm:flex-row gap-2"
      >
        <input
          type="text"
          value={ticket}
          onChange={(e) =>
            setTicket(e.target.value)
          }
          placeholder="RJ587609"
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
        <div className="mt-4 rounded-xl bg-navy-100 p-4 font-medium">
          {message}
        </div>
      )}
    </motion.div>
  );
}