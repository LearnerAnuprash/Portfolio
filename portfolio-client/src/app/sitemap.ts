import type { MetadataRoute } from "next";
import { SITE_URL } from "@/shared/constants/seo";

const routes = [
  "/",
  "/about",
  "/blog",
  "/blog/react-hooks-deep-dive",
  "/free-tools",
  "/contact-me",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency:
      route === "/blog/react-hooks-deep-dive" ? "monthly" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
