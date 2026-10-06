import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.8 },
  ...site.services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
  })),
  { path: "/work", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/cookies", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-06");

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
