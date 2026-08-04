import type { Metadata } from "next";
import { HeroSection } from "./_components/HeroSection";
import { ExperienceSection } from "./_components/ExperienceSection";
import { PhilosophySection } from "./_components/PhilosophySection";
import { BackgroundSection } from "./_components/BackgroundSection";
import { ImageGallery } from "./_components/ImageGallery";
import { createPageMetadata } from "@/shared/constants/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Me",
  description:
    "Learn more about Anuprash Subedi's frontend background, engineering approach, experience, and the habits behind the portfolio.",
  pathname: "/about",
  keywords: [
    "about Anuprash Subedi",
    "frontend engineer",
    "React",
    "TypeScript",
  ],
});

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <PhilosophySection />
      <BackgroundSection />
      <ImageGallery />
    </div>
  );
}
