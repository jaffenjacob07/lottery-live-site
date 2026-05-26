"use client";

import {
  Clock,
  FileText,
  Home,
  LayoutDashboard,
  Radio,
  Settings,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin#results", label: "Results", icon: FileText },
  { href: "/admin#live", label: "Live Updates", icon: Radio },
  { href: "/admin#pdf", label: "Upload PDF", icon: Upload },
  { href: "/admin#countdown", label: "Countdown", icon: Clock },
  { href: "/admin#homepage", label: "Homepage", icon: Home },
  { href: "/admin#settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 shrink-0 bg-navy-950 text-white min-h-[calc(100vh-3.5rem)] lg:min-h-screen">
      <div className="p-4 border-b border-navy-800">
        <p className="font-bold">Admin Panel</p>
        <p className="text-xs text-navy-400">Kerala Lottery Live</p>
      </div>
      <nav className="p-3 flex lg:flex-col gap-1 overflow-x-auto">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              pathname === "/admin"
                ? "bg-accent-red text-white"
                : "text-navy-300 hover:bg-navy-800 hover:text-white"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
