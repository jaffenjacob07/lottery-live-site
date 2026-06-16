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
          id: "today",
          text: `${todayDraw.name} ${todayDraw.drawNumber} draw result expected at 3:00 PM IST`,
        },
      ]
    : [
        {
          id: "today",
          text: "Kerala Lottery draw result expected at 3:00 PM IST",
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