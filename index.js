const { Telegraf } = require("telegraf");
const express = require("express");
const cors = require('cors');

const BOT_TOKEN = "2089170643:AAFRq70v1_17WNHFOZMwIPBz_3xonNaYXmo";
const CHAT_ID = "661027755";
const PORT = 8888;

const bot = new Telegraf(BOT_TOKEN);
const server = express();

server.use(express.json());
server.use(cors());

server.post("/send-message", (req, res) => {
  try {
    const { name, email, subject, content } = req.body;
    if (!name || !email || !subject || !content) {
      return res.status(400).send();
    }

    const message = `
    ${name}
    ${email}
    ${subject}
    ==
    ${content}`;
    bot.telegram.sendMessage(CHAT_ID, message);
    res.status(202).send({ message: "Mail sent successfully" });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
});

// bot.launch();

server.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
