import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Kerala Live Results.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 card-shadow">

        <h1 className="text-3xl font-bold text-navy-900 mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-navy-700 leading-8">

          <p>
            Kerala Live Results respects your privacy and is committed
            to protecting your personal information. This Privacy Policy
            explains how information is collected and used when you visit
            our website.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-2">
              Information We Collect
            </h2>

            <p>
              We may collect non-personal information such as browser type,
              device information, pages visited, and usage statistics to
              improve the website experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-2">
              Cookies
            </h2>

            <p>
              Our website may use cookies to enhance user experience,
              analyze website traffic, and improve performance.
              You may disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-2">
              Analytics
            </h2>

            <p>
              We may use analytics tools such as Google Analytics
              to understand visitor behavior and improve our content
              and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-2">
              Advertising
            </h2>

            <p>
              Third-party advertising partners may use cookies and
              similar technologies to display relevant advertisements.
              These providers may collect anonymous usage information
              in accordance with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-2">
              Data Security
            </h2>

            <p>
              We take reasonable measures to protect website information,
              but no method of transmission over the internet can be
              guaranteed as completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy-900 mb-2">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy,
              please contact us through our Contact page.
            </p>
          </section>

          <p className="text-sm text-navy-500 pt-4 border-t border-navy-100">
            Last Updated: July 2026
          </p>

        </div>
      </div>
    </div>
  );
}