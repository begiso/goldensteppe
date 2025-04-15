"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contacts" className="container mb-16 grid md:grid-cols-2 gap-8">
      <div className="bg-orange-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
        <p className="text-gray-600 mb-6">{t("contact.description")}</p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{t("contact.phone")}</p>
              <p className="font-medium">+998 90 576 56 65</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{t("contact.address")}</p>
              <p className="font-medium">
                Республика Каракалпакстан, Город Нукус, Орнек МФЙ, Шоссе Узбекистан, Дом 38, 9 кв
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{t("contact.writeUs")}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
              {t("contact.form.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              {t("contact.form.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
              {t("contact.form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f08223] text-white px-4 py-3 rounded-full hover:bg-[#d87420] transition-colors"
          >
            {t("buttons.sendMessage")}
          </button>
        </form>
      </div>
    </section>
  )
}
