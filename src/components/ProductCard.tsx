"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { CATEGORY_NAME } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/produit/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navbar">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">
              {CATEGORY_NAME[product.category]}
            </p>
            <h3 className="mt-1 font-serif text-xl text-ink transition-colors group-hover:text-primary">
              {product.name}
            </h3>
          </div>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-ink/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          />
        </div>
      </Link>
    </motion.article>
  );
}
