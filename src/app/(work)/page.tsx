import type { Metadata } from "next";
import { HeroSection } from "./_components/HeroSection";
import { MyWorksSection } from "./_components/MyWorksSection";
import { createPageMetadata } from "@/shared/constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Frontend Developer Portfolio",
  description:
    "A portfolio homepage for Anuprash Subedi featuring featured work, project highlights, and a clear overview of frontend development experience.",
  pathname: "/",
  keywords: [
    "frontend developer portfolio",
    "React developer",
    "Next.js portfolio",
    "TypeScript developer",
  ],
});

export default function WorkPage() {
  return (
    <div>
      <HeroSection />
      <MyWorksSection />
    </div>
  );
}
