"use client";

import { Facebook, Link2, MessageCircle, Twitter } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const encoded = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white text-sm font-medium hover:opacity-90"
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
        <span className="hidden sm:inline">Facebook</span>
      </button>
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90"
        aria-label="Share on X"
      >
        <Twitter className="h-4 w-4" />
        <span className="hidden sm:inline">X</span>
      </button>
      <button
        type="button"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:opacity-90"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
      <button
        type="button"
        onClick={() => navigator.clipboard?.writeText(window.location.href)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-navy-200 text-navy-700 text-sm font-medium hover:bg-navy-50"
        aria-label="Copy link"
      >
        <Link2 className="h-4 w-4" />
        Copy Link
      </button>
      <span className="sr-only">Share: {encoded}</span>
    </div>
  );
}
