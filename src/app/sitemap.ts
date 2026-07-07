import { MetadataRoute } from "next";
import data from "@/lib/cloned-pages.json";

const BASE_URL = "https://demolandingengkodoggames.z48.web.core.windows.net";
const LAST_MOD = new Date("2026-07-02");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; slug: string }[] = data.pages;

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: LAST_MOD,
    changeFrequency: page.path === "/" ? "daily" : "weekly",
    priority: page.path === "/" ? 1.0 : 0.7,
  }));
}
