import { siteConfig, footerQuickLinks, footerServices } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Heart, ExternalLink } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: siteConfig.social.facebook,  label: "Facebook",  letter: "f" },
  { href: siteConfig.social.twitter,   label: "Twitter",   letter: "𝕏" },
  { href: siteConfig.social.instagram, label: "Instagram", letter: "ig" },
  { href: siteConfig.social.youtube,   label: "YouTube",   letter: "yt" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#040f09]">
      {/* Top accent */}
      <div className="h-1 w-full bg-primary" />

      {/* Decorative blob */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/8 blur-3xl" />

      {/* Newsletter / CTA strip */}
      <div className="border-b border-white/8">
        <Container className="py-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-light">
                Support the mission
              </p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                Help Empower 90 Orphan Girls
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                href="/donate"
                size="md"
                className="rounded-xl bg-secondary hover:bg-secondary-dark border-0 shadow-lg"
              >
                <Heart className="h-4 w-4" />
                Donate Now
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="rounded-xl border-white/30 text-white hover:bg-white hover:text-primary-darker"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main footer content */}
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
                <span className="text-2xl font-black text-white">B</span>
              </div>
              <div>
                <span className="block text-lg font-bold text-white leading-tight">
                  {siteConfig.name}
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-widest text-white/40">
                  Welfare Society
                </span>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-white/50">
              Empowering 90 orphan girls with shelter, food, education, and life skills since 2013.
              Founded by Dr. Amna Amber in Model Town, Lahore.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ href, label, letter }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-[11px] font-bold text-white/50 transition-all hover:border-primary/40 hover:bg-primary/20 hover:text-primary-light"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-primary-light"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/20 transition-all group-hover:bg-primary-light group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/80">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-primary-light"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/20 transition-all group-hover:bg-primary-light group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Bank */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white/80">
              Contact Info
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <MapPin className="h-3.5 w-3.5 text-primary-light" />
                </div>
                <span className="text-sm text-white/50">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Phone className="h-3.5 w-3.5 text-primary-light" />
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Phone className="h-3.5 w-3.5 text-primary-light" />
                </div>
                <a
                  href={`tel:${siteConfig.phone2.replace(/\s/g, "")}`}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {siteConfig.phone2}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Mail className="h-3.5 w-3.5 text-primary-light" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/50 transition-colors hover:text-white break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <ExternalLink className="h-3.5 w-3.5 text-primary-light" />
                </div>
                <a
                  href={siteConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {siteConfig.url.replace("https://", "")}
                </a>
              </li>
            </ul>

          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-center sm:flex-row">
          <p className="text-xs text-white/30">
            © {currentYear} BIWS Orphanage —{" "}
            <span className="text-white/45">{siteConfig.fullName}</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-white/25">
            Designed with{" "}
            <Heart className="h-3 w-3 text-secondary/60" />
            {" "}for a better tomorrow
          </p>
        </Container>
      </div>
    </footer>
  );
}
