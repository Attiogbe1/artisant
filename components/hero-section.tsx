import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        <img
          src="/traditional-yoruba-embroidery-workshop-artisan-ben.jpg"
          alt="Atelier de broderie traditionnelle"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">LE SAVOIR GROUP</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 italic">
            Artisanat – Broderie – Mode Identitaire – Formations
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Préserver l'héritage culturel Yoruba à travers une chaîne artisanale moderne et structurée
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg">
              <Link href="#contexte">
                Comprendre le projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-2 bg-transparent">
              <Link href="#produits">Produits & Services</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
