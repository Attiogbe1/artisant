import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetailLayout } from "@/components/product-detail-layout"
import { BookOpen, Users, Award, TrendingUp } from "lucide-react"

export default function FormationsPage() {
  const product = {
    title: "Formations Professionnelles",
    description:
      "Formation complète en broderie et artisanat textile. Développez vos compétences et lancez votre activité artisanale.",
    price: "50 000 FCFA / session",
    mainImage: "/artisan-training-workshop-embroidery-professional.jpg",

    gallery: [
      {
        image: "/embroidery-training-hands-on-practice-learning.jpg",
        title: "Formation broderie",
        description: "Apprentissage pratique intensif",
      },
      {
        image: "/sewing-training-machine-operation-professional.jpg",
        title: "Formation couture",
        description: "Maîtrise des machines à coudre",
      },
      {
        image: "/textile-design-training-patterns-creative-process.jpg",
        title: "Design textile",
        description: "Création de motifs et patterns",
      },
      {
        image: "/business-training-artisan-entrepreneurship-skills.jpg",
        title: "Entrepreneuriat artisanal",
        description: "Gestion de votre activité",
      },
      {
        image: "/group-training-collaborative-learning-workshop.jpg",
        title: "Formation en groupe",
        description: "Apprentissage collaboratif",
      },
      {
        image: "/certificate-graduation-training-completion-diploma.jpg",
        title: "Certification",
        description: "Diplôme de fin de formation",
      },
    ],

    fabricationSteps: [
      {
        step: 1,
        title: "Module 1: Bases de la broderie",
        description: "Introduction aux techniques fondamentales de broderie traditionnelle",
        iconName: "BookOpen",
        image: "/basic-embroidery-techniques-training-fundamentals.jpg",
      },
      {
        step: 2,
        title: "Module 2: Utilisation des machines",
        description: "Formation à l'utilisation professionnelle des machines à broder",
        iconName: "Users",
        image: "/machine-operation-training-professional-embroidery.jpg",
      },
      {
        step: 3,
        title: "Module 3: Création de designs",
        description: "Conception et numérisation de motifs personnalisés",
        iconName: "Award",
        image: "/design-creation-pattern-making-digital-embroidery.jpg",
      },
      {
        step: 4,
        title: "Module 4: Production et qualité",
        description: "Gestion de production et contrôle qualité",
        iconName: "TrendingUp",
        image: "/production-management-quality-control-standards.jpg",
      },
      {
        step: 5,
        title: "Module 5: Entrepreneuriat",
        description: "Lancement et gestion de votre entreprise artisanale",
        iconName: "Award",
        image: "/entrepreneurship-business-management-training-star.jpg",
      },
    ],

    features: [
      "Formation théorique et pratique",
      "Durée: 3 mois (12 semaines)",
      "Horaires flexibles disponibles",
      "Petit groupe: 10 personnes max",
      "Matériel de formation fourni",
      "Certificat de formation délivré",
      "Suivi post-formation gratuit",
      "Aide à l'installation professionnelle",
    ],

    sizes: ["Formation complète (3 mois)", "Formation courte (1 mois)", "Modules à la carte", "Formation sur mesure"],

    colors: [
      { name: "Niveau débutant", value: "#22C55E" },
      { name: "Niveau intermédiaire", value: "#F59E0B" },
      { name: "Niveau avancé", value: "#DC2626" },
      { name: "Formation pro", value: "#8B5CF6" },
    ],
  }

  return (
    <>
      <Navigation />
      <ProductDetailLayout product={product} category="formations" />
      <Footer />
    </>
  )
}
