const ISO_COUNTRY = /^[a-z]{2}$/;

/** Two-letter `x-vercel-ip-country`, or `global` when the header is missing or invalid. */
export function readVisitorCountry(headerValue: string | null): string {
  const code = headerValue?.trim().toLowerCase() ?? "";
  return ISO_COUNTRY.test(code) ? code : "global";
}
