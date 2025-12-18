import { Card } from "@/components/ui/card"
import { Award, Users, Target } from "lucide-react"

export function TeamSection() {
  const founders = [
    {
      name: "Fondateur 1",
      role: "Direction Générale",
      expertise: "15 ans d'expérience en développement d'entreprise",
      image: "/african-business-leader-professional.jpg",
    },
    {
      name: "Fondateur 2",
      role: "Direction Artistique",
      expertise: "Maître artisan en broderie Yoruba traditionnelle",
      image: "/african-master-artisan-craftsperson.jpg",
    },
    {
      name: "Fondateur 3",
      role: "Direction des Opérations",
      expertise: "Expert en gestion de production textile",
      image: "/african-operations-manager-professional.jpg",
    },
  ]

  const strengths = [
    {
      icon: Award,
      title: "Expertise reconnue",
      description: "Plus de 20 ans d'expérience cumulée dans l'artisanat traditionnel",
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "25 artisans formés et une équipe de gestion expérimentée",
    },
    {
      icon: Target,
      title: "Vision claire",
      description: "Objectifs stratégiques précis et feuille de route détaillée",
    },
  ]

  return (
    <section id="equipe" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Notre Équipe</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Une équipe passionnée et expérimentée dédiée à l'excellence artisanale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-secondary font-semibold mb-3">{founder.role}</p>
                <p className="text-muted-foreground leading-relaxed">{founder.expertise}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <strength.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{strength.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
