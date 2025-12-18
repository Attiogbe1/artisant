"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, Heart, Share2, Check } from "lucide-react"
import { Sparkles, Ruler, Users, Calendar , Scissors, Palette , Star, Shield, Clock } from "lucide-react"
import { BookOpen,  Award, TrendingUp } from "lucide-react"
import {  MessageSquare, Zap,  Package, CheckCircle   } from "lucide-react"




interface ProductImage {
  image: string
  title: string
  description: string
}

interface FabricationStep {
  step: number
  title: string
  description: string
  iconName: string  // <-- remplacer icon
  image: string
}

interface Product {
  title: string
  description: string
  price: string
  mainImage: string
  gallery: ProductImage[]
  fabricationSteps: FabricationStep[]
  features: string[]
  sizes: string[]
  colors: Array<{ name: string; value: string }>
}

interface ProductDetailLayoutProps {
  product: Product
  category: string
}


const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Ruler,
  Users,
  Calendar,
  Scissors,
Palette
, Star,
 Shield,
  Clock,
  BookOpen, 
   Award, 
   TrendingUp,
   MessageSquare,
    Zap, 
    Package,
    CheckCircle,
    
}
export function ProductDetailLayout({ product, category }: ProductDetailLayoutProps) {
  const [selectedImage, setSelectedImage] = useState(product.mainImage)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/#produits" className="hover:text-foreground transition-colors">
            Produits
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </div>
      </div>

      {/* Product Header */}
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/#produits">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Retour aux produits
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <button
                onClick={() => setSelectedImage(product.mainImage)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === product.mainImage ? "border-primary" : "border-transparent"
                }`}
              >
                <img
                  src={product.mainImage || "/placeholder.svg"}
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </button>
              {product.gallery.slice(0, 3).map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(item.image)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === item.image ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">{product.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
            <div className="text-3xl font-bold text-secondary mb-8">{product.price}</div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Taille / Type</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[60px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Couleur</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name ? "border-foreground scale-110" : "border-muted"
                    }`}
                    style={{ background: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1 bg-secondary hover:bg-secondary/90">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Commander
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Caractéristiques</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Galerie de Produits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.gallery.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Fabrication Steps */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Étapes de Fabrication</h2>
          <div className="space-y-8">
            {product.fabricationSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-square overflow-hidden">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {step.step}
                      </div>
                     <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  {(() => {
                    const IconComponent = iconMap[step.iconName]
                    return <IconComponent className="w-6 h-6 text-secondary" />
                  })()}
                </div>
                  </div>
                    <h3 className="font-serif text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Intéressé par ce produit ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous pour plus d'informations, un devis personnalisé ou pour passer commande
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <ShoppingCart className="mr-2 w-5 h-5" />
              Commander maintenant
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#contact">Nous contacter</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
