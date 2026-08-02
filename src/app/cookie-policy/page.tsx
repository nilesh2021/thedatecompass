import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | TheDateCompass",
  description:
    "Learn how TheDateCompass uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main className="bg-[#080808] text-white">
        <section className="mx-auto max-w-5xl px-6 py-20">

          {/* Header */}

          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-5xl font-black">
                Cookie Policy
              </h1>

              <p className="mt-3 text-white/60">
                Last updated: July 2026
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#E83E9B] hover:bg-[#E83E9B] md:self-auto"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

          </div>

          {/* Content */}

          <div className="mt-12 space-y-10 leading-8 text-white/75">

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                What Are Cookies?
              </h2>

              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help websites function properly,
                remember preferences, improve performance, and analyze
                visitor activity.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                How We Use Cookies
              </h2>

              <p>
                TheDateCompass uses cookies and similar technologies to
                improve your browsing experience and maintain website
                functionality.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Remember your preferences.</li>
                <li>Analyze website traffic.</li>
                <li>Improve website performance.</li>
                <li>Measure affiliate referrals.</li>
                <li>Support advertising and analytics services.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Types of Cookies We Use
              </h2>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Essential Cookies
              </h3>

              <p>
                These cookies are necessary for the website to operate
                correctly and cannot be disabled.
              </p>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Analytics Cookies
              </h3>

              <p>
                These cookies help us understand how visitors use our
                website so we can improve user experience.
              </p>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Affiliate Cookies
              </h3>

              <p>
                Affiliate partners may place cookies to recognize when a
                visitor reaches their website through one of our referral
                links.
              </p>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Advertising Cookies
              </h3>

              <p>
                Advertising partners may use cookies to measure campaign
                performance and deliver relevant advertisements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Third-Party Cookies
              </h2>

              <p>
                Third-party providers such as Google Analytics, Microsoft
                Clarity, advertising platforms, and affiliate networks may
                place cookies according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Managing Cookies
              </h2>

              <p>
                Most web browsers allow you to control or delete cookies
                through browser settings. Please note that disabling some
                cookies may affect the functionality of this website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Changes to This Cookie Policy
              </h2>

              <p>
                We may update this Cookie Policy periodically. Any changes
                will be posted on this page with a revised update date.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Contact Us
              </h2>

              <p>
                If you have questions regarding our use of cookies, please
                contact us through our Contact page.
              </p>
            </section>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}