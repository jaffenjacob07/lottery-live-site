import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveTicker } from "@/components/layout/LiveTicker";
import { breakingNews } from "@/data/lottery";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <LiveTicker items={breakingNews} />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
