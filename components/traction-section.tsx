import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Clock, Star } from "lucide-react"

export function TractionSection() {
  const metrics = [
    {
      icon: DollarSign,
      label: "Revenus mensuels",
      value: "500 000 FCFA",
      trend: "+45% en 6 mois",
    },
    {
      icon: TrendingUp,
      label: "Croissance annuelle",
      value: "180%",
      trend: "Depuis le lancement",
    },
    {
      icon: Clock,
      label: "Délais de livraison",
      value: "7 jours",
      trend: "Réduits de 40%",
    },
    {
      icon: Star,
      label: "Satisfaction client",
      value: "4.8/5",
      trend: "Sur 120+ commandes",
    },
  ]

  const topProducts = [
    { name: "Tenues brodées premium", revenue: "40%" },
    { name: "Pagnes tissés kanvor", revenue: "30%" },
    { name: "Formations professionnelles", revenue: "20%" },
    { name: "Accessoires & broderie sur mesure", revenue: "10%" },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Traction & Résultats
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Des résultats tangibles qui démontrent la viabilité et le potentiel de notre modèle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <p className="font-serif text-3xl font-bold mb-2">{metric.value}</p>
              <p className="text-sm text-secondary font-semibold">{metric.trend}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold mb-6 text-center">Répartition des revenus par catégorie</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{product.name}</span>
                  <span className="font-bold text-secondary">{product.revenue}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full transition-all" style={{ width: product.revenue }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
