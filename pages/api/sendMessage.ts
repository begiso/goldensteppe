import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не поддерживается" });
  }

  const { name, phone, email, message } = req.body;

  const text = `
📨 Новое сообщение с сайта:

👤 Имя: ${name}
📞 Телефон: ${phone}
✉️ Email: ${email || "не указано"}
💬 Сообщение: ${message}
  `;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id, text }),
    });
    console.log(response)

    if (!response.ok) {
      return res.status(500).json({ error: "Ошибка при отправке в Telegram" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Ошибка отправки в Telegram:", err);
    return res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
}