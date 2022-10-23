import { config } from 'dotenv'
import { Telegraf, Context } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'
config()

import { 
  airtm,
  airtmArs,
  average, 
  bcv, 
  dolarToday, 
  global66, 
  yadio  
} from './services/exchangedyn'

const bot = new Telegraf<Context<Update>>(process.env.TOKEN as string)

bot.start((ctx:Context) => {
  const start = '¿Deseas obtener las cotizaciones más importantes en Venezuela?.\n\nIndicame que cotización quieres observar por medio de mis comandos, para más información enviame /help. '
  ctx.reply(start)
})

bot.command('/average', async (ctx:Context) => {
  const averageRate = await average()
  const chatId:any = ctx.chat?.id
  const nameUser = ctx.from?.first_name
  console.log(await ctx.reply(`Hola ${nameUser}\n\nCotización Actual: ${averageRate?.avgToFixed} Bs.D\n\n${averageRate?.today}`, chatId))
})

bot.command('/yadio', async (ctx:Context) => {
  const quoteRate = await yadio()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Par: ${quoteRate?.pair}\nExchange: ${quoteRate?.name}\nPrecio: ${quoteRate?.parseQuote}\nActualización: ${quoteRate?.dateLocal}`, chatId))
})

bot.command('/dolartoday', async (ctx:Context) => {
  const quoteRate = await dolarToday()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Par: ${quoteRate?.pair}\nExchange: ${quoteRate?.name}\nPrecio: ${quoteRate?.parseQuote} Bs.D\nActualización: ${quoteRate?.dateLocal}`, chatId))
})

bot.command('/global66', async (ctx:Context) => {
  const quoteRate = await global66()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Par: ${quoteRate?.pair}\nExchange: ${quoteRate?.name}\nPrecio: ${quoteRate?.parseQuote} Bs.D\nActualización: ${quoteRate?.dateLocal}`, chatId))
})

bot.command('/bcv', async (ctx:Context) => {
  const quoteRate = await bcv()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Par: ${quoteRate?.pair}\nExchange: ${quoteRate?.name}\nPrecio: ${quoteRate?.parseQuote} Bs.D\nActualización: ${quoteRate?.dateLocal}`, chatId))
})

bot.command('/airtm', async (ctx:Context) => {
  const quoteRate = await airtm()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Par: ${quoteRate?.pair}\nExchange: ${quoteRate?.name}\nPrecio: ${quoteRate?.parseQuote} Bs.D\nActualización: ${quoteRate?.dateLocal}`, chatId))
}) 

bot.help((ctx:Context) => {
  const chatId:any = ctx.chat?.id
  const helpString = 'Tienes la lista de comandos\n\n/average: Promedio Chigüire Rates\n/yadio: Promedio de Yadio.io\n/bcv: Promedio del Banco Central de Venzuela\n/airtm: Promedio de airtm (Mercado)\n/global66: Promedio de Globall 66\n/dolartoday: Promedio de DolarToday'
  ctx.reply(`${helpString}`, chatId) 
})

// Argentine Quotes Commands

bot.command('[airtmARS, airtmars]', async (ctx:Context) => {
  const quoteRate = await airtmArs()
  const chatId:any = ctx.chat?.id
  console.log(await ctx.reply(`Par: ${quoteRate?.pair}\nExchange: ${quoteRate?.name}\nPrecio: ${quoteRate?.parseQuote} ARS\nActualización: ${quoteRate?.dateLocal} Hora local Argentina`, chatId))
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

process.once('SIGINT', () => bot.stop ('SIGINT'))
process.once('SIGTERM', () => bot.stop ('SIGTERM'))