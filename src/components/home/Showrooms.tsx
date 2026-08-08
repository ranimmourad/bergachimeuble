"use client";

import { MapPin } from "lucide-react";
import { SHOWROOMS } from "@/lib/site";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import MapEmbed from "@/components/MapEmbed";

export default function Showrooms() {
  return (
    <section className="section container-bm">
      <SectionHeader
        eyebrow="Nous rendre visite"
        title="Nos showrooms"
        subtitle="Découvrez nos collections en personne dans l'un de nos deux espaces."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SHOWROOMS.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.08}>
            <article className="overflow-hidden rounded-lg border border-black/5 bg-background">
              <MapEmbed src={s.mapEmbed} title={`Carte ${s.name}`} className="h-56" />
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
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
