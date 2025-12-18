import { AlertCircle, TrendingDown, Users, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ContextSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Manque d'authenticité",
      description: "Produits de mode identitaire peu authentiques et standardisés sur le marché",
    },
    {
      icon: TrendingDown,
      title: "Chaîne peu structurée",
      description: "Filière artisanale désorganisée avec faible traçabilité et qualité variable",
    },
    {
      icon: Users,
      title: "Accès limité aux formations",
      description: "Les femmes artisanes ont peu d'opportunités de formation professionnelle",
    },
    {
      icon: Globe,
      title: "Demande non satisfaite",
      description: "Forte demande de la diaspora et des clients urbains non comblée",
    },
  ]

  return (
    <section id="contexte" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Contexte & Problématique
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Le marché de l'artisanat traditionnel fait face à des défis structurels majeurs qui limitent son potentiel
            économique et culturel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <problem.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
