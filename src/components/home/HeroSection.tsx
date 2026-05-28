import { fetchLotteryResults } from "@/lib/lottery-results";
import { LiveBadge } from "@/components/ui/LiveBadge";
import { formatDate } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export async function HeroSection() {
  const { results } = await fetchLotteryResults();

  const featured = results[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #c41e3a 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #486581 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          {featured.isLive && (
            <div className="mb-4">
              <LiveBadge />
            </div>
          )}

          <p className="text-accent-red font-semibold text-sm uppercase tracking-widest mb-2">
            Today&apos;s Live Draw
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            {featured.name} {featured.drawNumber} Live Result
          </h1>

          <p className="text-navy-200 text-base sm:text-lg mb-6">
            Today&apos;s 3:00 PM draw — watch numbers update live
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-navy-300 mb-8">
            <span className="font-semibold text-white">
              {featured.drawNumber}
            </span>

            <span>·</span>

            <span suppressHydrationWarning>
              {featured.date ? formatDate(featured.date) : "Today"}
            </span>

            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-accent-red" />
              {featured.location}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/results/${featured.slug}`}
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Watch Live Result
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#results"
              className="inline-flex items-center gap-2 border border-navy-400 hover:border-white text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              All Results
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 inline-block rounded-2xl gold-gradient p-[2px]">
          <div className="rounded-2xl bg-navy-950/90 backdrop-blur px-6 sm:px-10 py-5 sm:py-6 text-center">
            <p className="text-xs uppercase tracking-widest text-navy-300 mb-1">
              First Prize
            </p>

            <p className="text-2xl sm:text-4xl font-black text-white tracking-wider">
              {featured.firstPrize}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}