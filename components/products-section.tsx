import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Shirt, Scissors, BookOpen, Calendar } from "lucide-react"

export function ProductsSection() {
  const categories = [
    {
      icon: Sparkles,
      title: "Tenues brodées premium",
      description: "Vêtements d'exception avec broderie traditionnelle Yoruba raffinée",
      href: "/produits/tenues-brodees",
      image: "/premium-yoruba-embroidered-traditional-african-clo.jpg",
      price: "À partir de 25 000 FCFA",
    },
    {
      icon: Shirt,
      title: "Pagnes tissés & brodés",
      description: "Pagnes kanvor authentiques tissés à la main et brodés",
      href: "/produits/pagnes",
      image: "/handwoven-kanvor-fabric-embroidered.jpg",
      price: "À partir de 15 000 FCFA",
    },
    {
      icon: Scissors,
      title: "Accessoires artisanaux",
      description: "Sacs, chaussures, bijoux et accessoires brodés sur mesure",
      href: "/produits/accessoires",
      image: "/accessoir10.jpg",
      price: "À partir de 8 000 FCFA",
    },
    {
      icon: Sparkles,
      title: "Broderie personnalisée",
      description: "Service de broderie sur mesure pour vos créations",
      href: "/produits/broderie-personnalisee",
      image: "/broderie1.jpg",
      price: "Sur devis",
    },
    {
      icon: BookOpen,
      title: "Formations professionnelles",
      description: "Formation complète en broderie et artisanat textile",
      href: "/produits/formations",
      image: "/traditional-yoruba-embroidery-workshop-artisan-ben.jpg",
      price: "50 000 FCFA / session",
    },
    {
      icon: Calendar,
      title: "Location de tenues",
      description: "Service de location pour événements et cérémonies",
      href: "/produits/location",
      image: "/elegant-african-dress-with-embroidery-womens-forma.jpg",
      price: "À partir de 5 000 FCFA",
    },
  ]

  return (
    <section id="produits" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Produits & Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Une gamme complète de produits artisanaux et de services pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <category.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                <p className="text-secondary font-semibold mb-4">{category.price}</p>
                <Button asChild variant="outline" className="w-full group bg-transparent">
                  <Link href={category.href}>
                    Voir les détails
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
