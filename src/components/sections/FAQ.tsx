"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How can I donate to BIWS?",
    answer:
      "You can donate via bank transfer to our Faysal Bank account or visit the Donate page on our website. We accept Zakat, Sadqa, general donations, and child sponsorships. All contributions are transparently managed and acknowledged.",
  },
  {
    id: 2,
    question: "Can I donate in someone's name?",
    answer:
      "Yes, absolutely. You can donate in the name of a deceased loved one as Sadqa-e-Jaariya or as a gift. Simply mention the name when making the transfer and we will note it in our records.",
  },
  {
    id: 3,
    question: "How do I know my donation is being used properly?",
    answer:
      "BIWS maintains full transparency. We share regular updates, photos, and reports with our donors. You can also visit the campus in person to see how funds are being used for the girls' care and education.",
  },
  {
    id: 4,
    question: "Can I see where my donation is used?",
    answer:
      "Yes. We provide donation breakdowns across food, education, health, and skill training. Donors who sponsor a child receive regular updates on the child's progress and wellbeing.",
  },
  {
    id: 5,
    question: "How much impact can a small donation make?",
    answer:
      "Even a small contribution goes a long way. For example, PKR 5,000 can feed a child for a month, while PKR 2,000 covers basic stationery and school supplies. Every rupee is used with care.",
  },
  {
    id: 6,
    question: "How else can I get involved apart from donating?",
    answer:
      "You can volunteer your time and skills, sponsor a child, plan a campus visit, or help spread awareness about BIWS. Visit our Get Involved page to explore all the ways you can contribute.",
  },
  {
    id: 7,
    question: "Is my Zakat eligible to be given to BIWS?",
    answer:
      "Yes. BIWS cares for orphan girls who qualify as Zakat recipients under Islamic guidelines. You can specify your donation as Zakat and rest assured it will be used accordingly.",
  },
  {
    id: 8,
    question: "Where is the BIWS campus located?",
    answer:
      "Our campus is located at 115 H Model Town, Lahore, Pakistan. You can reach us via phone at 0304 3332497 or email at beguminayatorphanage@gmail.com.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="max-w-[900px]">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            Got Questions?
          </p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Everything you need to know about donating, volunteering,
            visiting, and supporting BIWS.
          </p>
        </div>

        {/* Accordion */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={i !== faqs.length - 1 ? "border-b border-slate-100" : ""}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between gap-6 px-8 py-7 text-left transition-colors duration-150 ${
                    isOpen ? "bg-primary/8" : "bg-slate-50"
                  }`}
                >
                  <span className="text-[17px] font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-primary" : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-primary/10 bg-primary/5 px-8 py-5 text-[15px] leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <p className="mt-8 text-center text-sm text-muted">
          Still have questions?{" "}
          <a
            href="/contact"
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            Contact us directly
          </a>
        </p>

      </Container>
    </section>
  );
}
