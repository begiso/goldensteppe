"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function TourTypes() {
  const { t } = useLanguage()

  return (
    <section id="tours" className="container mb-12">
      <div className="flex flex-col md:flex-row justify-between mb-12 gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold md:max-w-lg">{t("tours.title")}</h2>
        <p className="text-gray-600 md:max-w-2xl">{t("tours.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="overflow-hidden">
          <div className="relative h-52 md:h-72">
            <Image src="/images/domestic-tours.jpg" alt={t("tours.domestic.title")} fill className="object-cover rounded-lg" />
          </div>
          <div className="py-4">
            <h3 className="font-bold text-lg md:text-2xl mb-2">{t("tours.domestic.title")}</h3>
            <p className="text-sm md:text-md text-gray-600">{t("tours.domestic.description")}</p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="relative h-52 md:h-72">
            <Image src="/images/international-tours.jpg"
              alt={t("tours.international.title")} fill className="object-cover rounded-lg" />
          </div>
          <div className="py-4">
            <h3 className="font-bold text-lg md:text-2xl mb-2">{t("tours.international.title")}</h3>
            <p className="text-sm md:text-md text-gray-600">{t("tours.international.description")}</p>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="relative h-52 md:h-72">
            <Image src="/images/custom-tours.jpg" alt={t("tours.custom.title")} fill className="object-cover rounded-lg" />
          </div>
          <div className="py-4">
            <h3 className="font-bold text-lg md:text-2xl mb-2">{t("tours.custom.title")}</h3>
            <p className="text-sm md:text-md text-gray-600">{t("tours.custom.description")}</p>
          </div>
        </div>

        
      </div>
    </section>
  )
}
