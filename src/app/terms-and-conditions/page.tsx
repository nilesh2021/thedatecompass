import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | TheDateCompass",
  description:
    "Read the Terms & Conditions governing the use of TheDateCompass.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#080808] text-white">
        <section className="mx-auto max-w-5xl px-6 py-20">

          {/* Header */}

          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-5xl font-black">
                Terms & Conditions
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
                Acceptance of Terms
              </h2>

              <p>
                By accessing and using TheDateCompass, you agree to be bound
                by these Terms & Conditions. If you do not agree with any part
                of these terms, please discontinue using this website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                About TheDateCompass
              </h2>

              <p>
                TheDateCompass is an independent comparison website that
                provides information about third-party dating platforms,
                AI companion services, and related products.
              </p>

              <p className="mt-4">
                We do not own, manage, or operate the services featured on
                this website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Affiliate Relationships
              </h2>

              <p>
                Some links on TheDateCompass are affiliate links. If you
                register or purchase a service through these links, we may
                receive a commission at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Adults Only
              </h2>

              <p>
                This website is intended exclusively for individuals who are
                at least 18 years of age. Some third-party services may
                contain mature or adult-oriented content.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Third-Party Services
              </h2>

              <p>
                All registrations, subscriptions, payments, communications,
                and customer support are handled directly by the respective
                third-party provider.
              </p>

              <p className="mt-4">
                TheDateCompass is not responsible for the operation,
                availability, policies, or content of any external website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Accuracy of Information
              </h2>

              <p>
                We strive to keep information accurate and current.
                However, pricing, promotions, availability, features,
                supported countries, and other information may change
                without prior notice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Limitation of Liability
              </h2>

              <p>
                TheDateCompass shall not be liable for any direct, indirect,
                incidental, or consequential damages resulting from your use
                of this website or any third-party service linked from it.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Intellectual Property
              </h2>

              <p>
                All original content, branding, graphics, and website design
                belonging to TheDateCompass are protected by applicable
                intellectual property laws. Unauthorized copying or
                redistribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Changes to These Terms
              </h2>

              <p>
                We reserve the right to update or modify these Terms &
                Conditions at any time. Continued use of the website after
                changes have been published constitutes acceptance of the
                revised terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Governing Law
              </h2>

              <p>
                These Terms & Conditions shall be governed by the applicable
                laws of the jurisdiction in which TheDateCompass operates.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-white">
                Contact
              </h2>

              <p>
                If you have any questions regarding these Terms &
                Conditions, please contact us through our Contact page.
              </p>
            </section>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}