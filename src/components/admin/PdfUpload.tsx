"use client";

import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { getDraws, AdminDraw } from "@/lib/admin-draws";

export function PdfUpload() {
  const supabase = createClient();

  const [draws, setDraws] = useState<AdminDraw[]>([]);
  const [selected, setSelected] = useState("");
  const [uploading, setUploading] = useState(false);

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

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file || !selected) return;

    try {
      setUploading(true);

      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("lottery-pdfs")
        .upload(fileName, file);

      if (uploadError) {
        console.error(uploadError);
        alert("PDF upload failed");
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("lottery-pdfs")
        .getPublicUrl(fileName);

      const { error: updateError } = await supabase
        .from("lottery_results")
        .update({
          pdf_url: publicUrl,
        })
        .eq("id", selected);

      if (updateError) {
        console.error(updateError);
        alert("Failed to save PDF URL");
        return;
      }

      alert("PDF uploaded successfully");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div
      id="pdf"
      className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20"
    >
      <h2 className="font-bold text-lg text-navy-900 mb-4">
        Upload PDF Result
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
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

      <div className="border-2 border-dashed border-navy-200 rounded-xl p-8 text-center hover:border-accent-red transition-colors">
        <Upload className="h-10 w-10 text-navy-400 mx-auto mb-3" />

        <p className="text-sm text-navy-600 mb-4">
          Drag & drop official result PDF or click to browse
        </p>

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          id="pdf-upload"
          onChange={handleUpload}
        />

        <label
          htmlFor="pdf-upload"
          className="inline-block px-6 py-2.5 rounded-lg bg-navy-900 text-white text-sm font-semibold cursor-pointer hover:bg-accent-red"
        >
          {uploading ? "Uploading..." : "Choose File"}
        </label>
      </div>
    </div>
  );
}