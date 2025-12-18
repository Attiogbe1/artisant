import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    navigation: [
      { label: "Accueil", href: "#accueil" },
      { label: "Contexte", href: "#contexte" },
      { label: "Solution", href: "#solution" },
      { label: "Produits", href: "#produits" },
    ],
    about: [
      { label: "Notre Équipe", href: "#equipe" },
      { label: "Notre Impact", href: "#impact" },
      { label: "Notre Vision", href: "#vision" },
      { label: "Contact", href: "#contact" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-serif text-xl font-bold">LS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">LE SAVOIR</span>
                <span className="text-xs uppercase tracking-wider opacity-80">GROUP</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Artisanat traditionnel Yoruba, broderie premium et formations professionnelles au Bénin
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">À propos</h4>
            <ul className="space-y-2">
              {links.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Suivez-nous</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">© {currentYear} LE SAVOIR GROUP. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Mentions légales
            </Link>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
