import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetailLayout } from "@/components/product-detail-layout"
import { Sparkles, MessageSquare, Zap, CheckCircle } from "lucide-react"

export default function BroderiePersonnaliseePage() {
  const product = {
    title: "Broderie Personnalisée",
    description:
      "Service de broderie sur mesure pour vos créations. Logos, textes, motifs personnalisés sur tous types de textiles.",
    price: "Sur devis",
    mainImage: "/broderi_peronnlie5545.jpeg",

    gallery: [
      {
        image: "/broderi_accesoir1.jpg",
        title: "Broderie de logos",
        description: "Une broderie personnalisée réalisée avec soin sur un tissu élégant. Les motifs sont détaillés et précis, comprenant des formes, des textes ou des symboles uniques selon les besoins du client. Les fils sont choisis avec attention pour leurs couleurs et leur texture. L’image met en valeur la finesse des points et l’aspect artisanal du travail, reflétant élégance, originalité et identité unique, appliquée sur des vêtements, accessoires ou objets décoratifs.",
      },
      {
        image: "/brooderie_personnalied.jpeg",
        title: "Textes personnalisés",
        description: "Une broderie personnalisée réalisée avec soin sur un tissu élégant. Les motifs sont détaillés et précis, comprenant des formes, des textes ou des symboles uniques selon les besoins du client. Les fils sont choisis avec attention pour leurs couleurs et leur texture. L’image met en valeur la finesse des points et l’aspect artisanal du travail, reflétant élégance, originalité et identité unique, appliquée sur des vêtements, accessoires ou objets décoratifs.",
      },
      {
        image: "/broderi_personaliser.jpeg",
        title: "Designs artistiques",
        description: "Une broderie personnalisée réalisée avec soin sur un tissu élégant. Les motifs sont détaillés et précis, comprenant des formes, des textes ou des symboles uniques selon les besoins du client. Les fils sont choisis avec attention pour leurs couleurs et leur texture. L’image met en valeur la finesse des points et l’aspect artisanal du travail, reflétant élégance, originalité et identité unique, appliquée sur des vêtements, accessoires ou objets décoratifs.",
      },
      {
        image: "/broderie_personnaliser.jpeg",
        title: "Uniformes professionnels",
        description: "Une broderie personnalisée réalisée avec soin sur un tissu élégant. Les motifs sont détaillés et précis, comprenant des formes, des textes ou des symboles uniques selon les besoins du client. Les fils sont choisis avec attention pour leurs couleurs et leur texture. L’image met en valeur la finesse des points et l’aspect artisanal du travail, reflétant élégance, originalité et identité unique, appliquée sur des vêtements, accessoires ou objets décoratifs.",
      },
      {
        image: "/broderie_personnaliser11.jpeg",
        title: "Monogrammes mariage",
        description: "Une broderie personnalisée réalisée avec soin sur un tissu élégant. Les motifs sont détaillés et précis, comprenant des formes, des textes ou des symboles uniques selon les besoins du client. Les fils sont choisis avec attention pour leurs couleurs et leur texture. L’image met en valeur la finesse des points et l’aspect artisanal du travail, reflétant élégance, originalité et identité unique, appliquée sur des vêtements, accessoires ou objets décoratifs.",
      },
      {
        image: "/broderie_personnaliser99.jpeg",
        title: "Équipes sportives",
        description: "Une broderie personnalisée réalisée avec soin sur un tissu élégant. Les motifs sont détaillés et précis, comprenant des formes, des textes ou des symboles uniques selon les besoins du client. Les fils sont choisis avec attention pour leurs couleurs et leur texture. L’image met en valeur la finesse des points et l’aspect artisanal du travail, reflétant élégance, originalité et identité unique, appliquée sur des vêtements, accessoires ou objets décoratifs.",
      },
    ],

    fabricationSteps: [
      {
        step: 1,
        title: "Consultation initiale",
        description: "Discussion de votre projet et de vos besoins spécifiques",
          iconName: "MessageSquare",
        image: "/initial-consultation-project-discussion-client-mee.jpg",
      },
      {
        step: 2,
        title: "Création du design",
        description: "Conception numérique de votre motif personnalisé",
        iconName: "Sparkles",
        image: "/digital-design-creation-embroidery-software.jpg",
      },
      {
        step: 3,
        title: "Validation du visuel",
        description: "Présentation et validation du design avant production",
        iconName: "CheckCircle",
        image: "/design-approval-visualization-mockup-presentation.jpg",
      },
      {
        step: 4,
        title: "Broderie sur machine",
        description: "Réalisation précise sur nos machines professionnelles",
        iconName: "Zap",
        image: "/professional-embroidery-machine-work-production.jpg",
      },
      {
        step: 5,
        title: "Livraison",
        description: "Remise de votre produit brodé finalisé",
        iconName: "CheckCircle",
        image: "/finished-product-delivery-packaging-presentation.jpg",
      },
    ],

    features: [
      "Tous types de textiles acceptés",
      "Logos professionnels haute qualité",
      "Textes en plusieurs langues",
      "Large choix de couleurs de fils",
      "Broderie simple ou multicouche",
      "Devis gratuit sous 24h",
      "Petites et grandes séries",
      "Service express disponible",
    ],

    sizes: ["Petit (5-10cm)", "Moyen (10-20cm)", "Grand (20-30cm)", "Très grand (30cm+)", "Sur mesure"],

    colors: [
      { name: "Or premium", value: "#D4AF37" },
      { name: "Argent", value: "#C0C0C0" },
      { name: "Noir", value: "#000000" },
      { name: "Blanc", value: "#FFFFFF" },
      { name: "Rouge", value: "#DC2626" },
      { name: "Bleu", value: "#1E40AF" },
    ],
  }

  return (
    <>
      <Navigation />
      <ProductDetailLayout product={product} category="broderie-personnalisee" />
      <Footer />
    </>
  )
}
