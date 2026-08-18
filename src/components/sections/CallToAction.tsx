import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Heart, HandHeart, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const donationAmounts = [
  { label: "PKR 500", desc: "Provides a day of meals" },
  { label: "PKR 2,000", desc: "Covers school supplies" },
  { label: "PKR 5,000", desc: "Monthly care support" },
  { label: "Custom", desc: "Your chosen amount" },
];

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#eef8f3] py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-darker shadow-[0_30px_80px_rgba(6,78,59,0.28)]">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/25 blur-2xl" />
            <div className="absolute left-1/2 top-0 h-px w-96 -translate-x-1/2 bg-white/20" />
          </div>

          <div className="relative grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-16">
            {/* Left */}
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Heart className="h-4 w-4 text-white/80 animate-pulse-soft" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Help Today — Change a Life
                </span>
              </div>

              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Every Rupee Matters
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Your support funds food, education, healthcare, skills training, and a better
                future for{" "}
                <span className="font-bold text-white">90 orphan girls</span> in Lahore.
              </p>

              {/* Quick amounts */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {donationAmounts.map((amt) => (
                  <a
                    key={amt.label}
                    href="/donate"
                    className="group rounded-2xl border border-emerald-100/20 bg-primary/20 p-3 text-center backdrop-blur-sm transition-all hover:border-emerald-100/40 hover:bg-primary/30"
                  >
                    <p className="text-base font-black text-white">{amt.label}</p>
                    <p className="mt-0.5 text-[11px] text-white/55 group-hover:text-white/70">
                      {amt.desc}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Button
                  href="/donate"
                  size="lg"
                  className="rounded-2xl bg-secondary hover:bg-secondary-dark border-0 text-white shadow-2xl shadow-secondary/30"
                >
                  <Heart className="h-5 w-5" />
                  Donate Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-white/40 text-white hover:bg-white hover:text-primary-darker"
                >
                  <HandHeart className="h-5 w-5" />
                  Become a Volunteer
                </Button>
              </div>
            </div>

            {/* Right — contact card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl border border-emerald-100/20 bg-primary/20 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">
                  Contact Us Directly
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  For admissions, visits, or partnership inquiries:
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 rounded-2xl border border-emerald-100/20 bg-primary/20 p-4 transition-all hover:bg-primary/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/30 shadow-inner">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Call us</p>
                      <p className="font-bold text-white">{siteConfig.phone}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-100/15 bg-primary/15 p-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Bank Account
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">{siteConfig.bank.name}</p>
                  <p className="mt-1 font-mono text-sm text-primary-light">
                    {siteConfig.bank.accountNo}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-white/40 break-all">
                    IBAN: {siteConfig.bank.iban}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
