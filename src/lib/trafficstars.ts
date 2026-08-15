export function getTrafficStarsClickId(): string | null {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const clickId = params.get("ts_click_id");

  if (clickId) {
    sessionStorage.setItem("tdc_ts_click_id", clickId);
    return clickId;
  }

  return sessionStorage.getItem("tdc_ts_click_id");
}

export function getTrackedAffiliateUrl(url: string): string {
  if (typeof window === "undefined") return url;

  const clickId = getTrafficStarsClickId();

  if (!clickId) return url;

  const affiliateUrl = new URL(url);

  affiliateUrl.searchParams.set("aff_sub5", clickId);

  return affiliateUrl.toString();
}