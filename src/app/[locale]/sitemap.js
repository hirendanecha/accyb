const WEBSITE_HOST_URL = "https://accyb.vercel.app";
const changeFrequency =
  "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
export default function sitemap() {
  const changeFrequency = "daily";
  const routes = [  
    "",
    "/devenirCyber",
    "/discoverTheACCYB",
    "/discoverTheObservatory",
    "/FindOutAtlantic",
    "/news",
    "/seFormer",
    "/sInformer",
  ].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));
  return [...routes];
}
