"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#contexte", label: "Contexte" },
    { href: "/#solution", label: "Solution" },
    {
      href: "/#produits",
      label: "Produits",
      submenu: [
        { href: "/produits/tenues-brodees", label: "Tenues Brodées Premium" },
        { href: "/produits/pagnes", label: "Pagnes Tissés & Brodés" },
        { href: "/produits/accessoires", label: "Accessoires Artisanaux" },
        { href: "/produits/broderie-personnalisee", label: "Broderie Personnalisée" },
        { href: "/produits/formations", label: "Formations Professionnelles" },
        { href: "/produits/location", label: "Location de Tenues" },
      ],
    },
    { href: "/#equipe", label: "Équipe" },
    { href: "/#impact", label: "Impact" },
    { href: "/#vision", label: "Vision" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-2xl font-bold">LS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground">LE SAVOIR</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">GROUP</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button className="text-sm font-medium text-foreground hover:text-secondary transition-colors flex items-center gap-1">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 transition-all ${productsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90">
              <Link href="/#contact">Nous contacter</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label="Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2 w-full text-left flex items-center justify-between"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {productsOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-secondary transition-colors py-1"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90 w-full">
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
