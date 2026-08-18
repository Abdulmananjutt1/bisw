import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { Container } from "@/components/ui/Container";
import { galleryCategories, galleryItems } from "@/config/gallery";
import type { Metadata } from "next";
import { Camera, Heart, Images, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — BIWS Orphanage Campus Life in Lahore, Pakistan",
  description:
    "Photo gallery of BIWS Orphanage in Model Town, Lahore — campus life, girls education, skill training, events, and everyday moments of hope and growth.",
  keywords: [
    "BIWS orphanage gallery",
    "orphanage Lahore photos",
    "orphan girls campus Pakistan",
    "BIWS girls campus photos",
    "orphanage events Lahore",
  ],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beguminayat.com"}/gallery` },
  openGraph: {
    title: "Gallery — BIWS Orphanage Campus Life in Lahore, Pakistan",
    description:
      "Explore life at BIWS Orphanage, Lahore — events, education, skill training and joyful moments from our Model Town campus.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beguminayat.com"}/gallery`,
  },
};

export default function GalleryPage() {
  const galleryStats = [
    { icon: Images, value: `${galleryItems.length}+`, label: "Campus moments" },
    { icon: Sparkles, value: `${galleryItems.length}`, label: "Stories to explore" },
    { icon: Heart, value: "One home", label: "Countless memories" },
  ];

  return (
    <>
      <section className="relative isolate flex min-h-[430px] overflow-hidden bg-[#004370] py-12 sm:h-[500px] sm:min-h-0 sm:py-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-[#003357]/55" />
        <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full border-[30px] border-white/5" />
        <Container className="relative flex h-full items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-light backdrop-blur-sm">
              <Camera className="h-3.5 w-3.5" />
              Moments that matter
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Stories of{" "}
              <span className="text-secondary-light">joy, growth &amp; hope.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Step inside life at BIWS Girls Campus - where every celebration,
              class, and shared moment helps shape a brighter future.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative bg-[#fbfdfb] py-12 sm:py-16">
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            {galleryStats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-white/80 bg-white p-5 shadow-lg shadow-emerald-950/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{value}</p>
                  <p className="text-xs font-medium text-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Campus gallery
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A closer look at our shared journey.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              From everyday learning to landmark celebrations, these moments
              reflect the warmth and purpose of our campus.
            </p>
          </div>

          <GalleryExplorer items={galleryItems} categories={galleryCategories} />
        </Container>
      </section>

      <section className="bg-warm-bg pb-16 sm:pb-20">
        <Container>
          <div className="rounded-[1.75rem] bg-primary-darker p-8 text-center text-white sm:p-12">
            <Heart className="mx-auto h-7 w-7 text-secondary-light" />
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Help create more moments like these.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Your support makes a safe home, joyful learning, and life-changing
              opportunities possible for every girl at BIWS.
            </p>
            <a
              href="/donate"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-secondary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-secondary-dark"
            >
              Support BIWS today
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
