import { siteConfig, footerQuickLinks, footerServices } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Heart, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";

const socialLinks = [
  {
    href: siteConfig.social.facebook,
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    href: siteConfig.social.youtube,
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    href: siteConfig.social.tiktok,
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
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
              <div className="relative h-13 w-13 overflow-hidden rounded-2xl transition-transform group-hover:scale-105">
                <Image
                  src={logo}
                  alt={siteConfig.name}
                  fill
                  className="object-contain mix-blend-screen"
                />
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
              Empowering 90 orphan girls with shelter, food, education, and life skills since 2012.
              Founded by Dr. Amna Amber in Model Town, Lahore.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-white/50 transition-all hover:border-primary/40 hover:bg-primary/20 hover:text-primary-light"
                >
                  {icon}
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
