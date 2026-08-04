"use client";

import { navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ChevronRight, Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const renderSimpleLink = (link: (typeof navLinks)[number]) => {
    const isActive = isActiveLink(link.href);

    return (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={cn(
            "relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
            isActive
              ? "bg-primary/8 text-primary"
              : "text-foreground/70 hover:bg-gray-50 hover:text-foreground"
          )}
        >
          {link.label}
          {isActive && (
            <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
          )}
        </Link>
      </li>
    );
  };

  const renderMobileSimpleLink = (link: (typeof navLinks)[number]) => {
    const isActive = isActiveLink(link.href);

    return (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={cn(
            "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-all",
            isActive
              ? "bg-primary text-white shadow-md shadow-primary/25"
              : "text-foreground/75 hover:bg-gray-50 hover:text-foreground"
          )}
        >
          <span>{link.label}</span>
          <ChevronRight className={cn("h-4 w-4", isActive ? "text-white/70" : "text-muted")} />
        </Link>
      </li>
    );
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="hidden items-center gap-1 md:flex">
        {navLinks.map((link) => renderSimpleLink(link))}
      </ul>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white text-foreground shadow-sm transition-all hover:border-primary/20 hover:bg-primary/5 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[230] bg-foreground/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed right-0 top-0 z-[240] flex h-dvh w-[calc(100vw-0.75rem)] max-w-[22rem] animate-drawer-in flex-col overflow-hidden border-l border-emerald-100 bg-white shadow-2xl shadow-slate-950/30 md:hidden"
        >
          <div className="flex items-center justify-between bg-primary-darker px-4 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 shadow-inner">
                <span className="text-base font-black text-white">B</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">{siteConfig.name}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/60">
                  Welfare Society
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <ul className="grid flex-1 content-start gap-1 overflow-y-auto p-3">
            {navLinks.map((link) => renderMobileSimpleLink(link))}
          </ul>

          <div className="mt-auto space-y-3 border-t border-gray-100 p-4">
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 active:scale-[0.97]"
            >
              <Heart className="h-4 w-4" />
              Donate Now
            </Link>
            <p className="text-center text-xs text-muted">
              {siteConfig.phone} - {siteConfig.addressShort}
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
