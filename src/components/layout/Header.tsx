import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";

export function Header() {
  return (
    <header className="sticky top-0 z-[220]">
      {/* Top info bar */}
      <div className="hidden bg-primary-darker md:block">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-xs text-white/75 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3 text-primary-light" />
              {siteConfig.phone}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 text-xs text-white/75 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3 text-primary-light" />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/55">
            <MapPin className="h-3 w-3 text-secondary-light" />
            <span>{siteConfig.addressShort}</span>
            <span className="text-white/20 mx-1">•</span>
            <Heart className="h-3 w-3 text-secondary-light" />
            <span>Est. {siteConfig.established}</span>
          </div>
        </Container>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-100 bg-white/97 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <Container className="relative flex h-18 items-center justify-between py-3 sm:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl transition-transform group-hover:scale-105">
              <Image
                src={logo}
                alt={siteConfig.name}
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
            <div className="leading-none">
              <span className="block text-lg font-bold text-foreground sm:text-xl">
                {siteConfig.name}
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-muted sm:text-[11px]">
                Welfare Society
              </span>
            </div>
          </Link>

          {/* Nav */}
          <Navbar />

          {/* Right CTA */}
          <div className="relative z-20 hidden pointer-events-auto items-center gap-3 md:flex">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              aria-label={`Call BIWS at ${siteConfig.phone}`}
              title={`Call ${siteConfig.phone}`}
              className="pointer-events-auto flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-gray-50 hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Us</span>
            </a>
            <Link
              href="/donate"
              aria-label="Donate now"
              title="Donate Now"
              className="pointer-events-auto inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-primary/30 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
