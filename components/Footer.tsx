"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import ScrollLink from "./ScrollLink"
import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"
import type { Language } from "@/lib/translations"

// Компонент для отображения флага
const FlagIcon = ({ country }: { country: string }) => {
  // Используем эмодзи флагов, которые отображаются как SVG в большинстве современных браузеров
  const getFlagEmoji = (countryCode: string) => {
    // Преобразуем код страны в региональные индикаторы Unicode
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0))

    return String.fromCodePoint(...codePoints)
  }

  return (
    <span className="text-lg" role="img" aria-label={`Flag of ${country}`}>
      {getFlagEmoji(country)}
    </span>
  )
}

const languages = {
  ru: { name: "Русский", code: "ru" },
  en: { name: "English", code: "gb" },
  uz: { name: "O'zbek", code: "uz" },
}

export default function Footer() {
  const { t, language, setLanguage } = useLanguage()
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  const changeLang = (lang: Language) => {
    setLanguage(lang)
    setIsLangMenuOpen(false)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <ScrollLink href="#hero" className="text-primary font-bold text-xl mb-4 md:mb-0">
            Golden steppe
          </ScrollLink>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            <ScrollLink href="#hero" className="text-sm text-gray-300 hover:text-primary">
              {t("nav.home")}
            </ScrollLink>
            <ScrollLink href="#tours" className="text-sm text-gray-300 hover:text-primary">
              {t("nav.tours")}
            </ScrollLink>
            <ScrollLink href="#info" className="text-sm text-gray-300 hover:text-primary">
              {t("nav.info")}
            </ScrollLink>
            <ScrollLink href="#contacts" className="text-sm text-gray-300 hover:text-primary">
              {t("nav.contacts")}
            </ScrollLink>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-sm cursor-pointer text-gray-300"
                onClick={toggleLangMenu}
              >
                <FlagIcon country={languages[language].code} />
                <span>{languages[language].name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10">
                  {Object.entries(languages).map(([code, { name, code: countryCode }]) => (
                    <button
                      key={code}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${
                        language === code ? "bg-gray-100 text-primary" : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => changeLang(code as Language)}
                    >
                      <span className="mr-2">
                        <FlagIcon country={countryCode} />
                      </span>
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="#"
              className="bg-[#f08223] text-white px-4 py-2 rounded-full hover:bg-[#d87420] transition-colors text-sm"
            >
              {t("buttons.bookTour")}
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
