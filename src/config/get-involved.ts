import { siteConfig } from "@/config/site";

export type SupportIcon =
  | "Baby"
  | "ClipboardPenLine"
  | "GraduationCap"
  | "HandHeart"
  | "HeartHandshake";

export type SupportPage = {
  id: string;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  image: string;
  icon: SupportIcon;
  cta: string;
  ctaHref: string;
  secondaryCta: string;
  secondaryHref: string;
  highlights: string[];
  steps: string[];
  details: string[];
};

export const supportPages: SupportPage[] = [
  {
    id: "sponsor",
    slug: "sponsor-a-child",
    title: "Sponsor a Child",
    description:
      "Help cover monthly essentials including food, education, clothing, healthcare, and daily care.",
    eyebrow: "Monthly support",
    lead:
      "Child sponsorship is a steady way to support daily care, education, meals, health needs, and a safer routine for girls at BIWS.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1400&q=85",
    icon: "HeartHandshake",
    cta: "Ask about sponsorship",
    ctaHref: `mailto:${siteConfig.email}?subject=Child Sponsorship Inquiry`,
    secondaryCta: "Donate now",
    secondaryHref: "/donate",
    highlights: [
      "Monthly care and daily essentials",
      "Education support, books, and stationery",
      "Meals, clothing, hygiene, and wellbeing support",
    ],
    steps: [
      "Contact the BIWS team with your sponsorship interest.",
      "Our team explains monthly support options and current needs.",
      "Choose the support amount or category that suits you.",
      "BIWS guides you on donation transfer and confirmation.",
    ],
    details: [
      "Sponsorship support is used for practical needs that keep the campus stable and nurturing.",
      "You can also speak with BIWS if you want to support education, food, healthcare, or general care separately.",
    ],
  },
  {
    id: "adopt",
    slug: "adopt-a-child",
    title: "Adopt a Child",
    description:
      "Connect with BIWS leadership for careful guidance on adoption-related questions and requirements.",
    eyebrow: "Responsible guidance",
    lead:
      "Adoption-related inquiries need careful handling, proper discussion, and guidance from the BIWS team before any next step.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=85",
    icon: "Baby",
    cta: "Discuss adoption guidance",
    ctaHref: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    secondaryCta: "Email BIWS",
    secondaryHref: `mailto:${siteConfig.email}?subject=Adoption Guidance Inquiry`,
    highlights: [
      "Private discussion with BIWS leadership",
      "Careful review of the inquiry",
      "Guidance on responsible next steps",
    ],
    steps: [
      "Call BIWS and request an adoption guidance conversation.",
      "Share your contact details and reason for inquiry.",
      "The team will guide you on the required review process.",
      "Follow only the confirmed steps shared by BIWS staff.",
    ],
    details: [
      "BIWS handles every child-related inquiry with privacy, dignity, and child safety as the priority.",
      "Please do not arrive unannounced for adoption discussions; schedule the conversation first.",
    ],
  },
  {
    id: "adoption-procedure",
    slug: "adoption-procedure",
    title: "Adoption Procedure",
    description:
      "Our team can explain the required checks, documentation, and next steps in a responsible way.",
    eyebrow: "Process guidance",
    lead:
      "The procedure begins with a direct conversation so BIWS can understand the inquiry and explain what information may be needed.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=85",
    icon: "ClipboardPenLine",
    cta: "Call for procedure",
    ctaHref: `tel:${siteConfig.phone2.replace(/\s/g, "")}`,
    secondaryCta: "Send an email",
    secondaryHref: `mailto:${siteConfig.email}?subject=Adoption Procedure Inquiry`,
    highlights: [
      "Initial inquiry review",
      "Basic information and documentation guidance",
      "Scheduled discussion with the relevant team",
    ],
    steps: [
      "Call BIWS and explain that you need procedure guidance.",
      "Share your basic details and preferred contact time.",
      "Wait for the team to confirm the appropriate next step.",
      "Prepare any documents requested by BIWS before a meeting.",
    ],
    details: [
      "This page gives general contact guidance only. BIWS will explain the actual process directly.",
      "Every procedure-related request is handled with care, privacy, and proper review.",
    ],
  },
  {
    id: "volunteer",
    slug: "become-a-volunteer",
    title: "Become a Volunteer",
    description:
      "Support education, activities, mentoring, events, or skill sessions with a coordinated visit plan.",
    eyebrow: "Give your time",
    lead:
      "Volunteers can support BIWS through teaching help, mentoring, activity planning, skill sessions, and event support.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=85",
    icon: "HandHeart",
    cta: "Volunteer with us",
    ctaHref: `mailto:${siteConfig.email}?subject=Volunteer Application`,
    secondaryCta: "Plan a visit",
    secondaryHref: "/get-involved#visit",
    highlights: [
      "Teaching and academic support",
      "Mentoring and activity sessions",
      "Event, skills, and campus support",
    ],
    steps: [
      "Send your name, contact number, and area of interest.",
      "Share your availability and relevant experience.",
      "Wait for BIWS to confirm timing and suitability.",
      "Visit only after your volunteer session is scheduled.",
    ],
    details: [
      "Volunteer work is coordinated around campus routines and child safety.",
      "BIWS may guide you toward the area where your time can be most useful.",
    ],
  },
  {
    id: "admission",
    slug: "admission",
    title: "Admission",
    description:
      "If you know a girl in need, contact our team with basic details so the case can be reviewed.",
    eyebrow: "Case review",
    lead:
      "Admission inquiries are reviewed carefully so the team can understand the child's situation and guide the next step responsibly.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
    icon: "GraduationCap",
    cta: "Request admission help",
    ctaHref: `mailto:${siteConfig.email}?subject=Admission Inquiry`,
    secondaryCta: "Call BIWS",
    secondaryHref: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    highlights: [
      "Initial case information",
      "Team review and follow-up",
      "Guidance on the next step",
    ],
    steps: [
      "Contact BIWS with the child's basic situation and guardian details.",
      "Share accurate information so the team can review the case.",
      "Wait for BIWS to request any additional details.",
      "Follow the next steps confirmed by the BIWS team.",
    ],
    details: [
      "Admission support depends on review, eligibility, capacity, and the child's best interest.",
      "Please contact BIWS before bringing anyone to the campus for admission discussion.",
    ],
  },
];

export function getSupportPageHref(item: Pick<SupportPage, "slug">) {
  return `/get-involved#${item.slug}`;
}
