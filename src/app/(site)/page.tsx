export const dynamic = "force-dynamic";

import { HeroSection } from "@/components/home/HeroSection";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { LotteryResultsSection } from "@/components/home/LotteryResultsSection";
import { SubscribeForm } from "@/components/home/SubscribeForm";
import { TicketChecker } from "@/components/result/TicketChecker";
import { fetchLotteryResults } from "@/lib/lottery-results";

export default async function HomePage() {
  const { results, source } = await fetchLotteryResults();

  const latestResult = results[0];

  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <LotteryResultsSection
              results={results}
              source={source}
            />

            {latestResult && (
              <div className="mt-8">
                <TicketChecker result={latestResult} />
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <CountdownTimer />

            <div className="mt-6 rounded-2xl bg-navy-900 text-white p-6">
              <h3 className="font-bold mb-2">
                Result Alerts
              </h3>

              <p className="text-sm text-navy-300 mb-4">
                Get notified when today&apos;s draw goes live.
                Subscribe for instant updates.
              </p>

              <SubscribeForm />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}