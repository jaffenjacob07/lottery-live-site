"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function LiveUpdateForm() {
  const supabase = createClient();

  const [drawNo, setDrawNo] = useState("SK-53");
  const [type, setType] = useState("info");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!message) {
      alert("Please enter a message");
      return;
    }

    try {
      setLoading(true);

      const { data: result, error: fetchError } = await supabase
        .from("lottery_results")
        .select("id, live_updates")
        .eq("draw_no", drawNo)
        .single();

      if (fetchError || !result) {
        alert("Lottery result not found");
        return;
      }

      const existingUpdates = result.live_updates || [];

      const newUpdate = {
        time: new Date()
          .toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          .toUpperCase(),
        message,
        type,
      };

      const { error: updateError } = await supabase
        .from("lottery_results")
        .update({
          live_updates: [...existingUpdates, newUpdate],
        })
        .eq("id", result.id);

      if (updateError) {
        console.error(updateError);
        alert("Failed to save update");
        return;
      }

      alert("Live update posted successfully");

      setMessage("");
      setType("info");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id="live"
      className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20"
    >
      <h2 className="font-bold text-lg text-navy-900 mb-4">
        Add Live Update
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">
            Lottery
          </label>

          <select
            value={drawNo}
            onChange={(e) => setDrawNo(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          >
            <option value="SK-53">
              Suvarna Keralam SK-53
            </option>

            <option value="KN-625">
              Karunya Plus KN-625
            </option>

            <option value="SS-456">
              Sthree Sakthi SS-456
            </option>

            <option value="KN-598">
              Karunya Plus KN-598
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          >
            <option value="info">Info</option>
            <option value="result">Result</option>
            <option value="alert">Alert</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">
            Message
          </label>

          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="First prize number announced..."
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-accent-red text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-red-dark disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />

          {loading ? "Posting..." : "Post Update"}
        </button>

      </form>
    </div>
  );
}