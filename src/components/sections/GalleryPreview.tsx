import { galleryItems } from "@/config/site";
import { getGalleryHref, type GalleryItem } from "@/config/gallery";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const previewSlugs = [
  "prize-distribution-2025",
  "solar-energy-project",
  "independence-day-2025",
  "classroom-activities",
  "computer-lab-session",
  "beautician-training",
] as const;

export function GalleryPreview() {
  const preview = previewSlugs
    .map((slug) => galleryItems.find((item) => item.slug === slug))
    .filter((item): item is GalleryItem => Boolean(item));

  return (
    <section className="relative overflow-hidden bg-primary-darker py-16 sm:py-24">
      {/* Enhanced Background Only */}
      <div className="absolute inset-0">
        {/* Large gradient blobs */}
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/30 to-primary-light/20 blur-[120px]" />
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-secondary/20 to-secondary-light/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-primary-light/20 to-primary/15 blur-[90px]" />
        
        {/* Subtle diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 80px)',
        }} />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        
        {/* Gradient lines */}
        <div className="absolute right-0 bottom-1/3 h-[1px] w-2/3 bg-gradient-to-l from-transparent via-secondary/25 to-transparent" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="mb-10 max-w-2xl text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-primary-light backdrop-blur-sm">
            <Camera className="h-4 w-4" />
            Gallery
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Moments From Our Campus
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            A glimpse into the daily life, events, and celebrations at BIWS Girls Campus.
          </p>
        </div>

        {/* Campus moments grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((item) => (
            <Link
              key={item.id}
              href={getGalleryHref(item)}
              className="group relative overflow-hidden rounded-2xl bg-primary-darker text-white shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary-darker"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white ${
                    item.category === "Annual Event"
                      ? "bg-secondary/95"
                      : "bg-primary/90"
                  }`}
                >
                  {item.category}
                </span>
                <h3 className="text-base font-extrabold leading-snug text-white">
                  {item.title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[1px]">
                <div className="rounded-full bg-white/90 p-3 shadow-lg">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-5 text-sm text-white/50">
            Want to see more moments from events and activities at campus?
          </p>
          <Button
            href="/gallery"
            className="rounded-2xl bg-white text-primary shadow-2xl hover:bg-gray-50"
            size="lg"
          >
            View Full Gallery
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
