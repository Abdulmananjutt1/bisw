import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CountUpText } from "@/components/ui/CountUpText";
import { DonationCauseSelector } from "@/components/donate/DonationCauseSelector";
import { causes, siteConfig } from "@/config/site";
import type { Metadata } from "next";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  FileText,
  GraduationCap,
  HandHeart,
  Heart,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate — Support Orphan Girls in Lahore | BIWS Orphanage Pakistan",
  description:
    "Donate to BIWS Orphanage in Lahore, Pakistan. Give Zakat, sponsor an orphan child, support girls education, or make a general donation. 90 girls need your help today.",
  keywords: [
    "donate to orphanage Pakistan",
    "donate orphan girls Lahore",
    "zakat orphanage Pakistan",
    "sponsor orphan child Pakistan",
    "child sponsorship Pakistan",
    "orphan donation Lahore",
    "charity donation Pakistan",
    "BIWS donate",
    "sadaqah orphans Pakistan",
    "how to donate orphanage Pakistan",
  ],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biwsorphanage.com"}/donate` },
  openGraph: {
    title: "Donate — Support Orphan Girls in Lahore | BIWS Orphanage Pakistan",
    description:
      "Support 90 orphan girls in Lahore. Give Zakat, sponsor a child, or donate to BIWS Orphanage — your gift changes lives in Pakistan.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biwsorphanage.com"}/donate`,
  },
};

const impactItems = [
  { value: 90, suffix: "", label: "Girls in our care", icon: Heart },
  { value: 14, suffix: "+", label: "Years of service", icon: Sparkles },
  { value: 5, suffix: "", label: "Skills programs", icon: GraduationCap },
  { value: 100, suffix: "%", label: "Care with dignity", icon: ShieldCheck },
];

const givingSteps = [
  { number: "01", title: "Choose your cause", text: "Support education, daily care, health, skills, or a child sponsorship.", icon: HandHeart },
  { number: "02", title: "Send your donation", text: "Use bank transfer or contact us for mobile wallet details.", icon: Banknote },
  { number: "03", title: "Share confirmation", text: "Send us your transaction details so we can acknowledge your gift.", icon: CheckCircle2 },
];

export default function DonatePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[430px] overflow-hidden bg-[#004370] py-12 sm:h-[500px] sm:min-h-0 sm:py-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-[#003357]/55" />
        <Container className="relative flex h-full items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-light backdrop-blur-sm">
              <Heart className="h-3.5 w-3.5" /> Your kindness creates a future
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">Give hope. <span className="text-secondary-light">Grow futures.</span></h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">Your support gives orphan girls a safe home, quality education, healthcare, and the confidence to build an independent tomorrow.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#donation-options" size="lg" className="bg-secondary hover:bg-secondary-dark shadow-lg shadow-secondary/20">Choose a cause <ArrowRight className="h-4 w-4" /></Button>
              <Button href="#how-to-donate" size="lg" variant="outline" className="border-white/30 text-white hover:border-white hover:bg-white hover:text-primary-darker">How to donate</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-[#fbfdfb] py-12 sm:py-16">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {impactItems.map(({ value, suffix, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white p-5 shadow-lg shadow-emerald-950/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <div><p className="text-2xl font-bold text-foreground"><CountUpText value={value} suffix={suffix} /></p><p className="text-xs font-medium text-muted">{label}</p></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="donation-options" className="scroll-mt-20 bg-white py-16 sm:py-24">
        <Container>
          <DonationCauseSelector causesList={causes} />
        </Container>
      </section>

      <section className="bg-warm-bg py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Child sponsorship</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Be the steady support behind one girl&apos;s journey.</h2>
              <p className="mt-4 leading-relaxed text-muted">A monthly sponsorship helps provide complete care—from nutritious meals and school supplies to healthcare and a loving, secure environment.</p>
              <div className="mt-7 inline-flex items-baseline gap-2 rounded-2xl bg-primary px-5 py-3 text-white shadow-lg shadow-primary/20"><span className="text-2xl font-bold"><CountUpText value={5000} prefix="PKR " /></span><span className="text-sm text-white/75">per month</span></div>
              <div className="mt-7 flex flex-wrap gap-3"><Button href={`mailto:${siteConfig.email}?subject=Child Sponsorship`} size="lg">Sponsor a child <Heart className="h-4 w-4" /></Button><Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} variant="outline" size="lg">Talk to our team</Button></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Safe accommodation & daily meals", "School fees, books & uniforms", "Healthcare & emotional wellbeing", "Skills training for independence"].map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-emerald-100 bg-white p-5">
                  <CheckCircle2 className="h-5 w-5 text-primary" /><p className="mt-3 font-semibold text-foreground">{benefit}</p><p className="mt-1 text-sm text-muted">Practical care and opportunity, delivered with dignity.</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="how-to-donate" className="scroll-mt-20 bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center"><p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Simple & secure</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How your gift reaches BIWS.</h2></div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {givingSteps.map(({ number, title, text, icon: Icon }) => (
              <div key={number} className="relative min-h-[230px] overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 pr-24 shadow-sm shadow-emerald-950/5"><span className="pointer-events-none absolute right-4 top-4 rounded-2xl bg-emerald-50 px-3 py-1 text-5xl font-black leading-none text-primary/35">{number}</span><div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="relative mt-5 text-lg font-bold text-foreground">{title}</h3><p className="relative mt-2 text-sm leading-relaxed text-muted">{text}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#004370] py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">Donate directly</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Bank transfer details</h2><p className="mt-3 max-w-lg leading-relaxed text-white/65">For Zakat, Sadaqah, or general donation, transfer directly to BIWS and share your receipt with our team for acknowledgement.</p></div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-white backdrop-blur-sm"><div className="flex items-start gap-3"><Banknote className="mt-0.5 h-5 w-5 text-secondary-light" /><div><p className="font-bold">{siteConfig.bank.name}</p><p className="mt-1 text-sm text-white/60">{siteConfig.bank.accountName}</p></div></div><div className="mt-5 space-y-2 rounded-xl bg-black/15 p-4 font-mono text-sm"><p>AC# {siteConfig.bank.accountNo}</p><p className="break-all text-primary-light">IBAN: {siteConfig.bank.iban}</p><p className="font-sans text-xs text-white/55">{siteConfig.bank.branch}</p></div></div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2"><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 transition-colors hover:bg-white/10"><Smartphone className="h-5 w-5 text-primary-light" /> Mobile wallet details: {siteConfig.phone}</a><a href={`mailto:${siteConfig.email}?subject=Donation confirmation`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 transition-colors hover:bg-white/10"><FileText className="h-5 w-5 text-primary-light" /> Share your donation confirmation</a></div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container><div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50 p-8 text-center sm:p-12"><ShieldCheck className="mx-auto h-8 w-8 text-primary" /><h2 className="mt-4 text-2xl font-bold text-foreground">Your trust matters to us.</h2><p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted">We value responsible giving. Contact our team for donation receipts, sponsorship information, or any question about how your support is making a difference.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Button href={`mailto:${siteConfig.email}?subject=Donation inquiry`} size="lg">Contact donation team</Button><Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} size="lg" variant="outline"><Phone className="h-4 w-4" /> Call {siteConfig.phone}</Button></div></div></Container>
      </section>
    </>
  );
}
