
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

// Function to get bot info for debugging
export const getBotInfo = async () => {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/getMe`);
    const result = await response.json();
    console.log('Bot info:', result);
    return result;
  } catch (error) {
    console.error('Error getting bot info:', error);
    throw error;
  }
};

export const sendContactToTelegram = async (formData: ContactFormData, chatId: string) => {
  // Clean the chat ID - remove @ if present and any whitespace
  const cleanChatId = chatId.replace('@', '').trim();
  
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

  console.log('Attempting to send to chat ID:', cleanChatId);

  try {
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: cleanChatId,
        text: messageText,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();
    console.log('Telegram API response:', result);
    
    if (!response.ok) {
      throw new Error(result.description || 'Failed to send message to Telegram');
    }

    return result;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};
