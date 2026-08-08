"use client";

import { Phone, Mail, Facebook, MapPin } from "lucide-react";
import { SITE, SHOWROOMS } from "@/lib/site";
import MapEmbed from "@/components/MapEmbed";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";

export default function ContactContent() {
  return (
    <div className="container-bm section space-y-16">
      {/* Contact methods */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FadeIn>
          <ContactCard
            icon={<Phone size={22} />}
            title="Téléphone"
            value={SITE.phone}
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <ContactCard
            icon={<Mail size={22} />}
            title="Email"
            value={SITE.email}
            href={`mailto:${SITE.email}`}
          />
        </FadeIn>
        <FadeIn delay={0.16}>
          <ContactCard
            icon={<Facebook size={22} />}
            title="Facebook"
            value="Bergachi Meubles"
            href={SITE.facebook}
            external
          />
        </FadeIn>
      </div>

      {/* WhatsApp CTA */}
      <FadeIn>
        <div className="flex flex-col items-center gap-5 rounded-lg bg-navbar/60 px-6 py-12 text-center">
          <h2 className="heading-serif text-2xl sm:text-3xl">Discutons de votre projet</h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink/70">
            Une question sur un produit, une demande de devis ou de disponibilité&nbsp;?
            Contactez-nous directement sur WhatsApp, nous vous répondons rapidement.
          </p>
          <WhatsAppButton
            message="Bonjour Bergachi Meubles, je souhaite avoir plus d'informations."
            label="Écrire sur WhatsApp"
          />
        </div>
      </FadeIn>

      {/* Showrooms with maps */}
      <div>
        <FadeIn>
          <h2 className="heading-serif text-2xl sm:text-3xl">Nos showrooms</h2>
          <p className="mt-2 text-sm text-ink/70">
            Retrouvez-nous dans nos deux espaces d'exposition.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {SHOWROOMS.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.08}>
              <div className="overflow-hidden rounded-lg border border-black/5 bg-background">
                <MapEmbed src={s.mapEmbed} title={`Carte ${s.name}`} className="h-72" />
                <div className="p-5">
                  <h3 className="font-serif text-xl text-ink">{s.name}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm text-ink/70">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>
                      {s.address}
                      <br />
                      {s.city}
                    </span>
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-lg border border-black/5 bg-background p-6 transition-colors hover:border-primary/40"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-widest text-ink/50">{title}</span>
        <span className="mt-0.5 block text-sm font-medium text-ink transition-colors group-hover:text-primary">
          {value}
        </span>
      </span>
    </a>
  );
}
