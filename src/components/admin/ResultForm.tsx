"use client";

import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { getDraws, AdminDraw } from "@/lib/admin-draws";
import { useRouter } from "next/navigation";

export function ResultForm() {
  const router = useRouter();
  const supabase = createClient();

  const [draws, setDraws] = useState<AdminDraw[]>([]);
  const [selected, setSelected] = useState("");

  const [firstPrize, setFirstPrize] = useState("");
  const [secondPrize, setSecondPrize] = useState("");
  const [thirdPrize, setThirdPrize] = useState("");
  const [fourthPrize, setFourthPrize] = useState("");
  const [fifthPrize, setFifthPrize] = useState("");
  const [sixthPrize, setSixthPrize] = useState("");
  const [seventhPrize, setSeventhPrize] = useState("");
  const [eighthPrize, setEighthPrize] = useState("");
  const [ninthPrize, setNinthPrize] = useState("");
  const [consolationPrize, setConsolationPrize] = useState("");
  const [location, setLocation] = useState("");
  const [isLive, setIsLive] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDraws() {
      const data = await getDraws();

      setDraws(data);

      if (data.length > 0) {
        setSelected(data[0].id);
      }
    }

    loadDraws();
  }, []);

  useEffect(() => {
    async function loadResult() {
      if (!selected) return;

      const { data, error } = await supabase
        .from("lottery_results")
        .select("*")
        .eq("id", selected)
        .single();

      if (error || !data) return;

      setFirstPrize(data.first_prize || "");
      setSecondPrize(data.second_prize || "");
      setThirdPrize(data.third_prize || "");
      setFourthPrize(data.fourth_prize || "");
      setFifthPrize(data.fifth_prize || "");
      setSixthPrize(data.sixth_prize || "");
      setSeventhPrize(data.seventh_prize || "");
      setEighthPrize(data.eighth_prize || "");
      setNinthPrize(data.ninth_prize || "");
      setConsolationPrize(data.consolation_prize || "");
      setLocation(data.location || "");
      setIsLive(data.is_live ?? true);
    }

    loadResult();
  }, [selected, supabase]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!selected) {
      alert("Select a draw first");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("lottery_results")
        .update({
          first_prize: firstPrize.trim(),
          second_prize: secondPrize.trim(),
          third_prize: thirdPrize.trim(),
          fourth_prize: fourthPrize.trim(),
          fifth_prize: fifthPrize.trim(),
          sixth_prize: sixthPrize.trim(),
          seventh_prize: seventhPrize.trim(),
          eighth_prize: eighthPrize.trim(),
          ninth_prize: ninthPrize.trim(),
          consolation_prize: consolationPrize.trim(),
          location: location.trim(),
          is_live: isLive,
        })
        .eq("id", selected);

      if (error) {
        console.error(error);
        alert("Failed to save result");
        return;
      }

      alert("Result updated successfully");
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
      className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow"
    >
      <h2 className="font-bold text-lg text-navy-900 mb-4">
        Update Lottery Results
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium mb-1">
            Select Draw
          </label>

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          >
            {draws.map((draw) => (
              <option key={draw.id} value={draw.id}>
                {draw.lottery_name} {draw.draw_no}
              </option>
            ))}
          </select>
        </div>

        <input
          placeholder="1st Prize"
          value={firstPrize}
          onChange={(e) => setFirstPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="Consolation Prize"
          value={consolationPrize}
          onChange={(e) => setConsolationPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="2nd Prize"
          value={secondPrize}
          onChange={(e) => setSecondPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="3rd Prize"
          value={thirdPrize}
          onChange={(e) => setThirdPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="4th Prize"
          value={fourthPrize}
          onChange={(e) => setFourthPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="5th Prize"
          value={fifthPrize}
          onChange={(e) => setFifthPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="6th Prize"
          value={sixthPrize}
          onChange={(e) => setSixthPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="7th Prize"
          value={seventhPrize}
          onChange={(e) => setSeventhPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="8th Prize"
          value={eighthPrize}
          onChange={(e) => setEighthPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="9th Prize"
          value={ninthPrize}
          onChange={(e) => setNinthPrize(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isLive}
            onChange={(e) => setIsLive(e.target.checked)}
          />
          LIVE Result
        </label>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-2.5 rounded-lg"
        >
          <Save className="h-4 w-4" />
          {loading ? "Saving..." : "Update Result"}
        </button>

      </form>
    </div>
  );
}