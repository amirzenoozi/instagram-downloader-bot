const { Telegraf } = require('telegraf');
const cheerio = require('cheerio');
const axios = require('axios');
require('dotenv').config();

const token = process.env.BOT_TOKEN
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

// Make Instance
const TelegramBot = new Telegraf(token);

TelegramBot.start((ctx) => {
  return ctx.reply('Welcome')
})
TelegramBot.on('text', async (ctx) => {
  // console.log(ctx.message.chat)
  // console.log(ctx.message.text)
})
TelegramBot.help((ctx) => {
  return ctx.reply('Send me a sticker')
})
TelegramBot.on('sticker', (ctx) => {
  return ctx.reply('👍')
})
TelegramBot.launch()

// Enable graceful stop
process.once('SIGINT', () => TelegramBot.stop('SIGINT'))
process.once('SIGTERM', () => TelegramBot.stop('SIGTERM'))
