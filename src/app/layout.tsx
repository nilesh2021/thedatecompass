import Script from "next/script";
import "./globals.css";
import ScrollToTop from "@/components/common/ScrollToTop";
import type { Metadata, Viewport } from "next";
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker";
import { Figtree, Instrument_Serif, Playfair_Display, Syne } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thedatecompass.com"),

  title: {
    default: "TheDateCompass",
    template: "%s | TheDateCompass",
  },

  description:
    "Compare dating sites and AI girlfriend platforms worldwide.",

  other: {
    "mitgo-verification": "f5b6679f-e350-42f0-9599-d2f5070142a2",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff3d6e",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${playfair.variable} ${syne.variable} ${instrumentSerif.variable}`}
    >
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

  {/* Microsoft Clarity */}

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
