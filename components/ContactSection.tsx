"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (formData.message.length > 1000) {
      setErrorMessage(t("form.tooLong"));
      setTimeout(() => setErrorMessage(null), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(t("form.success"));
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSuccessMessage(null), 5000);
      } else {
        setErrorMessage(t("form.error"));
        setTimeout(() => setErrorMessage(null), 5000);
      }
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setErrorMessage(t("form.generalError"));
      setTimeout(() => setErrorMessage(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacts"
      className="container mb-16 grid md:grid-cols-2 gap-8"
    >
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
              <p className="font-medium">+998 91 388 14 41</p>
              <p className="font-medium">+998 91 393 14 41</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{t("contact.address")}</p>
              <p className="font-medium">
                Республика Каракалпакстан, Город Нукус, Орнек МФЙ, Шоссе
                Узбекистан, Дом 38, 9 кв
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">{t("contact.writeUs")}</h2>

        {successMessage && (
          <div className="mb-4 p-4 rounded-lg bg-green-100 text-green-800 text-sm font-medium">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-4 rounded-lg bg-red-100 text-red-800 text-sm font-medium">
            {errorMessage}
          </div>
        )}

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
            <label
              htmlFor="message"
              className="block text-sm text-gray-600 mb-1"
            >
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
            className="w-full bg-[#f08223] text-white px-4 py-3 rounded-full hover:bg-[#d87420] transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("buttons.sending") : t("buttons.sendMessage")}
          </button>
        </form>
      </div>
    </section>
  );
}
