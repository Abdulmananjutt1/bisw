import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export function GetInvolvedCta() {
  return (
    <section className="bg-[#052d21] py-12 sm:py-16">
      <Container>
        <div className="grid gap-6 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-primary-light">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                BIWS team support
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Need help choosing the right next step?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
              Call, WhatsApp, or email BIWS and our team will guide you with
              timing, directions, sponsorship, admission, or volunteer support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} variant="secondary">
              <Phone className="h-4 w-4" />
              Call now
            </Button>
            <Button
              href={`mailto:${siteConfig.email}?subject=Get Involved Inquiry`}
              variant="outline"
              className="border-white/35 text-white hover:bg-white hover:text-primary-darker"
            >
              <Mail className="h-4 w-4" />
              Email us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
