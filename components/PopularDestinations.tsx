"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

// Объект с переводами названий направлений
const destinationTranslations = {
  ru: {
    Самарканд: "Самарканд",
    Бухара: "Бухара",
    Хива: "Хива",
    Ташкент: "Ташкент",
    Каракалпакстан: "Каракалпакстан",
    Дубай: "Дубай",
    Турция: "Турция",
    Грузия: "Грузия",
    Египет: "Египет",
  },
  en: {
    Самарканд: "Samarkand",
    Бухара: "Bukhara",
    Хива: "Khiva",
    Ташкент: "Tashkent",
    Каракалпакстан: "Karakalpakstan",
    Дубай: "Dubai",
    Турция: "Turkey",
    Грузия: "Georgia",
    Египет: "Egypt",
  },
  uz: {
    Самарканд: "Samarqand",
    Бухара: "Buxoro",
    Хива: "Xiva",
    Ташкент: "Toshkent",
    Каракалпакстан: "Qoraqalpog'iston",
    Дубай: "Dubay",
    Турция: "Turkiya",
    Грузия: "Gruziya",
    Египет: "Misr",
  },
}

const destinations = [
  { name: "Самарканд", image: "/images/destinations/samarkand.png" },
  { name: "Бухара", image: "/images/destinations/bukhara.png" },
  { name: "Хива", image: "/images/destinations/khiva.png" },
  { name: "Ташкент", image: "/images/destinations/tashkent.png" },
  { name: "Каракалпакстан", image: "/images/destinations/karakalpakstan.png" },
  { name: "Дубай", image: "/images/destinations/dubai.png" },
  { name: "Турция", image: "/images/destinations/turkey.png" },
  { name: "Грузия", image: "/images/destinations/georgia.png" },
  { name: "Египет", image: "/images/destinations/egypt.png" },
]

export default function PopularDestinations() {
  const { t, language } = useLanguage()

  // Функция для получения переведенного названия направления
  const getTranslatedName = (name: string) => {
    return destinationTranslations[language]?.[name] || name
  }

  return (
    <section className="rounded-3xl container mb-16 text-center p-8 md:p-20 bg-[#F8F5F3]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{t("destinations.title")}</h2>
      <p className="text-gray-600 mb-8 md:mb-16 max-w-3xl mx-auto">{t("destinations.description")}</p>

      <div className="flex flex-wrap justify-center gap-6">
        {destinations.map((destination, index) => (
          <Link href="#" key={index} className="group w-[150px] md:w-[200px] lg:w-[280px]">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={getTranslatedName(destination.name)}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-semibold text-center px-2 text-base md:text-lg lg:text-2xl">
                  {getTranslatedName(destination.name)}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
