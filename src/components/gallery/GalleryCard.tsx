import { getGalleryHref, type GalleryItem } from "@/config/gallery";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type GalleryCardProps = {
  item: GalleryItem;
  className?: string;
  featured?: boolean;
  priority?: boolean;
};

export function GalleryCard({
  item,
  className,
  featured = false,
  priority = false,
}: GalleryCardProps) {
  return (
    <Link
      href={getGalleryHref(item)}
      aria-label={`View ${item.title}`}
      className={cn(
        "group block rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4",
        className
      )}
    >
      <article className="relative h-full overflow-hidden rounded-[1.5rem] bg-foreground shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/15">
        <div className={cn("relative", featured ? "aspect-[16/8]" : "aspect-[4/5]")}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes={
              featured
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={priority}
            unoptimized
          />
          <div className="absolute inset-0 bg-[#003f5f]/55" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                {item.category}
              </span>
              <span className="flex h-9 w-9 shrink-0 translate-y-1 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-1 max-w-lg text-sm leading-relaxed text-white/75">
              {item.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
