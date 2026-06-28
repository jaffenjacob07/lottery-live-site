export const dynamic = "force-dynamic";


import { DownloadPdfButton } from "@/components/result/DownloadPdfButton";
import { LowerPrizeChips } from "@/components/result/LowerPrizeChips";
import { PrizeCards } from "@/components/result/PrizeCards";
import { ShareButtons } from "@/components/result/ShareButtons";
import { TicketChecker } from "@/components/result/TicketChecker";
import { YesterdayCard } from "@/components/result/YesterdayCard";
import { LiveBadge } from "@/components/ui/LiveBadge";
import LiveUpdatesRealtime from "@/components/result/LiveUpdatesRealtime";
import FaqSection from "@/components/result/FaqSection";
import RelatedResults from "@/components/result/RelatedResults";
import Image from "next/image";

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
      description: "Lottery result not found.",
    };
  }

  const title =
    result.metaTitle ||
    `Kerala Lottery ${result.name} ${result.drawNumber} Result Today | First Prize ${result.firstPrize}`;

  const description =
    result.metaDescription ||
    `Check Kerala Lottery ${result.name} ${result.drawNumber} Result Today. First Prize ${result.firstPrize}, Second Prize ${result.secondPrize}. View complete winning numbers, live updates and PDF results.`;

  const canonicalUrl = `https://keralaliveresults.in/results/${result.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Kerala Live Results",
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: result.heroImage,
          width: 1200,
          height: 630,
          alt: `${result.name} ${result.drawNumber}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [result.heroImage],
    },

    robots: {
      index: true,
      follow: true,
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
  `Kerala Lottery ${result.name} ${result.drawNumber} Result Today | First Prize ${result.firstPrize}`;

    const { results } = await fetchLotteryResults();

    const relatedResults = results
  .filter((r) => r.slug !== result.slug)
  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )
  .slice(0, 5)
  .map((r) => ({
      slug: r.slug,
      name: r.name,
      drawNumber: r.drawNumber,
      date: r.date,
      firstPrize: r.firstPrize,
    }));

  const articleContent =
  result.articleContent ||
  `
Kerala Lottery ${result.name} ${result.drawNumber} Result was announced today by the Kerala State Lottery Department.

The first prize winning number for ${result.name} ${result.drawNumber} is ${result.firstPrize}. Check the complete winning numbers, prize breakdown and official PDF result below.
`;

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

            <div className="space-y-3 mb-4">
  <div>
    {result.isLive && <LiveBadge />}
  </div>

  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-navy-900 leading-tight">
  {pageTitle}
</h1>

  <div className="text-sm text-navy-600">
    <p className="font-semibold text-navy-800">
      By Results Desk
    </p>

    <p className="mt-1 flex flex-wrap items-center gap-2">
      <span>{formattedDate}</span>

      <span>•</span>

      <span className="flex items-center gap-1">
        <MapPin className="h-4 w-4 text-accent-red" />
        {result.location}
      </span>

      <span>•</span>

      <span>
        Updated {formatUpdatedTime(result.updatedAt)}
      </span>
    </p>
  </div>

</div>

          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
        
{result.heroImage && (
  <div className="mt-4 mb-6">
    <Image
      src={result.heroImage}
      alt={`${result.name} ${result.drawNumber} Lottery Ticket`}
      width={1200}
      height={675}
      priority
      className="w-full rounded-2xl border border-navy-100 object-cover"
    />
  </div>
)}
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-8">

              <section className="space-y-6">

                <div className="bg-white rounded-2xl border border-navy-100 p-6 card-shadow">

                <h2 className="text-2xl font-bold text-navy-900 mb-5">
                      Winning Numbers
               </h2>                 

                  <div className="mt-12 space-y-6">

                    <div className="rounded-3xl gold-gradient p-[2px]">

                      <div className="bg-navy-950 rounded-[22px] p-8 text-center">

                      <p className="text-xs uppercase tracking-[0.3em] text-gold-300 mb-3">
                            FIRST PRIZE • {result.prizeAmounts?.first}
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
  prizeAmounts={result.prizeAmounts}
/>

<TicketChecker result={result} />

<ShareButtons title={pageTitle} />

<LiveUpdatesRealtime
  resultId={result.id}
  initialUpdates={result.live_updates || []}
/>

<LowerPrizeChips
  numbers={result.lowerPrizes}
/>

<FaqSection
  lotteryName={result.name}
  drawNumber={result.drawNumber}
  firstPrize={result.firstPrize}
/>

<section className="bg-white rounded-2xl border border-navy-100 p-6 card-shadow">
  <h2 className="text-2xl font-bold text-navy-900 mb-5">
    About This Result
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
</section>

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