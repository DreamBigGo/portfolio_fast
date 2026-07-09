import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { projectIds } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const staticPages = [
  "",
  "/experiences",
  "/etudes",
  "/projets",
  "/hobbies",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) => [
    ...staticPages.map((page) => ({
      url: `${siteUrl}/${lang}${page}/`,
    })),
    ...projectIds.map((id) => ({
      url: `${siteUrl}/${lang}/projets/${id}/`,
    })),
  ]);
}
