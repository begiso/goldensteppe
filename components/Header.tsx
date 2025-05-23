"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import ScrollLink from "./ScrollLink"
import { useLanguage } from "@/contexts/LanguageContext"
import type { Language } from "@/lib/translations"

const FlagIcon = ({ country }: { country: string }) => {
  const getFlagEmoji = (countryCode: string) => {
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

export default function Header() {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const changeLang = (lang: Language) => {
    setLanguage(lang)
    setIsLangMenuOpen(false)
  }

  return (
    <>
      <header className="py-3 bg-white sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <ScrollLink href="#hero" className="text-primary font-bold text-lg md:text-2xl">
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
            {/* Языки */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-sm cursor-pointer" onClick={toggleLangMenu}>
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

            {/* CTA (десктоп) */}
            <ScrollLink
              href="#contacts"
              className="bg-[#f08223] text-white px-6 py-3 rounded-full hover:bg-[#d87420] transition-colors text-base font-medium hidden md:block"
            >
              {t("buttons.bookTour")}
            </ScrollLink>

            {/* Гамбургер / крестик */}
            <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none z-50">
              <div className="w-6 h-6 relative">
                <span
                  className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45 top-2.5" : "top-1"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "top-2.5"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45 top-2.5" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Оверлей */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Мобильное меню */}
      <div
        className={`fixed left-0 right-0 bg-white shadow-md py-6 px-6 z-50 transition-all duration-300 transform ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <ScrollLink href="#hero" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary text-center">
            {t("nav.home")}
          </ScrollLink>
          <ScrollLink href="#tours" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary text-center">
            {t("nav.tours")}
          </ScrollLink>
          <ScrollLink href="#info" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary text-center">
            {t("nav.info")}
          </ScrollLink>
          <ScrollLink href="#contacts" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary text-center">
            {t("nav.contacts")}
          </ScrollLink>
          <ScrollLink
            href="#contacts"
            onClick={closeMobileMenu}
            className="bg-[#f08223] text-white px-4 py-2 rounded-full text-center hover:bg-[#d87420] transition-colors"
          >
            {t("buttons.bookTour")}
          </ScrollLink>
        </nav>
      </div>
    </>
  )
}
