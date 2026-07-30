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
  title: "Get Involved",
  description:
    "Sponsor a child, volunteer, plan a visit, ask about admission, or support BIWS Girls Campus in Lahore.",
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
