"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function forceScrollTop() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  root.style.scrollBehavior = previousScrollBehavior;
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    let timeoutId: number | undefined;
    const frameId = window.requestAnimationFrame(() => {
      forceScrollTop();
      timeoutId = window.setTimeout(forceScrollTop, 0);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [pathname]);

  useEffect(() => {
    function handleHashChange() {
      if (!window.location.hash) {
        forceScrollTop();
      }
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
