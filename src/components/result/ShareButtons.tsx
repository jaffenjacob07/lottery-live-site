"use client";

import {
  Facebook,
  Link2,
  MessageCircle,
  Twitter,
} from "lucide-react";

export function ShareButtons({
  title,
}: {
  title: string;
}) {
  const copyLink = () => {
    navigator.clipboard.writeText(
      window.location.href
    );
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="w-10 h-10 rounded-lg bg-[#1877F2] text-white flex items-center justify-center"
      >
        <Facebook className="h-4 w-4" />
      </button>

      <button
        type="button"
        className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center"
      >
        <Twitter className="h-4 w-4" />
      </button>

      <button
        type="button"
        className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center"
      >
        <MessageCircle className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={copyLink}
        className="w-10 h-10 rounded-lg border border-navy-200 flex items-center justify-center"
      >
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
}