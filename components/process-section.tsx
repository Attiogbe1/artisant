import { Card } from "@/components/ui/card"
import { Lightbulb, Package, Scissors, Cpu, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Conception & Design",
      description: "Création de motifs traditionnels Yoruba et designs modernes",
    },
    {
      icon: Package,
      title: "Choix des matières",
      description: "Sélection rigoureuse de tissus et matériaux de qualité",
    },
    {
      icon: Scissors,
      title: "Broderie traditionnelle",
      description: "Broderie artisanale à la main selon les techniques ancestrales",
    },
    {
      icon: Cpu,
      title: "Broderie machine",
      description: "Broderie de précision avec équipements professionnels",
    },
    {
      icon: CheckCircle,
      title: "Contrôle qualité",
      description: "Vérification minutieuse de chaque pièce avant livraison",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Processus de Production
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Un processus rigoureux qui allie savoir-faire traditionnel et technologies modernes
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img src="/embroidery-machine-professional-equipment.jpg" alt="Machine de broderie" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">Machine de broderie professionnelle</p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img src="/traditional-handloom-weaving-workshop.jpg" alt="Atelier de tissage" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">Atelier de tissage traditionnel</p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img src="/artisan-working-embroidery-handcraft.jpg" alt="Artisan au travail" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">Artisans qualifiés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
