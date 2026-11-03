import ScrollToTop from "@/components/common/ScrollToTop";
import AnalyticsConsent from "@/components/analytics/AnalyticsConsent";
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker";
import { siteFontClassName } from "@/lib/siteFonts";

export default function RootDocument({
  lang,
  children,
}: {
  lang: "en" | "de";
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={siteFontClassName}>
      <body className="font-sans">
        <AnalyticsConsent />
        <GoogleAnalyticsTracker />

        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
