import type {
  BreakingNews,
  HomepageConfig,
  LiveUpdate,
  LotteryResult,
  RelatedArticle,
} from "@/types/lottery";

export const siteConfig = {
  name: "Kerala Lottery Live",
  tagline: "Official Style Live Results Portal",
  url: "https://keralalotterylive.vercel.app",
  description:
    "Get Kerala State Lottery live results, winning numbers, draw updates, and PDF downloads. Fast, mobile-first, and updated in real time.",
  copyrightYear: 2026,
};

export const homepageConfig: HomepageConfig = {
  nextDrawName: "Karunya Plus",
  nextDrawDate: "2026-05-27",
  nextDrawTimestamp: new Date("2026-05-27T15:00:00+05:30").getTime(),
  heroTitle: "Karunya Plus KN-598 Live Result",
  heroSubtitle: "Today’s 3:00 PM draw — watch numbers update live",
};

export const breakingNews: BreakingNews[] = [
  { id: "1", text: "KN-598 Karunya Plus draw result expected at 3:15 PM IST" },
  { id: "2", text: "Yesterday’s Win-Win W-987 first prize claimed in Ernakulam" },
  { id: "3", text: "Next bumper draw announcement on Friday — stay tuned" },
  { id: "4", text: "PDF official result sheet uploading shortly after live draw" },
];

export const lotteryResults: LotteryResult[] = [
  {
    id: "1",
    slug: "karunya-plus-kn-598",
    name: "Karunya Plus",
    drawNumber: "KN-598",
    date: "2026-05-26",
    firstPrize: "KA 458921",
    location: "Thiruvananthapuram",
    isLive: true,
    updatedAt: "2026-05-26T15:18:00+05:30",
    author: "Results Desk",
    authorRole: "Senior Editor",
    heroImage:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&q=80",
    secondPrize: "KB 112334",
    thirdPrize: "KC 998877",
    consolationPrizes: ["KD 445566", "KE 778899", "KF 223344"],
    lowerPrizes: [
      "KG 112233",
      "KH 445566",
      "KI 778899",
      "KJ 334455",
      "KK 667788",
      "KL 990011",
      "KM 223344",
      "KN 556677",
    ],
    pdfUrl: "/sample-result.pdf",
    yesterdaySlug: "win-win-w-987",
  },
  {
    id: "2",
    slug: "win-win-w-987",
    name: "Win-Win",
    drawNumber: "W-987",
    date: "2026-05-25",
    firstPrize: "WA 334455",
    location: "Ernakulam",
    isLive: false,
    updatedAt: "2026-05-25T15:12:00+05:30",
    author: "Results Desk",
    authorRole: "Senior Editor",
    heroImage:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
    secondPrize: "WB 667788",
    thirdPrize: "WC 990011",
    consolationPrizes: ["WD 112233", "WE 445566"],
    lowerPrizes: ["WF 778899", "WG 223344", "WH 556677", "WI 889900"],
    pdfUrl: "/sample-result.pdf",
  },
  {
    id: "3",
    slug: "sthree-sakthi-ss-456",
    name: "Sthree Sakthi",
    drawNumber: "SS-456",
    date: "2026-05-24",
    firstPrize: "SA 778899",
    location: "Kozhikode",
    isLive: false,
    updatedAt: "2026-05-24T15:10:00+05:30",
    author: "Priya Nair",
    authorRole: "Lottery Analyst",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    secondPrize: "SB 112233",
    thirdPrize: "SC 445566",
    consolationPrizes: ["SD 778899"],
    lowerPrizes: ["SE 990011", "SF 223344", "SG 556677"],
    pdfUrl: "/sample-result.pdf",
  },
  {
    id: "4",
    slug: "akshaya-ak-321",
    name: "Akshaya",
    drawNumber: "AK-321",
    date: "2026-05-23",
    firstPrize: "AA 556677",
    location: "Thrissur",
    isLive: false,
    updatedAt: "2026-05-23T15:08:00+05:30",
    author: "Results Desk",
    authorRole: "Senior Editor",
    heroImage:
      "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1200&q=80",
    secondPrize: "AB 889900",
    thirdPrize: "AC 112233",
    consolationPrizes: ["AD 445566", "AE 778899"],
    lowerPrizes: ["AF 990011", "AG 223344", "AH 667788"],
    pdfUrl: "/sample-result.pdf",
  },
];

export const liveUpdates: LiveUpdate[] = [
  {
    id: "1",
    time: "15:18",
    message: "First prize number KA 458921 announced for KN-598",
    type: "result",
  },
  {
    id: "2",
    time: "15:14",
    message: "Second and third prize numbers being verified",
    type: "info",
  },
  {
    id: "3",
    time: "15:10",
    message: "Draw completed — results entering system",
    type: "alert",
  },
  {
    id: "4",
    time: "15:00",
    message: "Live draw started at Thiruvananthapuram",
    type: "info",
  },
];

export const relatedArticles: RelatedArticle[] = [
  {
    id: "1",
    title: "How to claim Kerala Lottery prize above ₹1 lakh",
    slug: "claim-prize-guide",
    date: "2026-05-20",
    category: "Guide",
  },
  {
    id: "2",
    title: "Karunya Plus KN-597 full result breakdown",
    slug: "kn-597-breakdown",
    date: "2026-05-25",
    category: "Analysis",
  },
  {
    id: "3",
    title: "Weekly lottery schedule May 2026",
    slug: "may-schedule",
    date: "2026-05-18",
    category: "Schedule",
  },
];

export const topicTags = [
  "Kerala Lottery",
  "Live Result",
  "Karunya Plus",
  "Win-Win",
  "First Prize",
  "PDF Download",
  "Today Draw",
];

export function getResultBySlug(slug: string): LotteryResult | undefined {
  return lotteryResults.find((r) => r.slug === slug);
}

export function getFeaturedResult(): LotteryResult {
  return lotteryResults[0];
}
