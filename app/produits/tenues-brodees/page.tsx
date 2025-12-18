import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetailLayout } from "@/components/product-detail-layout"
import { Sparkles, Users, Calendar, Ruler } from "lucide-react"

export default function TenuesBrodeesPage() {
  const product = {
    title: "Tenues Brodées Premium",
    description:
      "Vêtements d'exception avec broderie traditionnelle Yoruba raffinée, alliant savoir-faire ancestral et design contemporain.",
    price: "À partir de 25 000 FCFA",
    mainImage: "/premium-yoruba-embroidered-traditional-african-clo.jpg",

    gallery: [
      {
        image: "/traditional-yoruba-agbada-with-intricate-embroider.jpg",
        title: "Agbada brodé",
        description: "Tenue traditionnelle masculine avec motifs Yoruba",
      },
      {
        image: "/elegant-embroidered-boubou-womens-african-dress-tr.jpg",
        title: "Boubou féminin",
        description: "Élégance et sophistication pour femmes",
      },
      {
        image: "/modern-dashiki-shirt-with-traditional-embroidery-c.jpg",
        title: "Dashiki moderne",
        description: "Style contemporain avec broderie artisanale",
      },
      {
        image: "/ceremonial-kaftan-with-gold-embroidery-luxury-afri.jpg",
        title: "Caftan cérémoniel",
        description: "Pour vos événements spéciaux",
      },
      {
        image: "/casual-embroidered-african-shirt-modern-traditiona.jpg",
        title: "Chemise brodée",
        description: "Élégance décontractée au quotidien",
      },
      {
        image: "/elegant-african-dress-with-embroidery-womens-forma.jpg",
        title: "Robe brodée",
        description: "Féminité et tradition réunies",
      },
    ],

 fabricationSteps: [
  {
    step: 1,
    title: "Sélection du tissu",
    description: "Choix minutieux de tissus de qualité supérieure adaptés à la broderie traditionnelle",
    iconName: "Sparkles",
    image: "/quality-african-fabric-textile-selection-colorful-.jpg",
  },
  {
    step: 2,
    title: "Traçage des motifs",
    description: "Dessin précis des motifs traditionnels Yoruba par nos maîtres artisans",
    iconName: "Ruler",
    image: "/artisan-drawing-traditional-yoruba-patterns-on-fab.jpg",
  },
  {
    step: 3,
    title: "Broderie traditionnelle",
    description: "Broderie minutieuse à la machine professionnelle avec fils de qualité",
    iconName: "Sparkles",
    image: "/embroidery-machine-working-on-traditional-african-.jpg",
  },
  {
    step: 4,
    title: "Coupe et assemblage",
    description: "Découpe et couture du vêtement par nos tailleurs expérimentés",
    iconName: "Users",
    image: "/tailor-cutting-and-sewing-african-garment-traditio.jpg",
  },
  {
    step: 5,
    title: "Finitions",
    description: "Retouches finales, repassage et contrôle qualité rigoureux",
    iconName: "Calendar",
    image: "/quality-control-finishing-traditional-african-embr.jpg",
  },
]
,

    features: [
      "Broderie traditionnelle Yoruba authentique",
      "Tissus de qualité supérieure importés",
      "Fait main par des artisans qualifiés",
      "Designs personnalisables sur demande",
      "Tailles disponibles: XS à 5XL",
      "Délai de fabrication: 7 à 14 jours",
      "Service de retouches inclus",
      "Garantie satisfaction 100%",
    ],

    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],

    colors: [
      { name: "Blanc traditionnel", value: "#FFFFFF" },
      { name: "Noir élégant", value: "#1A1A1A" },
      { name: "Bleu royal", value: "#1E3A8A" },
      { name: "Rouge cérémoniel", value: "#DC2626" },
      { name: "Or premium", value: "#D4AF37" },
      { name: "Vert émeraude", value: "#059669" },
    ],
  }

  return (
    <>
      <Navigation />
      <ProductDetailLayout product={product} category="tenues-brodees" />
      <Footer />
    </>
  )
}
