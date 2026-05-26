"use client";

import { homepageConfig } from "@/data/lottery";
import { clientInitial } from "@/lib/motion-client";
import { useMounted } from "@/lib/use-mounted";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EMPTY_TIME: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function calcTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({
  value,
  label,
  mounted,
}: {
  value: number;
  label: string;
  mounted: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={clientInitial(mounted, { y: -8, opacity: 0 })}
        animate={{ y: 0, opacity: 1 }}
        className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-navy-900 text-white flex items-center justify-center text-xl sm:text-2xl font-bold tabular-nums"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="text-[10px] sm:text-xs text-navy-500 mt-1.5 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const target = homepageConfig.nextDrawTimestamp;
  const mounted = useMounted();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(EMPTY_TIME);

  useEffect(() => {
    if (!mounted) return;
    setTimeLeft(calcTimeLeft(target));
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target, mounted]);

  if (!mounted) return null;

  return (
    <div className="rounded-2xl border border-navy-100 bg-white card-shadow p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-accent-red" />
        <div>
          <h3 className="font-bold text-navy-900">Next Draw</h3>
          <p className="text-sm text-navy-500">
            {homepageConfig.nextDrawName} · {homepageConfig.nextDrawDate}
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-2 sm:gap-4">
        <TimeBlock value={timeLeft.days} label="Days" mounted={mounted} />
        <TimeBlock value={timeLeft.hours} label="Hours" mounted={mounted} />
        <TimeBlock value={timeLeft.minutes} label="Mins" mounted={mounted} />
        <TimeBlock value={timeLeft.seconds} label="Secs" mounted={mounted} />
      </div>
    </div>
  );
}
