import { AuthorSection } from "@/components/result/AuthorSection";
import { DownloadPdfButton } from "@/components/result/DownloadPdfButton";
import { LiveTimeline } from "@/components/result/LiveTimeline";
import { LowerPrizeChips } from "@/components/result/LowerPrizeChips";
import { PrizeCards } from "@/components/result/PrizeCards";
import { RelatedArticles } from "@/components/result/RelatedArticles";
import { ShareButtons } from "@/components/result/ShareButtons";
import { TicketChecker } from "@/components/result/TicketChecker";
import { TopicTags } from "@/components/result/TopicTags";
import { YesterdayCard } from "@/components/result/YesterdayCard";
import { LiveBadge } from "@/components/ui/LiveBadge";
import {
  getResultBySlug,
  liveUpdates,
  lotteryResults,
  relatedArticles,
  topicTags,
} from "@/data/lottery";
import { formatDate, formatUpdatedTime } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return lotteryResults.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getResultBySlug(slug);
  if (!result) return { title: "Result Not Found" };
  return {
    title: `${result.name} ${result.drawNumber} Live Result`,
    description: `Kerala ${result.name} ${result.drawNumber} live result. First prize: ${result.firstPrize}. Draw date: ${result.date}.`,
    openGraph: {
      title: `${result.name} ${result.drawNumber} Live Result`,
      images: [result.heroImage],
    },
  };
}

export default async function ResultDetailPage({ params }: Props) {
  const { slug } = await params;
  const result = getResultBySlug(slug);
  if (!result) notFound();

  const title = `${result.name} ${result.drawNumber} Live Result`;

  return (
    <>
      <article>
        <div className="bg-navy-50 border-b border-navy-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
            <nav className="text-sm text-navy-500 mb-4">
              <Link href="/" className="hover:text-accent-red">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-navy-800">{result.drawNumber}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {result.isLive && <LiveBadge />}
              <span className="text-sm text-navy-500">
                Updated {formatUpdatedTime(result.updatedAt)}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 mb-3">
              {title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-navy-600">
              <span>{formatDate(result.date)}</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-accent-red" />
                {result.location}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <AuthorSection name={result.author} role={result.authorRole} />
          <div className="my-6">
            <ShareButtons title={title} />
          </div>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 card-shadow">
            <Image
              src={result.heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-lg sm:text-xl">{result.drawNumber}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <PrizeCards
                firstPrize={result.firstPrize}
                secondPrize={result.secondPrize}
                thirdPrize={result.thirdPrize}
                consolationPrizes={result.consolationPrizes}
              />
              <LowerPrizeChips numbers={result.lowerPrizes} />
              <TicketChecker />
              <RelatedArticles articles={relatedArticles} />
              <TopicTags tags={topicTags} />
            </div>
            <aside className="space-y-6">
              <LiveTimeline updates={liveUpdates} />
              <YesterdayCard yesterdaySlug={result.yesterdaySlug} />
            </aside>
          </div>
        </div>
      </article>

      <DownloadPdfButton pdfUrl={result.pdfUrl} />
    </>
  );
}
