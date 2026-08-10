import {
  GetInvolvedCta,
  GetInvolvedHero,
  GetInvolvedQuickLinks,
  SupportWays,
  VisitGuidelines,
  VisitSection,
} from "@/components/get-involved";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved — Volunteer, Sponsor & Support | BIWS Orphanage Lahore",
  description:
    "Sponsor an orphan child, volunteer, plan a visit, or submit a girls admission request for BIWS Orphanage in Model Town, Lahore, Pakistan.",
  keywords: [
    "volunteer orphanage Pakistan",
    "sponsor orphan child Lahore",
    "visit orphanage Lahore",
    "girls orphanage admission Pakistan",
    "BIWS get involved",
    "support orphan girls Pakistan",
    "charity volunteer Lahore",
  ],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beguminayat.com"}/get-involved` },
  openGraph: {
    title: "Get Involved — Volunteer, Sponsor & Support | BIWS Orphanage Lahore",
    description:
      "Sponsor a child, volunteer at our campus, plan a visit, or support BIWS Orphanage in Lahore, Pakistan.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beguminayat.com"}/get-involved`,
  },
};

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedHero />
      <GetInvolvedQuickLinks />
      <SupportWays />
      <VisitSection />
      <VisitGuidelines />
      <GetInvolvedCta />
    </>
  );
}
