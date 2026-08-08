"use client";

import { Phone, Mail, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPreview() {
  return (
    <section className="section bg-navbar/60">
      <div className="container-bm">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Restons en contact</p>
          <h2 className="heading-serif mt-2 text-3xl sm:text-4xl">
            Un projet d'aménagement&nbsp;?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Notre équipe vous accompagne dans le choix de votre mobilier. Contactez-nous
            par téléphone, email ou directement sur WhatsApp.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-primary"
            >
              <Phone size={17} className="text-primary" /> {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-primary"
            >
              <Mail size={17} className="text-primary" /> {SITE.email}
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-primary"
            >
              <Facebook size={17} className="text-primary" /> Facebook
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              message="Bonjour Bergachi Meubles, je souhaite avoir plus d'informations."
              label="Discuter sur WhatsApp"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
