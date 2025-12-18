import { Card } from "@/components/ui/card"
import { Heart, Sparkles, Users, TrendingUp } from "lucide-react"

export function ImpactSection() {
  const impacts = [
    {
      icon: Sparkles,
      title: "Transmission culturelle",
      description: "Préservation et transmission du savoir-faire Yoruba aux nouvelles générations",
      stat: "15 techniques ancestrales documentées",
    },
    {
      icon: Users,
      title: "Autonomisation des femmes",
      description: "60% de notre équipe est féminine avec des formations continues",
      stat: "18 femmes formées en 2024",
    },
    {
      icon: Heart,
      title: "Préservation du patrimoine",
      description: "Protection et valorisation du pagne tissé kanvor traditionnel",
      stat: "250+ pièces produites",
    },
    {
      icon: TrendingUp,
      title: "Impact économique local",
      description: "Création d'emplois et développement de l'économie artisanale",
      stat: "25 emplois directs créés",
    },
  ]

  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Impact Social & Culturel
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Au-delà du business, notre mission est de créer un impact durable sur notre communauté
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <impact.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">{impact.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{impact.description}</p>
              <p className="text-primary font-bold text-lg">{impact.stat}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 relative">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Impact communautaire"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end">
            <div className="p-8 text-white">
              <p className="text-2xl font-serif font-bold mb-2">Ensemble, nous construisons un avenir meilleur</p>
              <p className="text-lg">Chaque création contribue à la préservation de notre héritage culturel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
