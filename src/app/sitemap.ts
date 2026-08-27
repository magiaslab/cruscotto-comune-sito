import type { MetadataRoute } from "next";
import { SITE } from "@/lib/product";

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
  return paths.map((path, i) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 1 : 0.7,
  }));
}
