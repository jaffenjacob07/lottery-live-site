import { AuthorSection } from "@/components/result/AuthorSection";
import { DownloadPdfButton } from "@/components/result/DownloadPdfButton";
import { LowerPrizeChips } from "@/components/result/LowerPrizeChips";
import { PrizeCards } from "@/components/result/PrizeCards";
import { ShareButtons } from "@/components/result/ShareButtons";
import { TicketChecker } from "@/components/result/TicketChecker";
import { YesterdayCard } from "@/components/result/YesterdayCard";
import { LiveBadge } from "@/components/ui/LiveBadge";

import {
  fetchLotteryResults,
  getLotteryResultBySlug,
} from "@/lib/lottery-results";

import {
  formatDate,
  formatUpdatedTime,
} from "@/lib/utils";

import type { Metadata } from "next";

import Image from "next/image";
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
    title: `Kerala Lottery ${result.name} ${result.drawNumber} Result Today`,

    description: `Kerala Lottery ${result.name} ${result.drawNumber} result today. First prize winning number ${result.firstPrize}. Check complete live winners list and Kerala lottery result updates.`,

    openGraph: {
      title: `${result.name} ${result.drawNumber} Live Result`,
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

  const pageTitle = `Kerala Lottery ${result.name} ${result.drawNumber} Result Today: ₹1 Crore First Prize ${result.firstPrize} | Check Full Winners List`;

  const seoDescription = `Kerala State Lottery ${result.name} ${result.drawNumber} result declared today. First prize winning number is ${result.firstPrize}. Check complete winners list, live updates, prize structure and PDF results.`;

  const articleIntro = `
The Kerala State Lottery Department has officially announced the results of the ${result.name} ${result.drawNumber} lottery draw today.

The live draw was conducted in ${result.location} on ${formattedDate}.

Participants can now check the first prize winning number, second prize, third prize, consolation prizes, and full winners list online.
`;

  const articleBody = `
The first prize for the ${result.drawNumber} draw is ${result.firstPrize}.

Winners must verify their ticket numbers using the official Kerala Government Gazette result publication.

Prize claims should be submitted within 30 days from the draw date.

Winners of major prizes are required to submit valid ID proof including Aadhaar card or PAN card while claiming rewards.

The Kerala lottery department conducts transparent live draws daily under government supervision.
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

            <div className="flex flex-wrap items-center gap-3 mb-3">
              {result.isLive && <LiveBadge />}

              <span className="text-sm text-navy-500">
                Updated{" "}
                {formatUpdatedTime(result.updatedAt)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 mb-3 leading-tight">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <AuthorSection
            name={result.author}
            role={result.authorRole}
          />

          <div className="my-6">
            <ShareButtons title={pageTitle} />
          </div>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 card-shadow">
            <Image
              src={result.heroImage}
              alt={pageTitle}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-lg sm:text-xl">
                {result.drawNumber}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">

              <section className="space-y-6">
                <div className="bg-white rounded-2xl border border-navy-100 p-6 card-shadow">

                  <h2 className="text-2xl font-bold text-navy-900 mb-4">
                    {result.name} {result.drawNumber} Kerala Lottery Result Today
                  </h2>

                  <p className="text-navy-700 leading-8 whitespace-pre-line">
                    {articleIntro}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      First Prize Winning Number
                    </h3>

                    <div className="bg-navy-900 text-white rounded-2xl p-6 text-center">
                      <p className="text-sm uppercase tracking-widest text-gold-300 mb-2">
                        First Prize
                      </p>

                      <p className="text-4xl font-black tracking-widest">
                        {result.firstPrize}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      Kerala Lottery Winners List
                    </h3>

                    <p className="text-navy-700 leading-8 whitespace-pre-line">
                      {articleBody}
                    </p>
                  </div>
                </div>
              </section>

              <PrizeCards
                firstPrize={result.firstPrize}
                secondPrize={result.secondPrize}
                thirdPrize={result.thirdPrize}
                consolationPrizes={result.consolationPrizes}
              />

              <LowerPrizeChips
                numbers={result.lowerPrizes}
              />

              <TicketChecker />
            </div>

            <aside className="space-y-6">
              <YesterdayCard
                yesterdaySlug={result.yesterdaySlug}
              />
            </aside>
          </div>
        </div>
      </article>

      <DownloadPdfButton pdfUrl={result.pdfUrl} />
    </>
  );
}