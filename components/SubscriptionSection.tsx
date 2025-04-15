"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function SubscriptionSection() {
  const { t } = useLanguage()

  return (
    <section className="container mb-16">
      <div
        className="relative h-[500px] bg-cover bg-center rounded-xl overflow-hidden"
        style={{ backgroundImage: "url('/images/subscribe-bg-new.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4 md:px-8">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">{t("subscribe.title")}</h2>
          <p className="max-w-3xl text-md md:text-xl mb-10 leading-relaxed">{t("subscribe.description")}</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="https://instagram.com/goldensteppe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black/30 rounded-full px-2 py-2 hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="relative w-8 h-8 mr-2">
                <Image src="/images/social/instagram.png" alt="Instagram" fill className="object-contain" />
              </div>
              <span className="text-white">goldensteppe</span>
            </Link>
            <Link
              href="https://t.me/goldensteppe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black/30 rounded-full px-2 py-2 hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="relative w-8 h-8 mr-2">
                <Image src="/images/social/telegram.png" alt="Telegram" fill className="object-contain" />
              </div>
              <span className="text-white">goldensteppe</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
