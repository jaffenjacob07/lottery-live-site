"use client";

import { lotteryResults } from "@/data/lottery";
import { Save } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export function ResultForm() {
  const router = useRouter();
  const supabase = createClient();

  const selectedResult = lotteryResults[0];

  const [selected, setSelected] = useState(selectedResult.id);
  const [name, setName] = useState(selectedResult.name);
  const [drawNumber, setDrawNumber] = useState(selectedResult.drawNumber);
  const [firstPrize, setFirstPrize] = useState(selectedResult.firstPrize);
  const [location, setLocation] = useState(selectedResult.location);
  const [isLive, setIsLive] = useState(selectedResult.isLive);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
   
      const { error } = await supabase
  .from("lottery_results")
  .insert({
    lottery_name: name,
    draw_no: drawNumber,
    first_prize: firstPrize,
    location,
    is_live: isLive,
  });

      if (error) {
        console.error(error);
        alert("Failed to save result");
        return;
      }

      alert("Result saved successfully");

      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id="results"
      className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20"
    >
      <h2 className="font-bold text-lg text-navy-900 mb-4">
        Add / Edit Results
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              Draw number
            </label>

            <input
              type="text"
              value={drawNumber}
              onChange={(e) => setDrawNumber(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              First prize
            </label>

            <input
              type="text"
              value={firstPrize}
              onChange={(e) => setFirstPrize(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200 font-mono"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
            />
          </div>
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isLive}
            onChange={(e) => setIsLive(e.target.checked)}
            className="rounded text-accent-red"
          />

          <span className="text-sm text-navy-700">
            Mark as LIVE
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-red transition-colors disabled:opacity-50"
        >
          <Save className="h-4 w-4" />

          {loading ? "Saving..." : "Save Result"}
        </button>
      </form>
    </div>
  );
}