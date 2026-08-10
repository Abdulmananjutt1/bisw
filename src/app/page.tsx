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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIWS Orphanage — Best Orphanage in Lahore | Begum Inayat Welfare Society of Pakistan",
  description:
    "BIWS Orphanage is the leading girls orphanage in Lahore, Pakistan — providing shelter, education, healthcare, and skill training to 90 orphan girls since 2012. Founded by Dr. Amna Amber in Model Town, Lahore.",
  alternates: { canonical: "https://www.beguminayat.com" },
  openGraph: {
    title: "BIWS Orphanage — Best Orphanage in Lahore, Pakistan",
    description:
      "Providing a safe home, quality education, and life skills to 90 orphan girls since 2012. BIWS Orphanage, Model Town, Lahore — founded by Dr. Amna Amber.",
    url: "https://www.beguminayat.com",
  },
};

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
