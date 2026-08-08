"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-navbar">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/hero.png"
          alt="Showroom Bergachi Meubles"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Buttons reserved in the lower-left empty space of the hero */}
        <div className="absolute inset-0">
          <div className="container-bm flex h-full items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mb-[6%] flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Link href="/collection" className="btn-primary shadow-sm">
                Découvrir la collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/40 bg-background/90 px-7 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-background"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
