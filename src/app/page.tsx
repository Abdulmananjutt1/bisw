import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { ImpactBanner } from "@/components/sections/ImpactBanner";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Lazy load components with animations
const WelfareImpact = dynamic(() => import("@/components/sections/WelfareImpact").then(mod => ({ default: mod.WelfareImpact })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const FeaturedCauses = dynamic(() => import("@/components/sections/FeaturedCauses").then(mod => ({ default: mod.FeaturedCauses })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const GalleryPreview = dynamic(() => import("@/components/sections/GalleryPreview").then(mod => ({ default: mod.GalleryPreview })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const CampusHighlight = dynamic(() => import("@/components/sections/CampusHighlight").then(mod => ({ default: mod.CampusHighlight })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const NewsUpdates = dynamic(() => import("@/components/sections/NewsUpdates").then(mod => ({ default: mod.NewsUpdates })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const FounderMessage = dynamic(() => import("@/components/sections/FounderMessage").then(mod => ({ default: mod.FounderMessage })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

export const metadata: Metadata = {
  title: "BIWS Orphanage — Best Orphanage in Lahore | Begum Inayat Welfare Society of Pakistan",
  description:
    "BIWS Orphanage is the leading girls orphanage in Lahore, Pakistan — providing shelter, education, healthcare, and skill training to 90 orphan girls since 2012. Founded by Dr. Amna Amber in Model Town, Lahore.",
  alternates: { canonical: "https://www.biwsorphanage.com" },
  openGraph: {
    title: "BIWS Orphanage — Best Orphanage in Lahore, Pakistan",
    description:
      "Providing a safe home, quality education, and life skills to 90 orphan girls since 2012. BIWS Orphanage, Model Town, Lahore — founded by Dr. Amna Amber.",
    url: "https://www.biwsorphanage.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhatWeOffer />
      <ImpactBanner />
      <WelfareImpact />
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
