"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot = new grammy_1.Bot(String(process.env.BOT_TOKEN));
bot.command("start", (ctx) => ctx.reply("Welcome to haven bot, Up and Running !"));
bot.on("message", (ctx) => ctx.reply("Welcome We got your message"));
bot.start();
