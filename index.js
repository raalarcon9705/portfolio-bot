const { Telegraf } = require('telegraf');
const express = require('express');

const BOT_TOKEN = '2089170643:AAFRq70v1_17WNHFOZMwIPBz_3xonNaYXmo';
const CHAT_ID = '661027755';
const PORT = 8888;

const bot = new Telegraf(BOT_TOKEN);
const server = express();

server.post('/send-message', (req, res) => {
  const { name, email, subject, content } = req.body;
  if (!name || !email || !subject || !content) {
    return res.status(400).send();
  }

  try {
    const message = `
    ${name}
    ${email}
    ${subject}
    ==
    ${content}`;
    bot.telegram.sendMessage(CHAT_ID, message);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});

// bot.launch();

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
