import type { Showroom } from "./types";

export const SITE = {
  name: "Bergachi Meubles",
  phone: "50 807 859",
  phoneIntl: "+216 50 807 859",
  whatsapp: "21650807859",
  email: "abergachi@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100064514840260",
  description:
    "Bergachi Meubles — Salons, chambres, salles à manger et décoration. Mobilier moderne et chaleureux en Tunisie. Showrooms à Bizerte et Tunis.",
};

export const SHOWROOMS: Showroom[] = [
  {
    name: "Showroom Bizerte",
    address: "Menzel Jemil, Bizerte 7080",
    city: "Bizerte, Tunisie",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.839894895743!2d9.924071699999999!3d37.2277755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2e00cad5078c3%3A0x9cd836a9dcf51306!2sBergachi%20meubles!5e0!3m2!1sfr!2stn!4v1786210430290!5m2!1sfr!2stn",
  },
  {
    name: "Showroom Tunis",
    address: "Ettadhamen Mnihla, Ariana",
    city: "Tunis, Tunisie",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.763707557182!2d10.1128739754923!3d36.872074372226635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cd965f7db217%3A0x298dc9df5a739703!2sBergachi%20Meuble!5e0!3m2!1sfr!2stn!4v1786210462703!5m2!1sfr!2stn",
  },
];

export function waLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
