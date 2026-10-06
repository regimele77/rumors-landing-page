"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { EASE } from "@/lib/motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const wasOpen = useRef(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const onScroll = () => {
      header.dataset.scrolled = window.scrollY > 20 ? "true" : "false";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpenPath(null);
    };

    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else if (wasOpen.current) {
      buttonRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const content = document.getElementById("content");
    const footer = document.querySelector("footer");
    const previousOverflow = document.body.style.overflow;
    content?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }

      if (event.key !== "Tab") return;

      const menu = menuRef.current;
      if (!menu) return;

      const focusable = [...menu.querySelectorAll<HTMLElement>("a, button")].filter(
        (element) => element.getClientRects().length > 0,
      );

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      content?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
    <header
      ref={headerRef}
      data-scrolled="false"
      inert={open ? true : undefined}
      className="site-header sticky top-0 z-50 border-b border-transparent bg-white py-5 data-[scrolled=true]:border-navy/15 data-[scrolled=true]:py-3"
    >
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label="Rumors, home"
          aria-current={pathname === "/" ? "page" : undefined}
          className="inline-flex shrink-0"
        >
          <Logo priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) =>
            item.href === "/contact" ? (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="inline-flex items-center border border-navy px-4 py-2 text-sm text-navy transition-colors duration-300 ease-draw hover:bg-navy hover:text-white motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            ) : (
              <AnimatedLink
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base",
                  pathname === item.href && "text-navy",
                )}
                {...(pathname === item.href
                  ? { "aria-current": "page" as const }
                  : {})}
              >
                {item.label}
              </AnimatedLink>
            ),
          )}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="relative block h-3 w-6 text-navy" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-6 bg-current transition duration-300 ease-draw motion-reduce:transition-none",
                open && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-6 bg-current transition duration-300 ease-draw motion-reduce:transition-none",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-px w-6 bg-current transition duration-300 ease-draw motion-reduce:transition-none",
                open && "top-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

    </header>

      {open ? (
        <div
          ref={menuRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-white md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              aria-label="Rumors, home"
              className="inline-flex shrink-0"
              onClick={() => setOpenPath(null)}
            >
              <Logo />
            </Link>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setOpenPath(null)}
            >
              <span className="relative block h-4 w-4 text-navy" aria-hidden="true">
                <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-4 px-6 pt-10">
            {site.nav.map((item, index) => (
              <motion.div
                key={item.href}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.45,
                  delay: reduce ? 0 : index * 0.08,
                  ease: EASE,
                }}
              >
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="display block text-[clamp(3rem,12vw,5.5rem)]"
                  onClick={() => setOpenPath(null)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
