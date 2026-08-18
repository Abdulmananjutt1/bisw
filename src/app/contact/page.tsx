import { ContactForm } from "@/app/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BIWS Orphanage Lahore | Begum Inayat Welfare Society",
  description:
    "Contact BIWS Orphanage in Model Town, Lahore, Pakistan. Reach out for donations, volunteering, girls admission, or any inquiry about Begum Inayat Welfare Society.",
  keywords: [
    "contact BIWS orphanage",
    "orphanage Lahore contact",
    "Begum Inayat Welfare Society contact",
    "NGO Lahore contact",
    "donate contact Pakistan",
    "orphanage admission Lahore",
  ],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biwsorphanage.com"}/contact` },
  openGraph: {
    title: "Contact — BIWS Orphanage Lahore | Begum Inayat Welfare Society",
    description:
      "Get in touch with BIWS Orphanage, Model Town Lahore. Inquire about donations, volunteering, or admission for orphan girls in Pakistan.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biwsorphanage.com"}/contact`,
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
