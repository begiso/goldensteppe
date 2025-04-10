"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru")

  useEffect(() => {
    // Попытка получить сохраненный язык из localStorage
    try {
      const savedLang = localStorage.getItem("language") as Language
      if (savedLang && Object.keys(translations).includes(savedLang)) {
        setLanguage(savedLang)
      } else {
        // Если язык не сохранен, пытаемся определить язык браузера
        const browserLang = navigator.language.split("-")[0]
        if (browserLang === "ru" || browserLang === "en" || browserLang === "uz") {
          setLanguage(browserLang as Language)
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    try {
      localStorage.setItem("language", lang)
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }
  }

  // Функция для получения перевода по ключу
  const t = (key: string) => {
    try {
      const keys = key.split(".")
      let value: any = translations[language]

      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k]
        } else {
          // Если перевод не найден, пробуем найти его в русском языке (как запасной вариант)
          if (language !== "ru") {
            let fallbackValue = translations["ru"]
            for (const fk of keys) {
              if (fallbackValue && fallbackValue[fk] !== undefined) {
                fallbackValue = fallbackValue[fk]
              } else {
                return key // Если и в русском нет, возвращаем ключ
              }
            }
            return typeof fallbackValue === "string" ? fallbackValue : key
          }
          return key // Возвращаем ключ, если перевод не найден
        }
      }

      return typeof value === "string" ? value : key
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
