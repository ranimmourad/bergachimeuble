"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import type { CategorySlug } from "@/lib/types";

type Sort = "newest" | "az" | "za";

export default function CollectionView() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("categorie") as CategorySlug | null;

  const [category, setCategory] = useState<CategorySlug | "all">(
    initialCat && CATEGORIES.some((c) => c.slug === initialCat) ? initialCat : "all"
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case "az":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        list.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
    }
    return list;
  }, [category, query, sort]);

  return (
    <div className="container-bm section">
      {/* Search + sort bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit…"
            className="w-full rounded-full border border-black/10 bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm text-ink transition-colors hover:border-primary lg:hidden"
          >
            <SlidersHorizontal size={16} /> Filtres
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-full border border-black/10 bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          >
            <option value="newest">Nouveautés</option>
            <option value="az">Nom A → Z</option>
            <option value="za">Nom Z → A</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* Filters sidebar */}
        <aside className={`${showFilters ? "block" : "hidden"} lg:block`}>
          <div className="space-y-8 lg:sticky lg:top-28">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-ink/50">Catégorie</h3>
              <ul className="mt-3 space-y-1">
                <FilterItem
                  active={category === "all"}
                  label="Tout"
                  onClick={() => setCategory("all")}
                />
                {CATEGORIES.map((c) => (
                  <FilterItem
                    key={c.slug}
                    active={category === c.slug}
                    label={c.name}
                    onClick={() => setCategory(c.slug)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          <p className="mb-6 text-sm text-ink/60">
            {filtered.length} produit{filtered.length > 1 ? "s" : ""}
          </p>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-ink/60">
              Aucun produit ne correspond à votre recherche.
            </p>
          ) : (
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterItem({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
          active ? "bg-primary/10 text-primary" : "text-ink/80 hover:bg-navbar"
        }`}
      >
        {label}
      </button>
    </li>
  );
}
