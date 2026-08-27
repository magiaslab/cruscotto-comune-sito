import type { MetadataRoute } from "next";
import { SITE } from "@/lib/product";
import { scuolaSitemapPaths } from "@/lib/scuola";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/progetto",
    "/comuni",
    "/riusa",
    "/guida",
    "/kit-ente",
    "/novita",
    "/fonti",
    "/menzioni",
    "/sostieni",
  ];
  const base = paths.map((path, i) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 1 : 0.7,
  }));
  const scuola = scuolaSitemapPaths().map((v) => ({
    url: `${SITE.url}${v.path}`,
    lastModified: now,
    changeFrequency: v.changeFrequency,
    priority: v.priority,
  }));
  return [...base, ...scuola];
}
