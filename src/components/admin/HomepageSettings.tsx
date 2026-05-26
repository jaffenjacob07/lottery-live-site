"use client";

import { homepageConfig } from "@/data/lottery";
import { Save } from "lucide-react";

export function HomepageSettings() {
  return (
    <div id="homepage" className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20">
      <h2 className="font-bold text-lg text-navy-900 mb-4">Manage Homepage Sections</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">Hero title</label>
          <input
            type="text"
            defaultValue={homepageConfig.heroTitle}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">Hero subtitle</label>
          <input
            type="text"
            defaultValue={homepageConfig.heroSubtitle}
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">
            Breaking ticker (one per line)
          </label>
          <textarea
            rows={4}
            defaultValue="KN-598 result expected at 3:15 PM&#10;PDF uploading shortly"
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200 resize-none text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-red"
        >
          <Save className="h-4 w-4" />
          Save Homepage
        </button>
      </form>
    </div>
  );
}
