import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductDetailLayout } from "@/components/product-detail-layout"


export default function LocationPage() {
  const product = {
    title: "Location de Tenues",
    description:
      "Service de location pour événements et cérémonies. Tenues traditionnelles brodées de qualité premium pour vos moments spéciaux.",
    price: "À partir de 5 000 FCFA",
    mainImage: "/elegant-african-dress-with-embroidery-womens-forma.jpg",

    gallery: [
      {
        image: "/wedding-rental-traditional-outfit-ceremonial-dress.jpg",
        title: "Tenues de mariage",
        description: "Collection premium pour mariés",
      },
      {
        image: "/ceremonial-rental-agbada-luxury-traditional-africa.jpg",
        title: "Agbada de cérémonie",
        description: "Élégance traditionnelle garantie",
      },
      {
        image: "/party-rental-embroidered-dress-elegant-evening-wea.jpg",
        title: "Tenues de soirée",
        description: "Pour vos événements mondains",
      },
      {
        image: "/cultural-event-rental-traditional-african-clothing.jpg",
        title: "Événements culturels",
        description: "Authenticité et tradition",
      },
      {
        image: "/children-rental-traditional-outfit-kids-clothing.jpg",
        title: "Tenues enfants",
        description: "Collection spéciale enfants",
      },
      {
        image: "/family-matching-rental-outfits-coordinated-traditi.jpg",
        title: "Ensembles famille",
        description: "Coordination parfaite",
      },
    ],

    fabricationSteps: [
      {
        step: 1,
        title: "Réservation",
        description: "Réservez votre tenue en ligne ou en boutique avec acompte de 50%",
        iconName: "Calendar",
        image: "/booking-reservation-rental-service-online-booking.jpg",
      },
      {
        step: 2,
        title: "Essayage",
        description: "Séance d'essayage personnalisée pour un ajustement parfait",
        iconName: "Star",
        image: "/fitting-session-size-adjustment-personalized-serv.jpg",
      },
      {
        step: 3,
        title: "Préparation",
        description: "Nettoyage et préparation de votre tenue avant l'événement",
        iconName: "Shield",
        image: "/preparation-cleaning-rental-outfit-professional-se.jpg",
      },
      {
        step: 4,
        title: "Remise de la tenue",
        description: "Récupération de votre tenue 2-3 jours avant l'événement",
        iconName: "Clock",
        image: "/pickup-rental-outfit-delivery-customer-service.jpg",
      },
      {
        step: 5,
        title: "Retour",
        description: "Retour de la tenue dans les 24h après l'événement",
        iconName: "Calendar",
        image: "/return-rental-outfit-service-easy-dropoff.jpg",
      },
    ],

    features: [
      "Collection variée et renouvelée",
      "Tailles: XS à 5XL disponibles",
      "Nettoyage professionnel inclus",
      "Ajustements gratuits",
      "Assurance dommages optionnelle",
      "Livraison possible (frais en sus)",
      "Réduction groupes et familles",
      "Service client 24/7",
    ],

    sizes: ["Enfant (2-12 ans)", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],

    colors: [
      { name: "Blanc immaculé", value: "#FFFFFF" },
      { name: "Noir élégant", value: "#000000" },
      { name: "Or royal", value: "#D4AF37" },
      { name: "Bleu saphir", value: "#1E3A8A" },
      { name: "Rouge rubis", value: "#DC2626" },
      { name: "Vert émeraude", value: "#059669" },
    ],
  }

  return (
    <>
      <Navigation />
      <ProductDetailLayout product={product} category="location" />
      <Footer />
    </>
  )
}
