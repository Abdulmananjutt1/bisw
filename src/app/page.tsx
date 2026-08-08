import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { ImpactBanner } from "@/components/sections/ImpactBanner";
import { FeaturedCauses } from "@/components/sections/FeaturedCauses";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { CampusHighlight } from "@/components/sections/CampusHighlight";
import { NewsUpdates } from "@/components/sections/NewsUpdates";
import { Testimonials } from "@/components/sections/Testimonials";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhatWeOffer />
      <ImpactBanner />
      <FeaturedCauses />
      <GalleryPreview />
      <CampusHighlight />
      <NewsUpdates />
      <FounderMessage />
      <Testimonials />
      <ContactSection />
      <FAQ />
    </>
  );
}
