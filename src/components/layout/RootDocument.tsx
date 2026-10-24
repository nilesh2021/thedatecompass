import Script from "next/script";
import ScrollToTop from "@/components/common/ScrollToTop";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C2QB1MM1F1"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];

      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;

      gtag('js', new Date());

      gtag('config', 'G-C2QB1MM1F1', {
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
      })(window, document, "clarity", "script", "ws74ja7um4");
    `}
        </Script>

        <GoogleAnalyticsTracker />

        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
