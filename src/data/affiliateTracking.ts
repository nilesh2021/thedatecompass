/**
 * Shared CrakRevenue / TrafficStars tracking tokens used across offer maps.
 * Update here when your AM changes sub IDs or canonical tracker hosts.
 */

export const AFFILIATE_SUB5 = "SF_006OG000004lmDN";

/** Canonical outbound URLs from affiliate dashboard (publisher 358917). */
export const CHEEKYCRUSH_TRACKING_URL = `https://t.datsk5.com/358917/10377/0?po=6456&aff_sub5=${AFFILIATE_SUB5}`;
export const DIRTYDATING_TRACKING_URL = `https://t.datsk5.com/358917/5421?aff_sub5=${AFFILIATE_SUB5}`;
export const FREMDGEHEN69_TRACKING_URL = `https://t.datsk5.com/358917/5282/0?po=6456&aff_sub5=${AFFILIATE_SUB5}`;
export const FUCKFINDER_TRACKING_URL = `https://t.datsk5.com/358917/7346?aff_sub5=${AFFILIATE_SUB5}`;
export const GAYBLOOM_TRACKING_URL = `https://t.datsk5.com/358917/10378/0?po=6456&aff_sub5=${AFFILIATE_SUB5}`;
export const MANFINDER_TRACKING_URL = `https://t.datsk5.com/358917/6488?aff_sub5=${AFFILIATE_SUB5}`;
export const MILFFINDER_TRACKING_URL = `https://t.datsk5.com/358917/4999?aff_sub5=${AFFILIATE_SUB5}`;
export const SINGLEFLIRT_TRACKING_URL = `https://t.datsk5.com/358917/5528?aff_sub5=${AFFILIATE_SUB5}`;
export const NAUGHTYCHARM_TRACKING_URL = `https://t.datsk5.com/358917/10376/0?po=6456&aff_sub5=${AFFILIATE_SUB5}`;
export const FETISHPARTNER_TRACKING_URL = `https://t.datsk5.com/358917/5055?aff_sub5=${AFFILIATE_SUB5}`;
export const SINPARTY_TRACKING_URL = `https://t.camsk5.com/358917/10525/0?po=6533&aff_sub5=${AFFILIATE_SUB5}`;
export const GONOUGHTY_TRACKING_URL = `https://t.datsk5.com/358917/8570/0?po=6456&aff_sub5=${AFFILIATE_SUB5}`;
export const REAL_SEX_CLUB_TRACKING_URL = `https://t.datsk5.com/358917/7964?aff_sub5=${AFFILIATE_SUB5}`;
export const TRANS_DATE_TRACKING_URL = `https://t.datsk5.com/358917/6497?aff_sub5=${AFFILIATE_SUB5}`;
export const GRANNY_HUNTER_TRACKING_URL = `https://t.datsk5.com/358917/7570?aff_sub5=${AFFILIATE_SUB5}`;

export type CrakTrackerHost = "aslr1" | "datsk3" | "datsk5" | "bbwafx" | "camsk5";

/**
 * Build a standard 358917 affiliate URL with aff_sub5 set.
 * @param offerSegment e.g. `7964` or `10377/0`
 */
export function crakAffiliateUrl(
  host: CrakTrackerHost,
  offerSegment: string,
  extra?: { po?: string },
): string {
  const url = new URL(`https://t.${host}.com/358917/${offerSegment}`);
  url.searchParams.set("aff_sub5", AFFILIATE_SUB5);
  if (extra?.po) {
    url.searchParams.set("po", extra.po);
  }
  return url.toString();
}