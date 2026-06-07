"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  lotteryName: string;
  drawNumber: string;
  firstPrize: string;
}

export default function FaqSection({
  lotteryName,
  drawNumber,
  firstPrize,
}: Props) {
  const faqs = [
    {
      question: `What is the first prize of ${lotteryName} ${drawNumber}?`,
      answer: `The first prize winning number is ${firstPrize}.`,
    },
    {
      question: "How can I check my Kerala lottery ticket?",
      answer:
        "Use the ticket checker available on this page and enter your ticket number to verify winning prizes.",
    },
    {
      question: "Where is the Kerala lottery draw conducted?",
      answer:
        "Kerala lottery draws are conducted under the supervision of the Kerala State Lotteries Department at Gorky Bhavan, Thiruvananthapuram.",
    },
    {
      question: "How can winners claim Kerala lottery prizes?",
      answer:
        "Prize winners must verify results with official Kerala Lottery publications and follow the Kerala State Lotteries prize claim procedure.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-navy-900">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-2xl border border-navy-100 bg-white overflow-hidden"
        >
          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-semibold text-navy-900">
              {faq.question}
            </span>

            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === index && (
            <div className="px-5 pb-5 text-navy-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}