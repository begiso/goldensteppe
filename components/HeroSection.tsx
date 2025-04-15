"use client"

import { useState, useEffect } from "react"
import ScrollLink from "./ScrollLink"
import { useLanguage } from "@/contexts/LanguageContext"

// Массив с путями к изображениям для слайдера
const slideImages = ["/images/hero-slide-1.jpg", "/images/hero-slide-2.jpg", "/images/hero-slide-3.jpg"]

export default function HeroSection() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Эффект для автоматического переключения слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1))
    }, 5000) // Меняем слайд каждые 5 секунд

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mb-16">
      <div id="hero" className="relative h-[600px] md:h-[800px] bg-cover bg-center rounded-xl overflow-hidden">
        {/* Слайдер с изображениями */}
        {slideImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-800"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          />
        ))}

        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Контент */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 text-white max-w-4xl">{t("hero.title")}</h1>
          <p className="text-lg md:text-2xl text-white mb-10 max-w-3xl">{t("hero.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollLink
              href="#contacts"
              className="bg-[#f08223] text-white px-6 py-3 rounded-full hover:bg-[#d87420] transition-colors text-base font-medium"
            >
              {t("buttons.book")}
            </ScrollLink>
            <ScrollLink
              href="#tours"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-base font-medium"
            >
              {t("buttons.learnMore")}
            </ScrollLink>
          </div>

          {/* Индикаторы слайдов */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-20">
            {slideImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-6" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
