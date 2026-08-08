import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Bergachi Meubles par téléphone, email ou WhatsApp. Retrouvez nos showrooms à Bizerte et Tunis.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute. Rendez-nous visite dans l'un de nos showrooms ou écrivez-nous."
      />
      <ContactContent />
    </>
  );
}
