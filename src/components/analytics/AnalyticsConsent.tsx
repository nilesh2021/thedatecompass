"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "tdc_analytics_consent";
const GA_ID = "G-C2QB1MM1F1";
const CLARITY_ID = "ws74ja7um4";

type Consent = "accepted" | "rejected";

function readStoredConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    // Storage can be blocked. The banner stays until a choice is stored.
  }
  return null;
}

function storeConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // The in-memory choice still applies for this page view.
  }

  document.cookie = `${CONSENT_KEY}=${value}; Max-Age=15552000; Path=/; SameSite=Lax`;
}

function sendPageView() {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
  });
}

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readStoredConsent());
    setReady(true);
  }, []);

  const choose = (value: Consent) => {
    storeConsent(value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive" onLoad={sendPageView}>
            {`
      window.dataLayer = window.dataLayer || [];

      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;

      gtag('js', new Date());

      gtag('config', '${GA_ID}', {
        send_page_view: false,
      });
    `}
          </Script>
          <Script id="clarity" strategy="afterInteractive">
            {`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_ID}");
    `}
          </Script>
        </>
      ) : null}

      {ready && consent === null ? (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/10 bg-[#0c1230]/95 px-5 py-4 text-white shadow-[0_-12px_40px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-relaxed text-white/80">
              Google Analytics and Microsoft Clarity stay off until you accept.
              They measure how this site is used. Read the{" "}
              <Link href="/cookie-policy" className="font-semibold text-[#ff8ab0] underline-offset-2 hover:underline">
                cookie policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-full bg-[#ff3d6e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ff5d86]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
