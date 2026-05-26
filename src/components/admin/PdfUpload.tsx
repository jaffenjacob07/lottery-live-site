"use client";

import { Upload } from "lucide-react";

export function PdfUpload() {
  return (
    <div id="pdf" className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20">
      <h2 className="font-bold text-lg text-navy-900 mb-4">Upload PDF Result</h2>
      <div className="border-2 border-dashed border-navy-200 rounded-xl p-8 text-center hover:border-accent-red transition-colors">
        <Upload className="h-10 w-10 text-navy-400 mx-auto mb-3" />
        <p className="text-sm text-navy-600 mb-4">
          Drag & drop official result PDF or click to browse
        </p>
        <input type="file" accept=".pdf" className="hidden" id="pdf-upload" />
        <label
          htmlFor="pdf-upload"
          className="inline-block px-6 py-2.5 rounded-lg bg-navy-900 text-white text-sm font-semibold cursor-pointer hover:bg-accent-red"
        >
          Choose File
        </label>
      </div>
    </div>
  );
}
