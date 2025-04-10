"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function TourTypes() {
  const { t } = useLanguage()

  return (
    <section id="tours" className="container mb-16">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">{t("tours.title")}</h2>
        <p className="max-w-md text-gray-600">{t("tours.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/placeholder.svg?height=400&width=600" alt="Внутренние туры" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">{t("tours.domestic.title")}</h3>
            <p className="text-sm text-gray-600">{t("tours.domestic.description")}</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src="/placeholder.svg?height=400&width=600" alt="Международные туры" fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">{t("tours.international.title")}</h3>
            <p className="text-sm text-gray-600">{t("tours.international.description")}</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Индивидуальные маршруты"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">{t("tours.custom.title")}</h3>
            <p className="text-sm text-gray-600">{t("tours.custom.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
