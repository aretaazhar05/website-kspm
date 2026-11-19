const fallbackUrl = "https://kspmunipi.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  fallbackUrl
).replace(/\/+$/, "");
