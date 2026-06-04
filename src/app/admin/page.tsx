import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { CountdownSettings } from "@/components/admin/CountdownSettings";
import { HomepageSettings } from "@/components/admin/HomepageSettings";
import { LiveUpdateForm } from "@/components/admin/LiveUpdateForm";
import { PdfUpload } from "@/components/admin/PdfUpload";
import { ResultForm } from "@/components/admin/ResultForm";
import { CreateDrawForm } from "@/components/admin/CreateDrawForm";

import { lotteryResults } from "@/data/lottery";

import {
  BarChart3,
  FileText,
  Radio,
} from "lucide-react";

import Link from "next/link";

export default function AdminPage() {
  const stats = [
    {
      label: "Total Results",
      value: lotteryResults.length,
      icon: FileText,
    },
    {
      label: "Live Draws",
      value: 1,
      icon: Radio,
    },
    {
      label: "Page Views",
      value: "12.4K",
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen bg-navy-50 flex flex-col lg:flex-row">
      <AdminSidebar />

      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-navy-900">
              Dashboard
            </h1>

            <p className="text-sm text-navy-500">
              Manage lottery results and live content
            </p>
          </div>

          <Link
            href="/"
            className="text-sm font-semibold text-accent-red hover:underline"
          >
            View Site →
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl bg-white border border-navy-100 p-5 card-shadow flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center">
                <Icon className="h-6 w-6 text-navy-700" />
              </div>

              <div>
                <p className="text-2xl font-bold text-navy-900">
                  {value}
                </p>

                <p className="text-sm text-navy-500">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 max-w-3xl">

          <CreateDrawForm />

          <ResultForm />

          <LiveUpdateForm />

          <PdfUpload />

          <CountdownSettings />

          <HomepageSettings />

        </div>
      </div>
    </div>
  );
}