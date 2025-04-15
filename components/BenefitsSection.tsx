"use client"

import Image from "next/image"
import { Users, Calendar, Star, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function BenefitsSection() {
  const { t } = useLanguage()

  return (
    <section id="info" className="container mb-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">{t("benefits.title")}</h2>
      <p className="text-center text-gray-600 mb-16">{t("benefits.description")}</p>

      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-2/5 relative">
          <div className="bg-primary rounded-3xl p-4 rotate-6">
            <div className="relative h-80 md:w-full w-[80vw] rounded-2xl overflow-hidden">
              <Image src="/images/benefits-map.jpeg" alt="Планирование маршрута" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="md:w-3/5 space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">{t("benefits.guides.title")}</h3>
              <p className="text-gray-600">{t("benefits.guides.description")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">{t("benefits.booking.title")}</h3>
              <p className="text-gray-600">{t("benefits.booking.description")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">{t("benefits.service.title")}</h3>
              <p className="text-gray-600">{t("benefits.service.description")}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">{t("benefits.safety.title")}</h3>
              <p className="text-gray-600">{t("benefits.safety.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
