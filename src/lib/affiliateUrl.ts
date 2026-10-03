const CLICK_ID_STORAGE_KEY = "tdc_click_id";
export const CLICK_ID_COOKIE = "tdc_click_id";
const CLICK_ID_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
const GO_URL_ORIGIN = "https://www.thedatecompass.com";

function trimClickId(clickId?: string | null): string | null {
  const trimmed = clickId?.trim();
  return trimmed ? trimmed : null;
}

function persistClickId(value: string): void {
  try {
    sessionStorage.setItem(CLICK_ID_STORAGE_KEY, value);
  } catch {
    // Private mode / storage blocked — cookie + current URL still work.
  }

  document.cookie = `${CLICK_ID_COOKIE}=${encodeURIComponent(value)}; Path=/; Max-Age=${CLICK_ID_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function readClickIdFromSearch(search: string): string | null {
  return trimClickId(new URLSearchParams(search).get("click_id"));
}

export function readClickIdFromCookieHeader(
  cookieHeader: string | null | undefined
): string | null {
  if (!cookieHeader) return null;

  for (const part of cookieHeader.split(";")) {
    const [rawKey, ...rest] = part.trim().split("=");
    if (rawKey !== CLICK_ID_COOKIE) continue;

    try {
      return trimClickId(decodeURIComponent(rest.join("=")));
    } catch {
      return trimClickId(rest.join("="));
    }
  }

  return null;
}

export function readClickIdFromRequest(request: Request): string | null {
  const fromQuery = readClickIdFromSearch(new URL(request.url).search);
  if (fromQuery) return fromQuery;
  return readClickIdFromCookieHeader(request.headers.get("cookie"));
}

export function captureClickId(): void {
  if (typeof window === "undefined") return;

  const fromUrl = readClickIdFromSearch(window.location.search);
  if (fromUrl) persistClickId(fromUrl);
}

export function getClickId(): string | null {
  if (typeof window === "undefined") return null;

  const fromUrl = readClickIdFromSearch(window.location.search);
  if (fromUrl) {
    persistClickId(fromUrl);
    return fromUrl;
  }

  try {
    const stored = trimClickId(sessionStorage.getItem(CLICK_ID_STORAGE_KEY));
    if (stored) return stored;
  } catch {
    // Ignore blocked storage.
  }

  return readClickIdFromCookieHeader(document.cookie);
}

/**
 * Attach a TrafficStars click_id to an affiliate destination as aff_sub.
 * Existing query params (aff_sub5, po, existing aff_sub) are left intact.
 * Internal /go/ slugs receive click_id so the redirect route can map it.
 */
export function buildTrackedAffiliateUrl(
  baseUrl: string,
  clickId?: string | null
): string {
  const trimmed = trimClickId(clickId);
  if (!trimmed || !baseUrl || baseUrl === "#") return baseUrl;

  if (baseUrl.startsWith("/go/")) {
    const url = new URL(baseUrl, GO_URL_ORIGIN);
    if (!url.searchParams.has("click_id")) {
      url.searchParams.set("click_id", trimmed);
    }
    return `${url.pathname}${url.search}`;
  }

  try {
    const url = new URL(baseUrl);
    if (!url.searchParams.has("aff_sub")) {
      url.searchParams.set("aff_sub", trimmed);
    }
    return url.toString();
  } catch {
    return baseUrl;
  }
}
