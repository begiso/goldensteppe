import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import TourTypes from "@/components/TourTypes"
import PopularDestinations from "@/components/PopularDestinations"
import BenefitsSection from "@/components/BenefitsSection"
import SubscriptionSection from "@/components/SubscriptionSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TourTypes />
      <PopularDestinations />
      <BenefitsSection />
      <SubscriptionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
