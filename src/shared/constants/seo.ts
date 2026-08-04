import type { Metadata } from "next";

export const SITE_NAME = "Anuprash Subedi";
export const SITE_TITLE = "Anuprash Subedi | Frontend Developer";
export const SITE_DESCRIPTION =
  "Frontend developer portfolio with projects, experience, blog posts, and browser-based tools built with Next.js, React, and TypeScript.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadataBase = new URL(SITE_URL);

type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  pathname,
  keywords = [],
  type = "website",
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: SITE_NAME,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}
