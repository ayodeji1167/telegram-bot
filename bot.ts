import { Bot } from "grammy";
import dotenv from "dotenv";
dotenv.config();

const bot = new Bot(String(process.env.BOT_TOKEN));

bot.command("start",(ctx)=>ctx.reply("Welcome to haven bot, Up and Running !"))

bot.on("message", (ctx)=>ctx.reply("Welcome We got your message"))

bot.start()