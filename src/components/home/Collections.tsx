"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Collections() {
  return (
    <section className="section container-bm">
      <SectionHeader
        eyebrow="Nos univers"
        title="Explorez nos collections"
        subtitle="Des salons aux chambres, chaque pièce est pensée pour sublimer votre intérieur."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat, i) => (
          <FadeIn key={cat.slug} delay={i * 0.08}>
            <Link href={`/collection?categorie=${cat.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                <motion.div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-serif text-2xl">{cat.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-xs tracking-wide opacity-90">
                    Voir la collection
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
