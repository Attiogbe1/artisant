import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ContextSection } from "@/components/context-section"
import { SolutionSection } from "@/components/solution-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { TeamSection } from "@/components/team-section"
import { TractionSection } from "@/components/traction-section"
import { ImpactSection } from "@/components/impact-section"
import { VisionSection } from "@/components/vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ContextSection />
      <SolutionSection />
      <ProductsSection />
      <ProcessSection />
      <TeamSection />
      <TractionSection />
      <ImpactSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
