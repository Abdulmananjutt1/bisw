"use client";

import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import {
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Mail,
  LoaderCircle,
  MapPin,
  Paperclip,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

const contactReasons = [
  "Donation Inquiry",
  "Child Sponsorship",
  "Volunteer Application",
  "Plan a Visit",
  "Girls Admission",
  "General Query",
  "Other",
];

const campusAddress =
  "Begum Inayat Welfare Society of Pakistan Orphanage, Jamia Masjid Qadria Tower's street Main Bazar Awan Market, Lahore - Kasur Rd, Awan Market, Lahore, Pakistan";

const googleMapsUrl =
  "https://www.google.com/maps/dir//Begum+Inayat+Welfare+Society+of+Pakistan+Orphanage,+Jamia+Masjid+Qadria+Tower's+street+Main+Bazar+Awan+Market,+Lahore+%E2%80%93+Kasur+Rd,+Awan+Market,+Lahore,+Pakistan/@31.5290249,74.3264755,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39190424b61b131d:0x3434927ea7941df5!2m2!1d74.3615366!2d31.4319551?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D";

const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(campusAddress)}&z=16&output=embed`;

const contactDetails: { title: string; content: string; href: string; icon: LucideIcon }[] = [
  { title: "Call us", content: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, icon: Phone },
  { title: "Email us", content: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { title: "Visit us", content: "Awan Market, Lahore", href: googleMapsUrl, icon: MapPin },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedReason, setSelectedReason] = useState(contactReasons[0]);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "We could not send your message. Please try again.");
      }

      formRef.current?.reset();
      setSelectedReason(contactReasons[0]);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative isolate flex min-h-[430px] overflow-hidden bg-[#004370] py-12 sm:h-[500px] sm:min-h-0 sm:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=88')", backgroundPosition: "right center" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#003357]/55" />
        <div className="absolute inset-0 opacity-15 pattern-grid" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border-[28px] border-white/5" />
        <Container className="relative flex h-full items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-light backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              We&apos;re here to help
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let&apos;s start a meaningful <span className="text-secondary-light">conversation.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Whether you want to support a child, volunteer your time, or learn more about BIWS Girls Campus, our team will be pleased to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary-light" /> Safe & confidential inquiry</span>
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary-light" /> Response within 24–48 hours</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-[#fbfdfb] py-14 sm:py-20">
        <Container>
          <div className="relative z-10 -mt-24 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {contactDetails.map(({ title, content, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target={title === "Visit us" ? "_blank" : undefined}
                rel={title === "Visit us" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white p-5 shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted">{title}</span>
                  <span className="mt-1 block truncate text-sm font-semibold text-foreground">{content}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <aside className="lg:pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Connect with BIWS</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Every message can make a difference.</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Choose the way that feels most convenient. For visits and admissions, please share a few details so our team can guide you properly.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
                  <HeartHandshake className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-bold text-foreground">Want to support our mission?</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">Your contribution helps provide care, education and opportunity for girls in our home.</p>
                  <a href="/donate" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-primary-dark">
                    Explore donation options <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex items-start gap-3 px-2 py-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm leading-relaxed text-muted"><span className="font-semibold text-foreground">Campus address:</span><br />{campusAddress}</p>
                </div>
              </div>
            </aside>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(6,78,59,0.35)] sm:p-9">
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-secondary/10" />
              <div className="relative z-10">
                {submitted ? (
                  <div className="py-12 text-center sm:py-16">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">Message received</p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">Thank you for reaching out.</h3>
                    <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">Our team will review your message and get back to you within 24–48 hours.</p>
                    <Button className="mt-7" variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    encType="multipart/form-data"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Send a message</p>
                      <h3 className="mt-2 text-2xl font-bold text-foreground">How can we help?</h3>
                      <p className="mt-1 text-sm text-muted">Complete the form below and our team will respond soon.</p>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input label="Full Name" name="name" required placeholder="Your full name" />
                      <Input label="Email Address" name="email" type="email" required placeholder="you@example.com" />
                    </div>
                    <Input label="Phone Number" name="phone" type="tel" placeholder="+92 300 0000000 (optional)" />
                    <fieldset>
                      <legend className="mb-2.5 text-sm font-medium text-foreground">I&apos;m contacting about</legend>
                      <div className="flex flex-wrap gap-2">
                        {contactReasons.map((reason) => {
                          const reasonId = `contact-reason-${reason.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

                          return (
                            <label key={reason} htmlFor={reasonId} className="cursor-pointer">
                              <input
                                id={reasonId}
                                type="radio"
                                name="reason"
                                value={reason}
                                checked={selectedReason === reason}
                                onChange={() => setSelectedReason(reason)}
                                required
                                className="peer sr-only"
                              />
                              <span className="inline-block rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-muted transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white hover:border-primary/50 hover:text-foreground">{reason}</span>
                            </label>
                          );
                        })}
                      </div>
                      {selectedReason === "Other" && (
                        <div className="mt-3">
                          <Input
                            label="Please specify"
                            name="otherReason"
                            required
                            placeholder="Tell us what you are contacting about"
                          />
                        </div>
                      )}
                    </fieldset>
                    <Input label="Subject" name="subject" required placeholder="How can we help you?" />
                    <Textarea label="Message" name="message" required placeholder="Tell us a little more about your inquiry..." className="min-h-[140px]" />
                    <div>
                      <label
                        htmlFor="attachments"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Attach files
                      </label>
                      <div className="rounded-2xl border border-dashed border-emerald-200 bg-[#fbfdfb] p-4">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Paperclip className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <input
                              id="attachments"
                              name="attachments"
                              type="file"
                              multiple
                              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
                              className="block w-full text-sm text-muted file:mr-4 file:rounded-xl file:border-0 file:bg-primary file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-dark"
                            />
                            <p className="mt-2 text-xs leading-relaxed text-muted">
                              Images, PDF, Word, Excel, and text files are supported. Up to 3 files, 8MB each.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {submitError && (
                      <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <p>{submitError}</p>
                      </div>
                    )}
                    <Button type="submit" disabled={isSubmitting} className="w-full justify-center" size="lg">
                      {isSubmitting ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Sending message...</> : <>Send message <Send className="h-4 w-4" /></>}
                    </Button>
                    <p className="text-center text-xs leading-relaxed text-muted">By sending this form, you agree that BIWS may contact you about your inquiry.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="rounded-[1.5rem] border border-emerald-100 bg-[#fbfdfb] p-6 shadow-[0_18px_50px_-35px_rgba(6,78,59,0.35)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Campus details
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                BIWS Orphanage, Awan Market
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Please call before visiting so our team can guide you with the
                correct timing and directions.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      Location
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                      {campusAddress}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                      Primary number
                    </span>
                    <span className="mt-1 block text-sm font-bold text-foreground">
                      {siteConfig.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${siteConfig.phone2.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm transition-colors hover:text-primary"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted">
                      Alternate number
                    </span>
                    <span className="mt-1 block text-sm font-bold text-foreground">
                      {siteConfig.phone2}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  Call now
                  <Phone className="h-4 w-4" />
                </Button>
                <Button
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="border-primary/30 bg-white hover:border-primary"
                >
                  Directions
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-emerald-200/70 bg-white shadow-[0_18px_50px_-35px_rgba(6,78,59,0.35)]">
              <iframe
                title="Google Map location for Begum Inayat Welfare Society of Pakistan Orphanage"
                src={googleMapsEmbedUrl}
                className="h-[360px] w-full lg:h-full lg:min-h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
