"use client";

import Link from "next/link";
import { getFeaturedProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

export default function Featured() {
  const products = getFeaturedProducts(6);

  return (
    <section className="section bg-navbar/60">
      <div className="container-bm">
        <SectionHeader
          eyebrow="Sélection"
          title="Produits vedettes"
          subtitle="Une sélection de nos pièces les plus appréciées par nos clients."
        />

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 3) * 0.08}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/collection" className="btn-outline">
            Voir toute la collection
          </Link>
        </div>
      </div>
    </section>
  );
}
