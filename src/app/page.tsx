import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { HeroImpactStrip } from "@/components/sections/HeroImpactStrip";
import { FeaturedCauses } from "@/components/sections/FeaturedCauses";
import { GetInvolved } from "@/components/sections/GetInvolved";
import { ProgramsPreview } from "@/components/sections/ProgramsPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { NewsUpdates } from "@/components/sections/NewsUpdates";
import { Testimonials } from "@/components/sections/Testimonials";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { CallToAction } from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <HeroImpactStrip />
      <FeaturedCauses />
      <GetInvolved />
      <ProgramsPreview />
      <GalleryPreview />
      <NewsUpdates />
      <Testimonials />
      <FounderMessage />
      <CallToAction />
    </>
  );
}
