export type CategorySlug = "salons" | "chambres" | "salles-a-manger" | "decoration";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  description: string;
  specs: { label: string; value: string }[];
  images: string[];
  featured?: boolean;
  createdAt: string; // ISO date used for "newest" sorting
}

export interface Showroom {
  name: string;
  address: string;
  city: string;
  mapEmbed: string;
}
