import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
 

export const metadata = {
  title: "Privacy Policy | TheDateCompass",
  description: "Read TheDateCompass Privacy Policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
     <main className="bg-[#080808] text-white">
  <section className="mx-auto max-w-5xl px-6 py-20">

    {/* Header */}

    <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">

      <div>
        <h1 className="text-5xl font-black">
          Privacy Policy
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
          Introduction
        </h2>

        <p>
          TheDateCompass (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy.
          This Privacy Policy explains how we collect, use, disclose,
          and protect information when you visit our website.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Information We Collect
        </h2>

        <p>
          We may automatically collect technical information including:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>IP Address</li>
          <li>Browser Type</li>
          <li>Operating System</li>
          <li>Device Information</li>
          <li>Pages Visited</li>
          <li>Referral URLs</li>
          <li>Date and Time of Visit</li>
        </ul>

        <p className="mt-4">
          We may also receive information you voluntarily provide when
          contacting us.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Affiliate Relationships
        </h2>

        <p>
          TheDateCompass participates in affiliate marketing programs.
          Some links on this website are affiliate links. If you visit
          a third-party website through these links and complete a
          qualifying action, we may receive a commission at no additional
          cost to you.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Third-Party Websites
        </h2>

        <p>
          We do not own or operate the dating websites, AI companion
          services, or other platforms featured on this website.
        </p>

        <p className="mt-4">
          Registrations, subscriptions, payments, messaging, profile
          creation, and personal information are handled solely by the
          respective third-party providers under their own privacy
          policies.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Cookies
        </h2>

        <p>
          We use cookies and similar technologies to improve website
          functionality, remember user preferences, analyze traffic,
          and measure affiliate referrals.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Analytics & Advertising
        </h2>

        <p>
          We may use Google Analytics, Microsoft Clarity, advertising
          partners, and affiliate networks to better understand visitor
          behavior and improve our services.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Children&apos;s Privacy
        </h2>

        <p>
          TheDateCompass is intended exclusively for adults aged 18 years
          or older. We do not knowingly collect personal information
          from children.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Your Rights
        </h2>

        <p>
          Depending on your country or jurisdiction, you may have the
          right to request access, correction, deletion, or restriction
          of your personal information.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Changes to this Policy
        </h2>

        <p>
          We may update this Privacy Policy from time to time. Any
          changes will be published on this page with an updated
          revision date.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-bold text-white">
          Contact
        </h2>

        <p>
          If you have questions regarding this Privacy Policy, please
          contact us through our Contact page.
        </p>
      </section>

    </div>

  </section>
</main>

      <Footer />  </>
  );
}