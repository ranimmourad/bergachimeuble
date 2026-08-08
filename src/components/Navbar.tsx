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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-navbar">
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
