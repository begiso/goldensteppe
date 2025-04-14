"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe, ChevronDown } from "lucide-react"
import ScrollLink from "./ScrollLink"
import { useLanguage } from "@/contexts/LanguageContext"
import type { Language } from "@/lib/translations"

const languages = {
  ru: "Русский",
  en: "English",
  uz: "O'zbek",
}

export default function Header() {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  const changeLang = (lang: Language) => {
    setLanguage(lang)
    setIsLangMenuOpen(false)
  }

  return (
    <header className="py-3 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between">
        <ScrollLink href="#hero" className="text-primary font-bold text-xl">
          Golden steppe
        </ScrollLink>

        <nav className="hidden md:flex space-x-6">
          <ScrollLink href="#hero" className="text-sm text-gray-600 hover:text-primary">
            {t("nav.home")}
          </ScrollLink>
          <ScrollLink href="#tours" className="text-sm text-gray-600 hover:text-primary">
            {t("nav.tours")}
          </ScrollLink>
          <ScrollLink href="#info" className="text-sm text-gray-600 hover:text-primary">
            {t("nav.info")}
          </ScrollLink>
          <ScrollLink href="#contacts" className="text-sm text-gray-600 hover:text-primary">
            {t("nav.contacts")}
          </ScrollLink>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center space-x-1 text-sm cursor-pointer" onClick={toggleLangMenu}>
              <Globe className="w-4 h-4" />
              <span>{languages[language]}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      language === code ? "bg-gray-100 text-primary" : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => changeLang(code as Language)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#contacts"
            className="bg-[#f08223] text-white px-4 py-2 rounded-full hover:bg-[#d87420] transition-colors text-sm whitespace-nowrap"
          >
            {t("buttons.bookTour")}
          </Link>
        </div>
      </div>
    </header>
  )
}
