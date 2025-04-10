"use client"

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function SubscriptionSection() {
  const { t } = useLanguage()

  return (
    <section
      className="relative h-[400px] bg-cover bg-center mb-16"
      style={{ backgroundImage: "url('/images/subscribe-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative h-full flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("subscribe.title")}</h2>
        <p className="max-w-2xl mb-8">{t("subscribe.description")}</p>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
