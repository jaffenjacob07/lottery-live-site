import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveTicker } from "@/components/layout/LiveTicker";
import { getTodaysDraw } from "@/lib/todays-draw";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const todayDraw = await getTodaysDraw();

  const tickerItems = todayDraw
  ? [
      {
        id: "1",
        text: `${todayDraw.name} ${todayDraw.drawNumber} draw result expected at 3:00 PM`,
      },
      {
        id: "2",
        text: `Today's lottery: ${todayDraw.name} ${todayDraw.drawNumber}`,
      },
      {
        id: "3",
        text: "Official Kerala Lottery results update live on this page",
      },
    ]
  : [
      {
        id: "1",
        text: "Kerala Lottery draw result expected at 3:00 PM",
      },
    ];

  return (
    <div className="min-h-screen flex flex-col">
      <LiveTicker items={tickerItems} />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}