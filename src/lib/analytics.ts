export function trackAffiliateClick(
    offerName: string,
    placement: string
  ) {
    if (typeof window === "undefined") return;
  
    const gtag = (
      window as Window & {
        gtag?: (
          command: string,
          eventName: string,
          params?: Record<string, string>
        ) => void;
      }
    ).gtag;
  
    if (typeof gtag === "function") {
      gtag("event", "affiliate_click", {
        offer_name: offerName,
        placement,
      });
    }
  }