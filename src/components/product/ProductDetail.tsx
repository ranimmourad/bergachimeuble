"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/types";
import { CATEGORY_NAME } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="container-bm py-10 sm:py-14">
      <Link
        href="/collection"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-primary"
      >
        <ChevronLeft size={16} /> Retour à la collection
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[active]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActive(i)}
                  className={`relative aspect-square w-20 overflow-hidden rounded-md transition-all ${
                    active === i ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-xs uppercase tracking-widest text-primary">
            {CATEGORY_NAME[product.category]}
          </p>
          <h1 className="heading-serif mt-2 text-3xl sm:text-4xl">{product.name}</h1>

          <p className="mt-5 text-sm leading-relaxed text-ink/75">{product.description}</p>

          <div className="mt-8">
            <WhatsAppButton
              message={`Bonjour, je suis intéressé(e) par "${product.name}". Pourriez-vous m'envoyer plus d'informations et le prix ?`}
              label="Demander un devis sur WhatsApp"
              className="w-full sm:w-auto"
            />
            <p className="mt-3 text-xs text-ink/50">
              Contactez-nous pour connaître le prix et la disponibilité en showroom.
            </p>
          </div>

          {/* Specs */}
          <div className="mt-10">
            <h2 className="heading-serif text-xl">Caractéristiques</h2>
            <dl className="mt-4 divide-y divide-black/5 border-t border-black/5">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between py-3 text-sm">
                  <dt className="text-ink/60">{s.label}</dt>
                  <dd className="font-medium text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <FadeIn>
            <h2 className="heading-serif text-2xl sm:text-3xl">Produits similaires</h2>
          </FadeIn>
          <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <FadeIn key={p.id} delay={(i % 4) * 0.06}>
                <ProductCard product={p} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
