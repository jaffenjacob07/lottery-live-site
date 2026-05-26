"use client";

import { lotteryResults } from "@/data/lottery";
import { Save } from "lucide-react";
import { useState } from "react";

export function ResultForm() {
  const [selected, setSelected] = useState(lotteryResults[0].id);

  return (
    <div id="results" className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20">
      <h2 className="font-bold text-lg text-navy-900 mb-4">Add / Edit Results</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">
            Select draw to edit
          </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200 focus:border-accent-red outline-none"
          >
            {lotteryResults.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} {r.drawNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              Lottery name
            </label>
            <input
              type="text"
              defaultValue="Karunya Plus"
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              Draw number
            </label>
            <input
              type="text"
              defaultValue="KN-598"
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              First prize
            </label>
            <input
              type="text"
              defaultValue="KA 458921"
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200 font-mono"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              Location
            </label>
            <input
              type="text"
              defaultValue="Thiruvananthapuram"
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
            />
          </div>
        </div>
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked className="rounded text-accent-red" />
          <span className="text-sm text-navy-700">Mark as LIVE</span>
        </label>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-red transition-colors"
        >
          <Save className="h-4 w-4" />
          Save Result
        </button>
      </form>
    </div>
  );
}
