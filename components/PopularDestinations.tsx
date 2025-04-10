"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

// Объект с переводами названий направлений
const destinationTranslations = {
  ru: {
    "Северный Кавказ": "Северный Кавказ",
    Бухара: "Бухара",
    Хива: "Хива",
    Ташкент: "Ташкент",
    "Чарынский каньон": "Чарынский каньон",
    Турция: "Турция",
    Грузия: "Грузия",
    Египет: "Египет",
  },
  en: {
    "Северный Кавказ": "North Caucasus",
    Бухара: "Bukhara",
    Хива: "Khiva",
    Ташкент: "Tashkent",
    "Чарынский каньон": "Charyn Canyon",
    Турция: "Turkey",
    Грузия: "Georgia",
    Египет: "Egypt",
  },
  uz: {
    "Северный Кавказ": "Shimoliy Kavkaz",
    Бухара: "Buxoro",
    Хива: "Xiva",
    Ташкент: "Toshkent",
    "Чарынский каньон": "Charin kanyoni",
    Турция: "Turkiya",
    Грузия: "Gruziya",
    Египет: "Misr",
  },
}

const destinations = [
  { name: "Северный Кавказ", image: "/placeholder.svg?height=300&width=300" },
  { name: "Бухара", image: "/placeholder.svg?height=300&width=300" },
  { name: "Хива", image: "/placeholder.svg?height=300&width=300" },
  { name: "Ташкент", image: "/placeholder.svg?height=300&width=300" },
  { name: "Чарынский каньон", image: "/placeholder.svg?height=300&width=300" },
  { name: "Турция", image: "/placeholder.svg?height=300&width=300" },
  { name: "Грузия", image: "/placeholder.svg?height=300&width=300" },
  { name: "Египет", image: "/placeholder.svg?height=300&width=300" },
]

export default function PopularDestinations() {
  const { t, language } = useLanguage()

  // Функция для получения переведенного названия направления
  const getTranslatedName = (name: string) => {
    return destinationTranslations[language]?.[name] || name
  }

  return (
    <section className="container mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("destinations.title")}</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">{t("destinations.description")}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {destinations.map((destination, index) => (
          <Link href="#" key={index} className="group">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={getTranslatedName(destination.name)}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-medium text-center">{getTranslatedName(destination.name)}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
