import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetailLayout } from "@/components/product-detail-layout"
import { Sparkles, Users, Scissors, Palette } from "lucide-react"

export default function PagnesPage() {
  const product = {
    title: "Pagnes Tissés & Brodés",
    description:
      "Pagnes kanvor authentiques tissés à la main et brodés avec des motifs traditionnels, incarnant l'excellence de l'artisanat béninois.",
    price: "À partir de 15 000 FCFA",
    mainImage: "/handwoven-kanvor-fabric-embroidered.jpg",

    gallery: [
      {
        image: "/kanvor-handwoven-traditional-pattern-benin-textil.jpg",
        title: "Kanvor traditionnel",
        description: "Tissage à la main avec motifs ancestraux",
      },
      {
        image: "/embroidered-kanvor-modern-design-fusion-traditiona.jpg",
        title: "Kanvor brodé moderne",
        description: "Fusion tradition et modernité",
      },
      {
        image: "/colorful-kanvor-geometric-patterns-traditional-afr.jpg",
        title: "Kanvor géométrique",
        description: "Motifs géométriques colorés",
      },
      {
        image: "/kanvor-wrapper-ceremonial-use-traditional-african-.jpg",
        title: "Pagne de cérémonie",
        description: "Pour vos événements traditionnels",
      },
      {
        image: "/kanvor-striped-elegant-design-handwoven-textile.jpg",
        title: "Kanvor rayé",
        description: "Élégance intemporelle",
      },
      {
        image: "/embroidered-border-kanvor-luxury-traditional-texti.jpg",
        title: "Kanvor bordures brodées",
        description: "Luxe et raffinement",
      },
    ],

    fabricationSteps: [
      {
        step: 1,
        title: "Préparation du fil",
        description: "Sélection et préparation des fils de coton de qualité pour le tissage",
        iconName: "Sparkles",
        image: "/cotton-thread-preparation-weaving-natural-fibers.jpg",
      },
      {
        step: 2,
        title: "Tissage traditionnel",
        description: "Tissage manuel sur métier traditionnel par nos artisans expérimentés",
        iconName: "Users",
        image: "/traditional-loom-weaving-process-artisan-at-work.jpg",
      },
      {
        step: 3,
        title: "Création des motifs",
        description: "Intégration des motifs traditionnels pendant le tissage",
        iconName: "Palette",
        image: "/pattern-creation-traditional-motifs-weaving-proces.jpg",
      },
      {
        step: 4,
        title: "Broderie complémentaire",
        description: "Ajout de broderies pour enrichir le design du pagne",
        iconName: "Scissors",
        image: "/complementary-embroidery-kanvor-traditional-patter.jpg",
      },
      {
        step: 5,
        title: "Finitions et qualité",
        description: "Finitions soignées et contrôle qualité strict",
        iconName: "Sparkles",
        image: "/finishing-quality-check-kanvor-handwoven-textile.jpg",
      },
    ],

    features: [
      "100% tissé à la main sur métier traditionnel",
      "Coton de qualité supérieure",
      "Motifs traditionnels béninois authentiques",
      "Broderies personnalisables",
      "Dimensions: 2m x 1,20m (standard)",
      "Résistant et durable",
      "Entretien facile en machine",
      "Livraison sous 10 à 21 jours",
    ],

    sizes: ["Standard (2m x 1,20m)", "Grand (3m x 1,50m)", "Sur mesure"],

    colors: [
      { name: "Indigo profond", value: "#1E3A8A" },
      { name: "Terracotta", value: "#C2410C" },
      { name: "Vert forêt", value: "#064E3B" },
      { name: "Jaune or", value: "#CA8A04" },
      { name: "Rouge bordeaux", value: "#991B1B" },
      { name: "Multicolore", value: "linear-gradient(to right, #DC2626, #D97706, #059669)" },
    ],
  }

  return (
    <>
      <Navigation />
      <ProductDetailLayout product={product} category="pagnes" />
      <Footer />
    </>
  )
}
