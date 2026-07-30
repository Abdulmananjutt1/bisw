import { ContactForm } from "@/app/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Begum Inayat Welfare Society for donations, volunteering, or general inquiries.",
};

export default function ContactPage() {
  return <ContactForm />;
}
