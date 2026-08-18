"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, Send, LoaderCircle, CheckCircle2 } from "lucide-react";
import { useState, useRef, type FormEvent } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Could not send message.");
      formRef.current?.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[#f5f6f8] py-16 sm:py-20">
      <Container className="max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            Get in Touch
          </p>
          <h2 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Whether you want to donate, volunteer, visit, or simply learn more —
            our team is here to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left — contact info */}
          <div className="flex flex-col gap-4">

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Call Us</p>
                <p className="mt-0.5 text-base font-semibold text-foreground">{siteConfig.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Email Us</p>
                <p className="mt-0.5 text-base font-semibold text-foreground">{siteConfig.email}</p>
                <p className="text-sm text-muted">We reply within 24–48 hours</p>
              </div>
            </a>

            <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Visit Us</p>
                <p className="mt-0.5 text-base font-semibold text-foreground">{siteConfig.addressShort}</p>
                <p className="text-sm text-muted">{siteConfig.address}</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-sm text-muted">Our team will get back to you within 24–48 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">Send a Message</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                    <input
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    name="subject"
                    required
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <><LoaderCircle className="h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="h-4 w-4" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
