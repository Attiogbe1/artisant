import { CheckCircle2 } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    "Structuration d'une chaîne artisanale moderne avec traçabilité complète",
    "Broderie traditionnelle Yoruba revisitée avec techniques contemporaines",
    "Production organisée et contrôle qualité rigoureux",
    "Formations qualifiantes pour l'autonomisation des femmes artisanes",
    "Double canal de distribution : boutique physique et vente digitale",
  ]

  return (
    <section id="solution" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Notre Solution</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Une approche intégrée qui combine tradition et modernité pour créer une filière artisanale durable et
              rentable
            </p>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/yoruba-embroidery-detailed-pattern.jpg" alt="Broderie Yoruba" className="rounded-lg shadow-lg" />
              <img src="/traditional-woven-kanvor-fabric.jpg" alt="Pagne tissé Kanvor" className="rounded-lg shadow-lg mt-8" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
