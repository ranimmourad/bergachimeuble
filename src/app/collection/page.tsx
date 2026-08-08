import { Suspense } from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CollectionView from "@/components/collection/CollectionView";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Découvrez la collection Bergachi Meubles : salons, chambres, salles à manger et décoration.",
};

export default function CollectionPage() {
  return (
    <>
      <PageHeader
        title="Notre collection"
        subtitle="Filtrez par catégorie et par prix pour trouver la pièce idéale."
      />
      <Suspense fallback={<div className="container-bm section text-ink/60">Chargement…</div>}>
        <CollectionView />
      </Suspense>
    </>
  );
}
