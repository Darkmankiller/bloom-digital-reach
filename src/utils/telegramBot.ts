
const TELEGRAM_BOT_TOKEN = "8178208966:AAF3DrWk7afaNhB3mjaZYKXGNa33WdxsGyQ";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export const sendContactToTelegram = async (formData: ContactFormData, chatId: string) => {
  const messageText = `
🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
🏢 *Company:* ${formData.company || 'Not provided'}
🛠️ *Service:* ${formData.service || 'Not specified'}
💰 *Budget:* ${formData.budget || 'Not specified'}

📝 *Message:*
${formData.message}

---
Sent from PixelBloom Website
  `;

  try {
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.description || 'Failed to send message to Telegram');
    }

    return result;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};
