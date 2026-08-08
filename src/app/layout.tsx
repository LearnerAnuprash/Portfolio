import { Footer } from "@/shared/components/Footer";
import { Navbar } from "../shared/components/Navbar";
import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  metadataBase,
} from "@/shared/constants/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: SITE_TITLE,
    template: "%s | Anuprash Subedi",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Anuprash Subedi Portfolio",
  authors: [{ name: "Anuprash Subedi" }],
  creator: "Anuprash Subedi",
  publisher: "Anuprash Subedi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anuprash Subedi",
  jobTitle: "Frontend Developer",
  url: SITE_URL,
  email: "info.anuprash@gmail.com",
  telephone: "+977-9745867377",
  sameAs: [
    "https://github.com/LearnerAnuprash",
    "https://linkedin.com/in/Anuprash",
    "https://x.com/Anuprash_subedi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col pt-5 font-display bg-gradient">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
