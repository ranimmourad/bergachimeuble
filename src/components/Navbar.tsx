"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Smart show/hide navbar: hide on scroll down, reveal on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      setScrolled(currentY > 8);

      // Ignore tiny scroll jitters; never hide while the mobile menu is open
      if (Math.abs(delta) > 6) {
        if (delta > 0 && currentY > 96 && !open) {
          setHidden(true);
        } else if (delta < 0) {
          setHidden(false);
        }
        lastY = currentY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-navbar transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "shadow-sm" : ""}`}
    >
      <nav className="container-bm flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Bergachi Meubles - Accueil">
          <Image
            src="/logo.png"
            alt="Bergachi Meubles"
            width={120}
            height={120}
            priority
            className="h-16 w-16 rounded-full object-contain"
          />
          <span className="hidden font-serif text-xl tracking-wide text-ink sm:block">
            Bergachi Meubles
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-primary ${
                isActive(l.href) ? "text-primary" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-navbar md:hidden">
          <div className="container-bm flex flex-col py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`py-3 text-sm tracking-wide ${
                  isActive(l.href) ? "text-primary" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
