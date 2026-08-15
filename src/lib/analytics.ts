const UTM_STORAGE_KEY = "tdc_campaign_utms";
const TS_CLICK_ID_KEY = "tdc_ts_click_id";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];
type UtmParams = Partial<Record<UtmKey, string>>;
function captureTrafficStarsClickId(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const clickId = params.get("ts_click_id")?.trim();

  if (!clickId) return;

  try {
    sessionStorage.setItem(TS_CLICK_ID_KEY, clickId);
  } catch {
    // Storage unavailable
  }
}


function readUtmsFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search);
  const utms: UtmParams = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim();
    if (value) {
      utms[key] = value;
    }
  }

  return utms;
}

function hasAnyUtm(utms: UtmParams): boolean {
  return UTM_KEYS.some((key) => Boolean(utms[key]));
}

/**
 * Persist landing-page UTMs for the browser tab so they survive
 * client-side navigations that drop the query string.
 */
export function captureCampaignUtms(): void {
  if (typeof window === "undefined") return;

  const fromUrl = readUtmsFromSearch(window.location.search);
  if (!hasAnyUtm(fromUrl)) return;

  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
  } catch {
    // Private mode / storage blocked — URL params still work on landing page.
  }
}

export function getCampaignUtms(): UtmParams {
  if (typeof window === "undefined") return {};

  const fromUrl = readUtmsFromSearch(window.location.search);
  if (hasAnyUtm(fromUrl)) {
    return fromUrl;
  }

  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};

    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};

    const utms: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = (parsed as Record<string, unknown>)[key];
      if (typeof value === "string" && value.trim()) {
        utms[key] = value.trim();
      }
    }
    return utms;
  } catch {
    return {};
  }
}

export function trackAffiliateClick(
  offerName: string,
  placement: string,
  country?: string
) {
  if (typeof window === "undefined") return;

  // Prefer fresh URL UTMs if still present (e.g. click before SPA navigation).
  captureCampaignUtms();

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
    const params: Record<string, string> = {
      offer_name: offerName,
      placement,
    };

    if (country) {
      params.country = country;
    }

    const utms = getCampaignUtms();
    for (const key of UTM_KEYS) {
      const value = utms[key];
      if (value) {
        params[key] = value;
      }
    }

    gtag("event", "affiliate_click", params);
  }
}

export function getTrafficStarsClickId(): string {
  if (typeof window === "undefined") return "";

  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("ts_click_id")?.trim();

  if (fromUrl) {
    return fromUrl;
  }

  try {
    return sessionStorage.getItem(TS_CLICK_ID_KEY) || "";
  } catch {
    return "";
  }
}
