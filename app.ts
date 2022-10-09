import dotenv from "dotenv";
import { Telegraf, Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
dotenv.config()

import { average } from "./app/services/exchangedyn";

const bot = new Telegraf<Context<Update>>(process.env.TOKEN as string);

bot.start((ctx:Context) => {
    ctx.reply("Iniciado bot")
})

bot.command('/prom', async (ctx:Context) => {
    const prom = await average()
    const chatId:any = ctx.chat?.id
    console.log(await ctx.reply(`Hola ${ctx.from?.first_name}\n\nLa cotización del promedio general para el día de hoy es ${prom} Bolivares`, chatId))
    //console.log(await ctx.telegram.sendMessage(chatId, prom))
    //console.log(prom)
})


const launchNow =async () => {
    try {
        const botActive = await bot.launch() 
        console.log("Bot Active")
        return botActive
    } catch (error){
        console.log("Bot no se resolvió " + error)
    }
}
launchNow()