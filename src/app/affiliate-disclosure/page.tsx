import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | TheDateCompass",
  description:
    "Learn how TheDateCompass earns commissions through affiliate partnerships while remaining committed to providing independent information.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Header />

      <main className="bg-[#080808] text-white">
        <section className="mx-auto max-w-5xl px-6 py-20">

          {/* Header */}

          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-5xl font-black">
                Affiliate Disclosure
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
                Our Commitment to Transparency
              </h2>

              <p>
                TheDateCompass is an independent comparison website that
                helps adults discover third-party dating platforms, AI
                companion services, and other online relationship-related
                products.
              </p>

              <p className="mt-4">
                To support the operation of this website, some links may be
                affiliate links. If you click one of these links and complete
                a qualifying action, such as registering or purchasing a
                service, we may receive a commission from the provider.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                What This Means for You
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Clicking an affiliate link does not increase the price you
                  pay.
                </li>

                <li>
                  You are never charged an additional fee because you visited
                  a provider through TheDateCompass.
                </li>

                <li>
                  Any commission we earn helps support the maintenance,
                  content creation, and development of this website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Editorial Independence
              </h2>

              <p>
                Affiliate partnerships do not determine which platforms are
                featured on TheDateCompass. We strive to provide useful,
                informative, and transparent content to help visitors make
                informed decisions.
              </p>

              <p className="mt-4">
                Our reviews, guides, and comparison pages are intended for
                informational purposes only and should not be considered
                professional advice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Third-Party Providers
              </h2>

              <p>
                TheDateCompass does not own, operate, or control the
                third-party platforms listed on this website.
              </p>

              <p className="mt-4">
                Registrations, subscriptions, payments, conversations,
                account management, and customer support are provided
                exclusively by the respective third-party providers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Availability and Accuracy
              </h2>

              <p>
                Platform availability, pricing, promotions, features,
                supported countries, and terms may change without notice.
                While we make reasonable efforts to keep information current,
                we recommend visiting the official provider&apos;s website to
                verify the latest details before registering.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Adults Only
              </h2>

              <p>
                TheDateCompass is intended exclusively for adults aged 18
                years or older. Some services featured on this website may
                contain mature or adult-oriented content.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Questions
              </h2>

              <p>
                If you have any questions regarding our affiliate
                relationships or this disclosure, please contact us through
                our Contact page.
              </p>
            </section>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}