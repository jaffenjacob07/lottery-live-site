export interface LotteryResult {
  id: string;

  slug: string;

  name: string;

  drawNumber: string;

  date: string;

  firstPrize: string;

  location: string;

  isLive: boolean;

  updatedAt: string;

  author: string;

  authorRole: string;

  heroImage: string;

  secondPrize: string;

  thirdPrize: string;

  fourthPrize: string;

  fifthPrize: string;

  sixthPrize: string;

  seventhPrize: string;

  eighthPrize: string;

  ninthPrize: string;

  consolationPrizes: string[];

  lowerPrizes: any;

live_updates?: {
  time: string;
  message: string;
}[];

pdfUrl?: string;

  yesterdaySlug?: string;

  articleContent?: string;

  metaTitle?: string;

  metaDescription?: string;
}

export interface LiveUpdate {
  id: string;
  time: string;
  message: string;
  type: "info" | "result" | "alert";
}

export interface BreakingNews {
  id: string;
  text: string;
}

export interface RelatedArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
}

export interface HomepageConfig {
  nextDrawName: string;
  nextDrawDate: string;
  nextDrawTimestamp: number;
  heroTitle: string;
  heroSubtitle: string;
}