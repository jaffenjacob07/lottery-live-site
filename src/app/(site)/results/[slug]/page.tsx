export const dynamic = "force-dynamic";

import { AuthorSection } from "@/components/result/AuthorSection";
import { DownloadPdfButton } from "@/components/result/DownloadPdfButton";
import { LowerPrizeChips } from "@/components/result/LowerPrizeChips";
import { PrizeCards } from "@/components/result/PrizeCards";
import { ShareButtons } from "@/components/result/ShareButtons";
import { TicketChecker } from "@/components/result/TicketChecker";
import { YesterdayCard } from "@/components/result/YesterdayCard";
import { LiveBadge } from "@/components/ui/LiveBadge";
import LiveUpdates from "@/components/result/LiveUpdates";
import FaqSection from "@/components/result/FaqSection";
import RelatedResults from "@/components/result/RelatedResults";

import {
  fetchLotteryResults,
  getLotteryResultBySlug,
} from "@/lib/lottery-results";

import {
  formatDate,
  formatUpdatedTime,
} from "@/lib/utils";

import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { results } = await fetchLotteryResults();

  return results.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const result = await getLotteryResultBySlug(slug);

  if (!result) {
    return {
      title: "Result Not Found",
    };
  }

  return {
    title:
      result.metaTitle ||
      `Kerala Lottery ${result.name} ${result.drawNumber} Result Today`,

    description:
      result.metaDescription ||
      `Kerala Lottery ${result.name} ${result.drawNumber} result today. First prize winning number ${result.firstPrize}.`,

    openGraph: {
      title:
        result.metaTitle ||
        `${result.name} ${result.drawNumber} Live Result`,

      description: result.metaDescription || "",

      images: [result.heroImage],
    },
  };
}

export default async function ResultDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const result = await getLotteryResultBySlug(slug);

if (!result) notFound();

  const formattedDate = formatDate(result.date);

  const pageTitle =
    result.metaTitle ||
    `Kerala Lottery ${result.name} ${result.drawNumber} Result Today`;

    const { results } = await fetchLotteryResults();

const relatedResults = results
  .filter((r) => r.slug !== result.slug)
  .slice(0, 5)
  .map((r) => ({
    slug: r.slug,
    title: `${r.name} Result`
  }));

  const articleContent =
    result.articleContent ||
    `Kerala Lottery ${result.name} ${result.drawNumber} result declared today.`;

  return (
    <>
      <article>
        <div className="bg-navy-50 border-b border-navy-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">

            <nav className="text-sm text-navy-500 mb-4">
              <Link
                href="/"
                className="hover:text-accent-red"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <span className="text-navy-800">
                {result.drawNumber}
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              {result.isLive && <LiveBadge />}

              <span className="text-sm text-navy-500">
                Updated{" "}
                {formatUpdatedTime(result.updatedAt)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-navy-900 mb-4 leading-tight">
              {pageTitle}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-navy-600">
              <span>{formattedDate}</span>

              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-accent-red" />
                {result.location}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">

  <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-navy-100">
  <AuthorSection
    name={result.author}
    updatedAt={formatUpdatedTime(
      result.updatedAt
    )}
  />

  <ShareButtons title={pageTitle} />
</div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-8">

              <section className="space-y-6">

                <div className="bg-white rounded-2xl border border-navy-100 p-6 card-shadow">

                  <h2 className="text-2xl font-bold text-navy-900 mb-5">
                    {result.name} {result.drawNumber} Kerala Lottery Result Today
                  </h2>

                  <div className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-p:text-navy-700">
                    {articleContent
                      .split("\n")
                      .filter(Boolean)
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="leading-8 mb-5"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>

                  <div className="mt-12 space-y-6">

                    <div className="rounded-3xl gold-gradient p-[2px]">

                      <div className="bg-navy-950 rounded-[22px] p-8 text-center">

                        <p className="text-xs uppercase tracking-[0.3em] text-gold-300 mb-3">
                          FIRST PRIZE • ₹1 CRORE
                        </p>

                        <p className="text-5xl font-black text-white tracking-[0.2em]">
                          {result.firstPrize}
                        </p>

                      </div>
                    </div>

                  </div>

                </div>

              </section>

              <PrizeCards
  secondPrize={result.secondPrize}
  thirdPrize={result.thirdPrize}
  consolationPrizes={result.consolationPrizes}
/>

<LiveUpdates
  updates={result.live_updates || []}
/>

<LowerPrizeChips
  numbers={result.lowerPrizes}
/>

<TicketChecker result={result} />

<FaqSection
  lotteryName={result.name}
  drawNumber={result.drawNumber}
  firstPrize={result.firstPrize}
/>

<RelatedResults
  results={relatedResults}
/>

            </div>

            <aside className="space-y-6">

              <YesterdayCard
                yesterdaySlug={result.yesterdaySlug}
              />

            </aside>

          </div> {/* grid */}

</div> {/* page container */}

</article>

      <DownloadPdfButton pdfUrl={result.pdfUrl} />
    </>
  );
}