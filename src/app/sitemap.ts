import type { MetadataRoute } from "next";
import { SITE } from "@/lib/product";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", "/progetto", "/fonti", "/riusa", "/menzioni", "/sostieni"];
  return paths.map((path, i) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 1 : 0.7,
  }));
}
