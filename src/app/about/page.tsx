import {
  AboutCta,
  AboutFounderMessage,
  AboutHero,
  AboutJourney,
  AboutPurpose,
  AboutStory,
  AboutTeam,
  AboutVicePresidentMessage,
} from "@/components/about";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BIWS Orphanage — Begum Inayat Welfare Society of Pakistan",
  description: `Learn about ${siteConfig.fullName} (BIWS Orphanage), founded by Dr. Amna Amber on 1 February 2012. Located in Model Town, Lahore — providing shelter, education, and skill training to orphan girls in Pakistan.`,
  keywords: [
    "about BIWS orphanage",
    "Begum Inayat Welfare Society history",
    "Dr Amna Amber founder orphanage",
    "girls orphanage Lahore history",
    "BIWS Model Town Lahore",
    "NGO Lahore about",
    "welfare society Pakistan about",
  ],
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About BIWS Orphanage — Begum Inayat Welfare Society of Pakistan",
    description: `${siteConfig.fullName} — founded 2012 by Dr. Amna Amber. Serving orphan girls in Lahore with care, education & skill development.`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPurpose />
      <AboutJourney />
      <AboutTeam />
      <AboutFounderMessage />
      <AboutVicePresidentMessage />
      <AboutCta />
    </>
  );
}
