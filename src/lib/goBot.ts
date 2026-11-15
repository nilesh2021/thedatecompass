/** Preview bots and crawlers that should not count as affiliate clicks. */
const BOT_UA =
  /googlebot|bingbot|facebookexternalhit|twitterbot|whatsapp|slackbot|\bbot\b|crawler|spider/i;

export function isGoBotUserAgent(userAgent: string | null | undefined): boolean {
  const ua = userAgent?.trim() ?? "";
  return ua.length > 0 && BOT_UA.test(ua);
}
