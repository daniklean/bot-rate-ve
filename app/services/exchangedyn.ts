import axios, { AxiosInstance } from 'axios'
import { utc, parseZone, now } from 'moment'
import { config } from 'dotenv'
config()

export const baseRate:AxiosInstance = axios.create({
  baseURL: process.env.BASEURI as string,
  responseType: 'json',
  responseEncoding: 'utf-8',
})

export const airtm = async () => {
  try {
    const airtmURI = await ((await baseRate.get(`${process.env.AIRTM as string}`))).data  
    const { pair } = airtmURI
    const { name, quote, last_retrieved: dataUpdate} =  airtmURI.sources.Airtm_Market
    const parseQuote = parseFloat(quote).toFixed(4)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return { name, pair, parseQuote, dateLocal }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}
export const yadio = async () => {
  try {
    const yadioURI = await ((await baseRate.get(`${process.env.YADIO as string}`))).data  
    const { pair } = yadioURI
    const { name, quote, last_retrieved:dataUpdate } = yadioURI.sources.Yadio
    const parseQuote = parseFloat(quote).toFixed(4)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return {pair, name, parseQuote, dateLocal }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const dolarToday = async () => {
  try {
    const dolarTodayURI = await ((await baseRate.get(`${process.env.DOLARTODAY as string}`))).data
    const { pair } = dolarTodayURI
    const { name, quote, last_retrieved: dataUpdate } = dolarTodayURI.sources.DolarToday
    const parseQuote = parseFloat(quote).toFixed(4)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return { pair, name, dateLocal, parseQuote }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const global66 = async () => {
  try {
    const globalURI = await ((await baseRate.get(`${process.env.GLOBAL66 as string}`))).data
    const { pair } = globalURI
    const { name, quote, last_retrieved:dataUpdate } = globalURI.sources.Global66
    const parseQuote = parseFloat(quote).toFixed(4)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return { pair, name, parseQuote, dateLocal}
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const bcv = async () => {
  try {
    const bcvURI = await ((await baseRate.get(`${process.env.BCV as string}`))).data
    const { pair, name } = bcvURI
    const { quote, last_retrieved: dataUpdate } = bcvURI.sources.BCV
    const parseQuote = parseFloat(quote).toFixed(4)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return { pair ,name, parseQuote, dateLocal  } 
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}
export const average = async () => {
  try {

    const airtmURI = await ((await baseRate.get(`${process.env.AIRTM as string}`))).data
    const yadioURI = await ((await baseRate.get(`${process.env.YADIO as string}`))).data
    const dolarTodayURI = await ((await baseRate.get(`${process.env.DOLARTODAY as string}`))).data
    const global66URI = await ((await baseRate.get(`${process.env.GLOBAL66 as string}`))).data
  
    const priceAirtm = parseFloat(airtmURI.sources.Airtm_Market.quote)
    const priceYadio = parseFloat(yadioURI.sources.Yadio.quote)
    const priceDolarToday = parseFloat(dolarTodayURI.sources.DolarToday.quote)
    const priceGlobal66 = parseFloat(global66URI.sources.Global66.quote)
    const avg = (priceAirtm+priceYadio+priceDolarToday+priceGlobal66) / 4
    const avgToFixed = avg.toFixed(4)

    const today = parseZone(utc(now())).utcOffset('-04:00').locale('es').format('LL [-] hh:mm A')

    return { avgToFixed, today }

  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

// Argentine Quotes 

export const airtmArs = async () => {
  try {
    const airtmArsURI = ((await baseRate.get(`${process.env.AIRTM_ARS as string}`))).data
    const { pair, name } = airtmArsURI
    const { quote, last_retrieved: dataUpdate } = airtmArsURI.sources.Airtm_Market
    const parseQuote = parseFloat(quote).toFixed(4)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-03:00').format('LL [-] hh:mm A')
    return { pair ,name, parseQuote, dateLocal  }  

  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}