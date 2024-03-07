const WEBSITE_HOST_URL = "https://accyb.vercel.app";
const changeFrequency =
  "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
export default function sitemap() {
  const changeFrequency = "daily";
  const routes = [
    "",
    "/fr/devenirCyber",
    "/fr/discoverTheACCYB",
    "/fr/discoverTheObservatory",
    "/fr/FindOutAtlantic",
    "/fr/news",
    "/fr/seFormer",
    "/fr/sInformer",
  ].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));
  return [...routes];
}
