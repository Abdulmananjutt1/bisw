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
  title: "About Us",
  description: `Learn about ${siteConfig.fullName}, founded by Dr. Amna Amber in 2013. BIWS Girls Campus provides shelter, education, and skill training to 90 orphan girls in Lahore.`,
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
