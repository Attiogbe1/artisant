import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetailLayout } from "@/components/product-detail-layout"
import { Sparkles, Scissors, Package, CheckCircle } from "lucide-react"

export default function AccessoiresPage() {
  const product = {
    title: "Accessoires Artisanaux",
    description:
      "Sacs, chaussures, bijoux et accessoires brodés sur mesure, créés avec passion par nos artisans pour sublimer votre style.",
    price: "À partir de 8 000 FCFA",
    mainImage: "/accessoir10.jpg",

    gallery: [
      {
        image: "/accesoir6.jpg",
        title: "chapaux brodés",
         description: "chapeaux traditionnels ronds en tissu tissé, posés sur une table à côté d’une machine à coudre, suggérant un travail artisanal. L’un est de couleur blanc cassé avec des motifs rayés bordeaux, tandis que l’autre est ocre avec des bandes marron et claires. Leur forme structurée et leurs motifs simples mettent en valeur un savoir-faire textile traditionnel et authentique.",

      },
      {
        image: " /chassure_broder.jpeg  ",
        title: "chapaux brodés",
        description: "Ensemble traditionnel composé de bottines montantes bleu foncé et d’un chapeau assorti, ornés de broderies argentées et de détails dorés, offrant un style élégant et mettant en valeur un savoir-faire artisanal de qualité.",
      },
      {
        image: " /chapeux1.jpeg",
        title: "chapaux brodés",
        description: "chapeaux traditionnels ronds en tissu tissé, posés sur une table à côté d’une machine à coudre, suggérant un travail artisanal. L’un est de couleur blanc cassé avec des motifs rayés bordeaux, tandis que l’autre est ocre avec des bandes marron et claires. Leur forme structurée et leurs motifs simples mettent en valeur un savoir-faire textile traditionnel et authentique.",
      },
      {
        image: "/chapaux.jpeg",
        title: "chapaux brodés",
        description: "chapeaux traditionnels ronds en tissu tissé, posés sur une table à côté d’une machine à coudre, suggérant un travail artisanal. L’un est de couleur blanc cassé avec des motifs rayés bordeaux, tandis que l’autre est ocre avec des bandes marron et claires. Leur forme structurée et leurs motifs simples mettent en valeur un savoir-faire textile traditionnel et authentique.",

      },
      {
        image: "/accessoir212.jpeg",
        title: "chapaux brodés",
         description: "un chapeau traditionnel accompagné de son complément assorti, tous deux confectionnés en tissu tissé. Les motifs rayés et les couleurs harmonisées donnent un ensemble élégant et cohérent. Réalisé de manière artisanale, cet ensemble reflète un style culturel authentique et un savoir-faire soigné, souvent destiné aux occasions spéciales ou aux tenues traditionnelles."

      },
      {
        image: "/chapaux22.jpeg",
        title: "chapaux brodés",
        description: "chapeaux traditionnels ronds en tissu tissé, posés sur une table à côté d’une machine à coudre, suggérant un travail artisanal. L’un est de couleur blanc cassé avec des motifs rayés bordeaux, tandis que l’autre est ocre avec des bandes marron et claires. Leur forme structurée et leurs motifs simples mettent en valeur un savoir-faire textile traditionnel et authentique.",

      },
      {
        image: "/accesoir.jpeg",
        title: "chapaux brodés",
        description: "chapeaux traditionnels ronds en tissu tissé, posés sur une table à côté d’une machine à coudre, suggérant un travail artisanal. L’un est de couleur blanc cassé avec des motifs rayés bordeaux, tandis que l’autre est ocre avec des bandes marron et claires. Leur forme structurée et leurs motifs simples mettent en valeur un savoir-faire textile traditionnel et authentique.",

      },
      {
        image: "/accesooir55.jpeg",
        title: "chapaux brodés",
        description: "chapeaux traditionnels ronds en tissu tissé, posés sur une table à côté d’une machine à coudre, suggérant un travail artisanal. L’un est de couleur blanc cassé avec des motifs rayés bordeaux, tandis que l’autre est ocre avec des bandes marron et claires. Leur forme structurée et leurs motifs simples mettent en valeur un savoir-faire textile traditionnel et authentique.",

      },
      {
        image: "/accessoir77.jpeg",
        title: "chapaux brodés",
        description: "chapeaux traditionnels ronds en tissu tissé, posés sur une table à côté d’une machine à coudre, suggérant un travail artisanal. L’un est de couleur blanc cassé avec des motifs rayés bordeaux, tandis que l’autre est ocre avec des bandes marron et claires. Leur forme structurée et leurs motifs simples mettent en valeur un savoir-faire textile traditionnel et authentique.",

      },
    ],

    fabricationSteps: [
      {
        step: 1,
        title: "Conception du design",
        description: "Création du design personnalisé selon vos préférences",
        iconName: "Sparkles",
        image: "/design-concept-sketching-accessories-creative-proc.jpg",
      },
      {
        step: 2,
        title: "Sélection des matériaux",
        description: "Choix des tissus, cuirs et matériaux de qualité",
        iconName: "Package",
        image: "/material-selection-quality-fabrics-leather-textil.jpg",
      },
      {
        step: 3,
        title: "Broderie et décoration",
        description: "Application méticuleuse des broderies et ornements",
        iconName: "Scissors",
        image: "/embroidery-decoration-accessories-detailed-handwor.jpg",
      },
      {
        step: 4,
        title: "Assemblage artisanal",
        description: "Montage soigné à la main par nos artisans",
        iconName: "Sparkles",
        image: "/handcrafted-assembly-accessories-artisan-work.jpg",
      },
      {
        step: 5,
        title: "Contrôle qualité",
        description: "Vérification minutieuse de chaque pièce",
        iconName: "CheckCircle",
        image: "/quality-control-finished-product-inspection.jpg",
      },
    ],

    features: [
      "Fait main par des artisans qualifiés",
      "Matériaux de qualité premium",
      "Designs personnalisables",
      "Pièces uniques et authentiques",
      "Broderies traditionnelles",
      "Large gamme de couleurs",
      "Emballage cadeau disponible",
      "Livraison sous 5 à 10 jours",
    ],

    sizes: ["Unique", "Petit", "Moyen", "Grand", "Sur mesure"],

    colors: [
      { name: "Noir classique", value: "#000000" },
      { name: "Marron cuir", value: "#78350F" },
      { name: "Rouge passion", value: "#DC2626" },
      { name: "Bleu océan", value: "#1E40AF" },
      { name: "Vert émeraude", value: "#059669" },
      { name: "Or métallique", value: "#D4AF37" },
    ],
  }

  return (
    <>
      <Navigation />
      <ProductDetailLayout product={product} category="accessoires" />
      <Footer />
    </>
  )
}
