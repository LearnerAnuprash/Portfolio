import { HeroSection } from "./_components/HeroSection";
import { ExperienceSection } from "./_components/ExperienceSection";
import { PhilosophySection } from "./_components/PhilosophySection";
import { BackgroundSection } from "./_components/BackgroundSection";
import { ImageGallery } from "./_components/ImageGallery";

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
