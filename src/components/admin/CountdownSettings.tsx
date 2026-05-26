"use client";

import { homepageConfig } from "@/data/lottery";
import { Save } from "lucide-react";

export function CountdownSettings() {
  return (
    <div id="countdown" className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20">
      <h2 className="font-bold text-lg text-navy-900 mb-4">Manage Countdown Timer</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">Next draw name</label>
          <input
            type="text"
            defaultValue={homepageConfig.nextDrawName}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">Draw date & time</label>
          <input
            type="datetime-local"
            defaultValue="2026-05-27T15:00"
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-red"
        >
          <Save className="h-4 w-4" />
          Update Countdown
        </button>
      </form>
    </div>
  );
}
