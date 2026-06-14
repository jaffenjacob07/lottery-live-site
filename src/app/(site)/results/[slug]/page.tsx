import Link from "next/link";
import { getLiveResult } from "@/lib/lottery-results";

export default async function TodayLivePage() {
  const liveResult = await getLiveResult();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border p-6">

          <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
            🔴 LIVE
          </span>

          <h1 className="text-3xl font-bold mt-4">
            Today&apos;s Live Lottery Draw
          </h1>

          <p className="text-gray-600 mt-2">
            Live updates for today&apos;s Kerala Lottery draw.
          </p>

          {liveResult ? (
            <div className="mt-6 p-6 rounded-xl bg-navy-900 text-white">
              <p className="text-sm uppercase opacity-70">
                Active Draw
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {liveResult.name} {liveResult.drawNumber}
              </h2>

              <p className="mt-4">
                First Prize:
                <span className="font-bold ml-2">
                  {liveResult.firstPrize}
                </span>
              </p>

              <Link
                href={`/results/${liveResult.slug}`}
                className="inline-block mt-5 px-4 py-2 rounded-lg bg-white text-navy-900 font-semibold"
              >
                View Full Result →
              </Link>
            </div>
          ) : (
            <div className="mt-6 p-6 rounded-xl bg-navy-900 text-white">
              <h2 className="text-xl font-bold">
                Waiting for live draw...
              </h2>

              <p className="mt-2 opacity-80">
                This page will show today&apos;s active lottery draw.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}