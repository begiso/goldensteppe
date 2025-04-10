"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative h-[700px] bg-cover bg-center mb-12"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container relative h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white max-w-4xl">{t("hero.title")}</h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-3xl">{t("hero.description")}</p>
        <div>
          <Link
            href="#tours"
            className="bg-[#f08223] text-white px-6 py-3 rounded-full hover:bg-[#d87420] transition-colors text-lg font-medium"
          >
            {t("buttons.learnMore")}
          </Link>
        </div>
      </div>
    </section>
  )
}
