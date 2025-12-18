import { Card } from "@/components/ui/card"
import { Target, Rocket, Users, Globe } from "lucide-react"

export function VisionSection() {
  const objectives = [
    {
      icon: Users,
      title: "Former 30 artisans",
      description: "Programme de formation intensif pour développer les compétences",
      timeline: "Q1-Q2 2025",
    },
    {
      icon: Rocket,
      title: "Tripler les ventes",
      description: "Objectif de 1,5M FCFA de revenus mensuels",
      timeline: "Fin 2025",
    },
    {
      icon: Globe,
      title: "Lancer le e-commerce",
      description: "Plateforme en ligne pour toucher la diaspora",
      timeline: "Q3 2025",
    },
    {
      icon: Target,
      title: "Structurer la production",
      description: "Système de gestion et traçabilité complet",
      timeline: "Q4 2025",
    },
  ]

  return (
    <section id="vision" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Vision & Objectifs 2025-2026
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Une feuille de route ambitieuse pour devenir la référence de l'artisanat identitaire en Afrique de l'Ouest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {objectives.map((objective, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <objective.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold mb-2">{objective.title}</h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{objective.description}</p>
                  <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    {objective.timeline}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-12 bg-primary text-primary-foreground max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Notre ambition</h3>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Devenir la référence régionale en matière d'artisanat identitaire, en combinant excellence artisanale,
            impact social et viabilité économique pour inspirer une nouvelle génération d'entrepreneurs culturels.
          </p>
        </Card>
      </div>
    </section>
  )
}
