"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { LOTTERY_TYPES } from "@/data/lottery-types";

export function CreateDrawForm() {
  const supabase = createClient();

  const [lotteryName, setLotteryName] = useState("Karunya Plus");
  const [drawNumber, setDrawNumber] = useState("");
  const [drawDate, setDrawDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const slug =
        `${lotteryName}-${drawNumber}-lottery-results-live`
          .toLowerCase()
          .replace(/\s+/g, "-");

      const { error } = await supabase
        .from("lottery_results")
        .insert({
          lottery_name: lotteryName,
          draw_no: drawNumber,
          draw_date: drawDate,
          seo_slug: slug,
          is_live: true,
          location: "",
          first_prize: "",
          second_prize: "",
          third_prize: "",
          consolation_prize: "",
          live_updates: [],
        });

      if (error) {
        console.error(error);
        alert("Failed to create draw");
        return;
      }

      alert("Draw created successfully");

      setDrawNumber("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow">
      <h2 className="font-bold text-lg text-navy-900 mb-4">
        Create New Draw
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium mb-1">
            Lottery
          </label>

          <select
            value={lotteryName}
            onChange={(e) => setLotteryName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          >
            {LOTTERY_TYPES.map((lottery) => (
              <option key={lottery}>
                {lottery}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Draw Number
          </label>

          <input
            type="text"
            value={drawNumber}
            onChange={(e) => setDrawNumber(e.target.value)}
            placeholder="KN-626"
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Draw Date
          </label>

          <input
            type="date"
            value={drawDate}
            onChange={(e) => setDrawDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold"
        >
          {loading ? "Creating..." : "Create Draw"}
        </button>

      </form>
    </div>
  );
}