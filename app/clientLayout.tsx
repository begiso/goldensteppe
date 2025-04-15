"use client"

import type React from "react"
import { Manrope } from "next/font/google"
import "./globals.css"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState } from "react"
import { ScrollToTop } from "@/components/ScrollToTop"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
})

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Устанавливаем атрибут lang для HTML в зависимости от выбранного языка
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language
    }
  }, [language, mounted])

  return (
    <div className={`${manrope.variable} font-manrope`}>
      {children}
      <ScrollToTop />
    </div>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </LanguageProvider>
      </body>
    </html>
  )
}
