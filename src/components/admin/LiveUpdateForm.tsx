"use client";

import { Plus } from "lucide-react";

export function LiveUpdateForm() {
  return (
    <div id="live" className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-shadow scroll-mt-20">
      <h2 className="font-bold text-lg text-navy-900 mb-4">Add Live Update</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Time</label>
            <input
              type="text"
              placeholder="15:18"
              className="w-full px-4 py-2.5 rounded-lg border border-navy-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-700 mb-1">Type</label>
            <select className="w-full px-4 py-2.5 rounded-lg border border-navy-200">
              <option value="info">Info</option>
              <option value="result">Result</option>
              <option value="alert">Alert</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-700 mb-1">Message</label>
          <textarea
            rows={3}
            placeholder="First prize number announced..."
            className="w-full px-4 py-2.5 rounded-lg border border-navy-200 resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-accent-red text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-red-dark"
        >
          <Plus className="h-4 w-4" />
          Post Update
        </button>
      </form>
    </div>
  );
}
