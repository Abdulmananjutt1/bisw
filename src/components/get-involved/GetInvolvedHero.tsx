import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { CalendarCheck, Phone, Users } from "lucide-react";
import Image from "next/image";

export function GetInvolvedHero() {
  return (
    <section className="relative isolate flex min-h-[430px] overflow-hidden bg-[#004370] py-12 sm:h-[500px] sm:min-h-0 sm:py-0">
      <Image
        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1800&q=85"
        alt="Volunteers preparing support supplies for families"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
        unoptimized
      />
      <div className="absolute inset-0 bg-[#003357]/55" />

      <Container className="relative flex h-full items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-light backdrop-blur-sm">
            <Users className="h-3.5 w-3.5" />
            Get involved
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Support BIWS in one simple place.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Sponsor care, ask about admission, volunteer your time, or plan a
            respectful visit to BIWS Girls Campus in Lahore.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#visit" size="lg" className="bg-secondary hover:bg-secondary-dark">
              Plan a Visit
              <CalendarCheck className="h-5 w-5" />
            </Button>
            <Button
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              variant="outline"
              size="lg"
              className="border-white/35 text-white hover:bg-white hover:text-primary-darker"
            >
              Call BIWS
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
