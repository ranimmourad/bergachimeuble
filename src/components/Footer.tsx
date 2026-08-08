import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { SITE, SHOWROOMS } from "@/lib/site";
import { CATEGORIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-8 bg-navbar">
      <div className="container-bm grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Bergachi Meubles"
              width={100}
              height={100}
              className="h-16 w-16 rounded-full object-contain"
            />
            <span className="font-serif text-xl text-ink">Bergachi Meubles</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
            Mobilier moderne et chaleureux. Salons, chambres, salles à manger et
            décoration au cœur de la Tunisie.
          </p>
        </div>

        <div>
          <h3 className="heading-serif text-xl">Collection</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink/70">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/collection?categorie=${c.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-serif text-xl">Showrooms</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            {SHOWROOMS.map((s) => (
              <li key={s.name} className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  <span className="block text-ink">{s.name}</span>
                  {s.city}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="heading-serif text-xl">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Phone size={16} className="text-primary" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail size={16} className="text-primary" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Facebook size={16} className="text-primary" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container-bm flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Bergachi Meubles. Tous droits réservés.</p>
          <p>Bizerte · Tunis</p>
        </div>
      </div>
    </footer>
  );
}
