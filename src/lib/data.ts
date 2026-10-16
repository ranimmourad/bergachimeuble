import type { Category, Product } from "./types";

export const CATEGORIES: Category[] = [
  {
    slug: "salons",
    name: "Salons",
    description: "Canapés d'angle, salons modulables et fauteuils confortables.",
    image: "/products/salon-modular-grey.jpg",
  },
  {
    slug: "chambres",
    name: "Chambres",
    description: "Lits, têtes de lit éclairées, armoires et coiffeuses.",
    image: "/products/bedroom-illuminated-headboard.jpg",
  },
  {
    slug: "salles-a-manger",
    name: "Salles à manger",
    description: "Tables, chaises rembourrées et ensembles complets.",
    image: "/products/dining-walnut-glass-set.jpg",
  },
  {
    slug: "decoration",
    name: "Décoration",
    description: "Miroirs, vitrines, buffets et tables basses.",
    image: "/products/buffet-white-mirror.jpg",
  },
];

export const CATEGORY_NAME: Record<string, string> = {
  salons: "Salons",
  chambres: "Chambres",
  "salles-a-manger": "Salles à manger",
  decoration: "Décoration",
};

export const PRODUCTS: Product[] = [
  // ---- SALONS ----
  {
    id: "p-salon-01",
    slug: "salon-angle-creme-boucle",
    name: "Salon d'angle Crème Bouclé",
    category: "salons",
    featured: true,
    createdAt: "2024-11-20",
    description:
      "Grand salon d'angle en tissu bouclé crème avec piètement et accoudoirs en bois de noyer. Assises profondes et coussins moelleux pour un confort optimal au quotidien.",
    specs: [
      { label: "Matière", value: "Tissu bouclé" },
      { label: "Structure", value: "Bois massif" },
      { label: "Couleur", value: "Crème / Noyer" },
      { label: "Configuration", value: "Angle modulable" },
    ],
    images: ["/products/salon-corner-cream.jpg"],
  },
  {
    id: "p-salon-02",
    slug: "salon-modulable-gris-naturel",
    name: "Salon Modulable Gris Naturel",
    category: "salons",
    featured: true,
    createdAt: "2024-11-15",
    description:
      "Salon modulable en U au tissu texturé gris chiné, tablettes intégrées en bois et lignes contemporaines. Idéal pour les grands espaces de vie.",
    specs: [
      { label: "Matière", value: "Tissu texturé" },
      { label: "Structure", value: "Bois & métal" },
      { label: "Couleur", value: "Gris naturel" },
      { label: "Configuration", value: "Modulable en U" },
    ],
    images: ["/products/salon-modular-grey.jpg"],
  },
  {
    id: "p-salon-03",
    slug: "salon-cuir-marron-capitonne",
    name: "Salon Cuir Marron Capitonné",
    category: "salons",
    createdAt: "2024-10-30",
    description:
      "Ensemble de salon en cuir marron au surpiquage soigné, mêlant tissu bouclé clair et cuir chaleureux. Une présence élégante et intemporelle.",
    specs: [
      { label: "Matière", value: "Cuir & tissu" },
      { label: "Structure", value: "Bois massif" },
      { label: "Couleur", value: "Marron / Crème" },
      { label: "Configuration", value: "3 + 2 places" },
    ],
    images: ["/products/salon-brown-leather.jpg"],
  },
  {
    id: "p-salon-04",
    slug: "salon-beige-bicolore",
    name: "Salon Beige Bicolore",
    category: "salons",
    createdAt: "2024-10-18",
    description:
      "Salon d'angle bicolore associant tissu bouclé beige et cuir camel. Coussins généreux et finitions soignées pour un confort enveloppant.",
    specs: [
      { label: "Matière", value: "Tissu & cuir" },
      { label: "Structure", value: "Bois massif" },
      { label: "Couleur", value: "Beige / Camel" },
      { label: "Configuration", value: "Angle" },
    ],
    images: ["/products/salon-beige-leather.jpg"],
  },
  {
    id: "p-salon-05",
    slug: "salon-corner-texture",
    name: "Salon Corner Texturé",
    category: "salons",
    createdAt: "2024-09-25",
    description:
      "Salon d'angle au tissu finement texturé, base en bois clair et tablette de service intégrée. Un design moderne et fonctionnel.",
    specs: [
      { label: "Matière", value: "Tissu texturé" },
      { label: "Structure", value: "Bois clair" },
      { label: "Couleur", value: "Beige chiné" },
      { label: "Configuration", value: "Angle" },
    ],
    images: ["/products/salon-corner-textured.jpg"],
  },
  {
    id: "p-salon-06",
    slug: "salon-moderne-naturel",
    name: "Salon Moderne Naturel",
    category: "salons",
    featured: true,
    createdAt: "2024-09-10",
    description:
      "Salon d'angle bas et profond, tissu crème et bois naturel avec tablettes latérales. Composition épurée pour un intérieur chaleureux.",
    specs: [
      { label: "Matière", value: "Tissu bouclé" },
      { label: "Structure", value: "Bois naturel" },
      { label: "Couleur", value: "Crème" },
      { label: "Configuration", value: "Angle modulable" },
    ],
    images: ["/products/salon-corner-modern.jpg"],
  },
  {
    id: "p-salon-07",
    slug: "salon-arabesque",
    name: "Salon Arabesque",
    category: "salons",
    createdAt: "2024-12-02",
    description:
      "Salon au design arabesque, mêlant motifs géométriques et matières nobles pour une ambiance orientale raffinée. Pièce maîtresse qui apporte chaleur et caractère à votre salon.",
    specs: [
      { label: "Matière", value: "Tissu & bois sculpté" },
      { label: "Style", value: "Arabesque oriental" },
      { label: "Configuration", value: "Complet" },
      { label: "Couleur", value: "Tons chauds" },
    ],
    images: ["/products/Arabesque.jpeg"],
  },
  {
    id: "p-salon-08",
    slug: "salon-capitonne",
    name: "Salon Capitonné",
    category: "salons",
    featured: true,
    createdAt: "2024-12-04",
    description:
      "Salon capitonné traditionnel aux finitions soignées, garnissage généreux et surpiquage élégant. Confort enveloppant et allure intemporelle pour un salon raffiné.",
    specs: [
      { label: "Matière", value: "Tissu capitonné" },
      { label: "Finition", value: "Surpiquage soigné" },
      { label: "Configuration", value: "Complet" },
      { label: "Confort", value: "Coussins moelleux" },
    ],
    images: ["/products/Capitonnée.jpeg"],
  },
  {
    id: "p-salon-09",
    slug: "salon-coin-alliance",
    name: "Salon Coin Alliance",
    category: "salons",
    createdAt: "2024-12-06",
    description:
      "Salon d'angle Alliance au design contemporain, optimisant l'espace avec une composition modulable. Assises profondes et lignes épurées pour un confort moderne au quotidien.",
    specs: [
      { label: "Matière", value: "Tissu & bois" },
      { label: "Structure", value: "Bois massif" },
      { label: "Configuration", value: "Angle modulable" },
      { label: "Couleur", value: "Tons neutres" },
    ],
    images: ["/products/coin alliance.jpeg"],
  },
  {
    id: "p-salon-10",
    slug: "salon-coin-yasmine",
    name: "Salon Coin Yasmine",
    category: "salons",
    createdAt: "2024-12-08",
    description:
      "Salon d'angle Yasmine aux courbes douces et tissu chaleureux. Composition généreuse et accueillante, idéale pour partager des moments conviviaux en famille ou entre amis.",
    specs: [
      { label: "Matière", value: "Tissu chaleureux" },
      { label: "Structure", value: "Bois" },
      { label: "Configuration", value: "Angle" },
      { label: "Confort", value: "Assises profondes" },
    ],
    images: ["/products/Coin yasmine.jpeg", "/products/Coin yasmine1.jpeg"],
  },
  {
    id: "p-salon-11",
    slug: "salon-cap",
    name: "Salon Cap",
    category: "salons",
    createdAt: "2024-12-10",
    description:
      "Salon Cap au caractère affirmé, assises moelleuses et structure robuste. Élégance discrète et confort durable pour un salon qui traverse les saisons avec prestance.",
    specs: [
      { label: "Matière", value: "Tissu & bois" },
      { label: "Structure", value: "Bois massif" },
      { label: "Configuration", value: "Complet" },
      { label: "Confort", value: "Assises moelleuses" },
    ],
    images: ["/products/salon cap.jpeg", "/products/salon cap1.jpeg"],
  },
  {
    id: "p-salon-12",
    slug: "salon-marocain",
    name: "Salon Marocain",
    category: "salons",
    featured: true,
    createdAt: "2024-12-12",
    description:
      "Salon marocain traditionnel aux motifs richement ouvragés, bois sculpté et coussins généreux. Authentique pièce hérititaire qui célèbre l'artisanat local et apporte une âme à votre intérieur.",
    specs: [
      { label: "Matière", value: "Bois sculpté & tissu" },
      { label: "Style", value: "Marocain traditionnel" },
      { label: "Configuration", value: "Complet" },
      { label: "Finition", value: "Motifs ouvragés" },
    ],
    images: ["/products/Salon marocain.jpeg", "/products/Salon marocain 1.jpeg"],
  },
  {
    id: "p-salon-13",
    slug: "salon-rameda-6-places-avec-table",
    name: "Salon Rameda 6 Places avec Table",
    category: "salons",
    createdAt: "2024-12-14",
    description:
      "Ensemble salon Rameda 6 places avec table assortie. Composition complète et conviviale, parfaite pour recevoir vos invités avec élégance, confort et chaleur autour d'un thé ou d'un repas.",
    specs: [
      { label: "Composition", value: "6 places + table" },
      { label: "Matière", value: "Bois & tissu" },
      { label: "Configuration", value: "Ensemble complet" },
      { label: "Convivialité", value: "Grande tablée" },
    ],
    images: ["/products/salon rameda 6 places avec table.jpeg"],
  },
  {
    id: "p-salon-14",
    slug: "salon-mariem",
    name: "Salon Mariem",
    category: "salons",
    createdAt: "2024-12-16",
    description:
      "Salon Mariem au design élégant et intemporel, assises confortables et finitions soignées. Une pièce centrale chaleureuse qui s'intègre harmonieusement à tous les styles d'intérieur.",
    specs: [
      { label: "Matière", value: "Tissu & bois" },
      { label: "Structure", value: "Bois massif" },
      { label: "Configuration", value: "Complet" },
      { label: "Couleur", value: "Tons neutres" },
    ],
    images: ["/products/salonmariem.jpeg"],
  },

  // ---- CHAMBRES ----
  {
    id: "p-chambre-01",
    slug: "chambre-tete-lit-eclairee",
    name: "Chambre Tête de Lit Éclairée",
    category: "chambres",
    featured: true,
    createdAt: "2024-11-22",
    description:
      "Ensemble chambre complet avec tête de lit capitonnée et éclairage LED, armoire à miroirs et coiffeuse en bois. Une atmosphère apaisante et raffinée.",
    specs: [
      { label: "Composition", value: "Lit + armoire + coiffeuse" },
      { label: "Matière", value: "Bois & tissu" },
      { label: "Couleur", value: "Crème / Noyer" },
      { label: "Éclairage", value: "LED intégré" },
    ],
    images: ["/products/bedroom-illuminated-headboard.jpg"],
  },
  {
    id: "p-chambre-02",
    slug: "chambre-armoire-coiffeuse",
    name: "Chambre Armoire & Coiffeuse",
    category: "chambres",
    createdAt: "2024-10-12",
    description:
      "Armoire à façades miroir et bois, coiffeuse suspendue avec miroir rond rétroéclairé et pouf assorti. Élégance moderne pour la chambre.",
    specs: [
      { label: "Composition", value: "Armoire + coiffeuse + pouf" },
      { label: "Matière", value: "Bois & miroir" },
      { label: "Couleur", value: "Blanc / Noyer" },
      { label: "Miroir", value: "Rond rétroéclairé" },
    ],
    images: ["/products/bedroom-wardrobe-vanity.jpg"],
  },
  {
    id: "p-chambre-03",
    slug: "chambre-azmir",
    name: "Chambre Azmir",
    category: "chambres",
    createdAt: "2024-12-05",
    description:
      "Ensemble chambre Azmir complet, mêlant bois noble et tissus raffinés pour une chambre à coucher élégante et fonctionnelle. Composition harmonieuse au caractère affirmé, propice au repos.",
    specs: [
      { label: "Composition", value: "Lit + armoire + coiffeuse" },
      { label: "Matière", value: "Bois & tissu" },
      { label: "Couleur", value: "Tons chauds" },
      { label: "Style", value: "Contemporain" },
    ],
    images: ["/products/chambreAzmir.jpeg"],
  },
  {
    id: "p-chambre-04",
    slug: "chambre-verona",
    name: "Chambre Verona",
    category: "chambres",
    featured: true,
    createdAt: "2024-12-09",
    description:
      "Chambre Verona au style contemporain, lignes épurées et finitions haut de gamme. Une ambiance raffinée et apaisante qui invite au repos et offre des nuits réparatrices.",
    specs: [
      { label: "Composition", value: "Lit + rangements" },
      { label: "Matière", value: "Bois noble" },
      { label: "Couleur", value: "Tons clairs" },
      { label: "Style", value: "Contemporain" },
    ],
    images: ["/products/chambreVerona.jpeg"],
  },

  // ---- SALLES A MANGER ----
  {
    id: "p-sam-01",
    slug: "table-noyer-verre-6-chaises",
    name: "Table Noyer & Verre 6 Chaises",
    category: "salles-a-manger",
    featured: true,
    createdAt: "2024-11-18",
    description:
      "Ensemble salle à manger avec table en noyer plateau verre fumé et six chaises rembourrées. Pied central sculptural pour une assise généreuse.",
    specs: [
      { label: "Plateau", value: "Verre fumé" },
      { label: "Structure", value: "Noyer massif" },
      { label: "Chaises", value: "6 chaises bouclé" },
      { label: "Forme", value: "Rectangulaire" },
    ],
    images: ["/products/dining-walnut-glass-set.jpg"],
  },
  {
    id: "p-sam-02",
    slug: "table-blanche-6-chaises-boucle",
    name: "Table Blanche 6 Chaises Bouclé",
    category: "salles-a-manger",
    featured: true,
    createdAt: "2024-11-05",
    description:
      "Table contemporaine plateau laqué clair et piètement bois, accompagnée de chaises en tissu bouclé. Lignes douces et confort moderne.",
    specs: [
      { label: "Plateau", value: "Laqué clair" },
      { label: "Structure", value: "Bois" },
      { label: "Chaises", value: "6 chaises bouclé" },
      { label: "Forme", value: "Rectangulaire" },
    ],
    images: ["/products/dining-cream-glass.jpg"],
  },
  {
    id: "p-sam-03",
    slug: "table-marbre-blanc-6-chaises",
    name: "Table Marbre Blanc 6 Chaises",
    category: "salles-a-manger",
    createdAt: "2024-10-22",
    description:
      "Table à manger plateau effet marbre liseré doré et chaises capitonnées beige. Une touche d'élégance dorée pour les grandes tablées.",
    specs: [
      { label: "Plateau", value: "Effet marbre" },
      { label: "Finition", value: "Liseré doré" },
      { label: "Chaises", value: "6 chaises velours" },
      { label: "Forme", value: "Ovale" },
    ],
    images: ["/products/dining-marble-gold.jpg"],
  },
  {
    id: "p-sam-04",
    slug: "table-ronde-marbre-travertin",
    name: "Table Ronde Marbre Travertin",
    category: "salles-a-manger",
    createdAt: "2024-10-08",
    description:
      "Table ronde plateau travertin sur pied cannelé en bois, entourée de fauteuils bouclé enveloppants. Convivialité et caractère naturel.",
    specs: [
      { label: "Plateau", value: "Travertin / verre" },
      { label: "Structure", value: "Bois cannelé" },
      { label: "Chaises", value: "4 fauteuils" },
      { label: "Forme", value: "Ronde" },
    ],
    images: ["/products/dining-round-marble-oak.jpg"],
  },
  {
    id: "p-sam-05",
    slug: "table-bois-verre-vintage",
    name: "Table Bois & Verre Vintage",
    category: "salles-a-manger",
    createdAt: "2024-09-30",
    description:
      "Table en bois chaleureux protégée par un plateau de verre, au piètement compas vintage, avec fauteuils crème à accoudoirs bois.",
    specs: [
      { label: "Plateau", value: "Bois + verre" },
      { label: "Structure", value: "Bois massif" },
      { label: "Chaises", value: "Fauteuils crème" },
      { label: "Forme", value: "Rectangulaire" },
    ],
    images: ["/products/dining-wood-table.jpg"],
  },
  {
    id: "p-sam-06",
    slug: "table-ronde-noire-design",
    name: "Table Ronde Noire Design",
    category: "salles-a-manger",
    createdAt: "2024-09-12",
    description:
      "Table ronde plateau verre fumé et base cannelée noire, accompagnée de chaises bouclé claires. Contraste moderne et élégant.",
    specs: [
      { label: "Plateau", value: "Verre fumé" },
      { label: "Structure", value: "Bois laqué noir" },
      { label: "Chaises", value: "4 chaises bouclé" },
      { label: "Forme", value: "Ronde" },
    ],
    images: ["/products/round-glass-table.jpg"],
  },
  {
    id: "p-sam-07",
    slug: "table-noire-verre-6-places",
    name: "Table Noire Verre 6 Places",
    category: "salles-a-manger",
    createdAt: "2024-08-28",
    description:
      "Table rectangulaire plateau verre noir et structure métal fin, entourée de fauteuils bouclé arrondis. Sobriété et raffinement.",
    specs: [
      { label: "Plateau", value: "Verre noir" },
      { label: "Structure", value: "Métal" },
      { label: "Chaises", value: "6 fauteuils bouclé" },
      { label: "Forme", value: "Rectangulaire" },
    ],
    images: ["/products/dining-black-glass.jpg"],
  },
  {
    id: "p-sam-08",
    slug: "table-geant",
    name: "Table Géant",
    category: "salles-a-manger",
    featured: true,
    createdAt: "2024-12-07",
    description:
      "Table géante généreuse, idéale pour les grandes tablées familiales et les repas de fête. Plateau spacieux et structure robuste pour accueillir vos invités dans un cadre convivial et chaleureux.",
    specs: [
      { label: "Plateau", value: "Spacieux" },
      { label: "Structure", value: "Bois massif" },
      { label: "Forme", value: "Rectangulaire" },
      { label: "Places", value: "Grande tablée" },
    ],
    images: [
      "/products/Table géant.jpeg",
      "/products/Table géant 1.jpeg",
      "/products/Table géant marron.jpeg",
    ],
  },
  {
    id: "p-sam-09",
    slug: "table-rameda",
    name: "Table Rameda",
    category: "salles-a-manger",
    createdAt: "2024-12-11",
    description:
      "Table Rameda au design intemporel, plateau spacieux et piètement robuste. Une pièce maîtresse pour vos repas conviviaux au quotidien, alliant élégance discrète et fonctionnalité durable.",
    specs: [
      { label: "Plateau", value: "Bois noble" },
      { label: "Structure", value: "Bois massif" },
      { label: "Forme", value: "Rectangulaire" },
      { label: "Places", value: "6 places" },
    ],
    images: ["/products/Table rameda.jpeg", "/products/Table rameda 1.jpeg"],
  },

  // ---- DECORATION ----
  {
    id: "p-deco-01",
    slug: "miroirs-organiques-noyer",
    name: "Miroirs Organiques Noyer",
    category: "decoration",
    featured: true,
    createdAt: "2024-11-10",
    description:
      "Trio de miroirs aux formes organiques encadrés de bois de noyer. Une composition murale moderne qui apporte profondeur et lumière.",
    specs: [
      { label: "Matière", value: "Bois de noyer" },
      { label: "Forme", value: "Organique" },
      { label: "Vendu", value: "Lot de 3" },
      { label: "Usage", value: "Décoration murale" },
    ],
    images: ["/products/mirrors-walnut.jpg"],
  },
  {
    id: "p-deco-02",
    slug: "vitrine-bois-blanc",
    name: "Vitrine Bois & Blanc",
    category: "decoration",
    createdAt: "2024-10-05",
    description:
      "Vitrine deux portes vitrées avec étagères en verre et tiroirs, alliant bois cannelé et laque blanche. Idéale pour exposer vaisselle et objets.",
    specs: [
      { label: "Matière", value: "Bois & laque" },
      { label: "Portes", value: "2 portes vitrées" },
      { label: "Rangement", value: "Étagères + tiroirs" },
      { label: "Couleur", value: "Blanc / Noyer" },
    ],
    images: ["/products/vitrine-cabinet.jpg"],
  },
  {
    id: "p-deco-03",
    slug: "table-basse-ovale-bois",
    name: "Table Basse Ovale Bois",
    category: "decoration",
    featured: true,
    createdAt: "2024-09-20",
    description:
      "Table basse ovale à double plateau, bois chaleureux et base cannelée crème avec rangement. Une pièce centrale élégante pour le salon.",
    specs: [
      { label: "Matière", value: "Bois & laque" },
      { label: "Forme", value: "Ovale" },
      { label: "Rangement", value: "Tiroir intégré" },
      { label: "Couleur", value: "Noyer / Crème" },
    ],
    images: ["/products/coffee-table-oval.jpg"],
  },
  {
    id: "p-deco-04",
    slug: "buffet-blanc-miroir",
    name: "Buffet Blanc & Miroir",
    category: "decoration",
    createdAt: "2024-08-15",
    description:
      "Buffet laqué blanc aux lignes douces avec vitrine, surmonté d'un miroir sculptural. Rangement raffiné pour salon ou entrée.",
    specs: [
      { label: "Matière", value: "Laque blanche" },
      { label: "Rangement", value: "Portes & vitrine" },
      { label: "Miroir", value: "Forme organique" },
      { label: "Couleur", value: "Blanc / Noir" },
    ],
    images: ["/products/buffet-white-mirror.jpg"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getFeaturedProducts(limit = 6) {
  return PRODUCTS.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}
