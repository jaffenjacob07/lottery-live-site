import { siteConfig } from "@/data/lottery";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-red flex items-center justify-center font-black text-white">
                KL
              </div>

              <span className="font-bold text-white text-lg">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-sm text-navy-300 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#results"
                  className="hover:text-white transition-colors"
                >
                  Results
                </Link>
              </li>

              <li>
              <Link
                href="/today-live"
                className="hover:text-white transition-colors"
                 >
                  Today&apos;s Live
             </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Legal
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Lotteries */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Lotteries
            </h4>

            <ul className="space-y-2 text-sm">
              <li>Bhagyathara</li>
              <li>Karunya Plus</li>
              <li>Dhanalekshmi</li>
              <li>Sthree Sakthi</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-navy-800 mt-10 pt-6 text-center text-xs text-navy-400">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}