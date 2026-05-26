import { HeroSection } from "@/components/home/HeroSection";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { ResultCard } from "@/components/home/ResultCard";
import { SubscribeForm } from "@/components/home/SubscribeForm";
import { lotteryResults } from "@/data/lottery";
import { TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <section id="results">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-6 w-6 text-accent-red" />
                <h2 className="text-2xl font-black text-navy-900">Latest Results</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {lotteryResults.map((result, i) => (
                  <ResultCard key={result.id} result={result} index={i} />
                ))}
              </div>
            </section>
          </div>
          <div className="lg:col-span-1">
            <CountdownTimer />
            <div className="mt-6 rounded-2xl bg-navy-900 text-white p-6">
              <h3 className="font-bold mb-2">Result Alerts</h3>
              <p className="text-sm text-navy-300 mb-4">
                Get notified when today&apos;s draw goes live. Subscribe for instant
                updates.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
