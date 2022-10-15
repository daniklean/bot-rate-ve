import dotenv from 'dotenv'
import { Telegraf, Context } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'
dotenv.config()

import { 
  average, 
  bcv, 
  dolarToday, 
  global66, 
  yadio  
} from './services/exchangedyn'

const bot = new Telegraf<Context<Update>>(process.env.TOKEN as string)

bot.start((ctx:Context) => {
  ctx.reply('Iniciado bot')
})
 
bot.command('/average', async (ctx:Context) => {
  const averageRate = await average()
  const chatId:any = ctx.chat?.id
  const nameUser = ctx.from?.first_name
  console.log(await ctx.reply(`Hola ${nameUser}\n\nLa cotización del promedio general para el día de hoy es ${averageRate?.avg} Bolivares`, chatId))
})


bot.command('/yadio', async (ctx:Context) => {
  const quoteRate = await yadio()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Colateralización: ${quoteRate?.pairRate}\nExchange: ${quoteRate?.nameRate}\nPrecio: ${quoteRate?.quote}\nFecha de Actualización: ${quoteRate?.dateUpdate}`, chatId))
})

bot.command('/dolartoday', async (ctx:Context) => {
  const quoteRate = await dolarToday()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Colateralización: ${quoteRate?.pairRate}\nExchange: ${quoteRate?.nameRate}\nPrecio: ${quoteRate?.quote}\nFecha de Actualización: ${quoteRate?.dataUpdate}`, chatId))
})

bot.command('/global66', async (ctx:Context) => {
  const quoteRate = await global66()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Colateralización: ${quoteRate?.pairRate}\nExchange: ${quoteRate?.nameRate}\nPrecio: ${quoteRate?.quote}\nFecha de Actualización: ${quoteRate?.dateUpdate}`, chatId))
})

bot.command('/bcv', async (ctx:Context) => {
  const quoteRate = await bcv()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Exchange: ${quoteRate?.nameRate}\nPrecio: ${quoteRate?.quote}\nFecha de Actualización: ${quoteRate?.dataUpdate}`, chatId))
})

const launchNow = async () => {
  try {
    const botActive = await bot.launch() 
    console.log('Bot Active')
    return botActive
  } catch (error){
    console.log('Bot no se resolvió' + error)
  }
} 
launchNow()