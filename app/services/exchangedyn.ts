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
    const airtmURI = await ((await baseRate.get(`${process.env.AIRTM}`))).data  
    const { pair } = airtmURI
    const { name, quote, last_retrieved: dataUpdate} = airtmURI.sources.AirTM_Market
    const parseQuote = parseFloat(quote)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
  
    return { name, pair, parseQuote, dateLocal }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
} 
export const yadio = async () => {
  try {
    const yadioURI = await ((await baseRate.get(`${process.env.YADIO}`))).data  
    const { pair } = yadioURI
    const { name, quote, last_retrieved:dataUpdate } = yadioURI.sources.Yadio
    const parseQuote = parseFloat(quote)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return {pair, name, parseQuote, dateLocal }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const dolarToday = async () => {
  try {
    const dolarTodayURI = await ((await baseRate.get(`${process.env.DOLARTODAY}`))).data
    const { pair } = dolarTodayURI
    const { name, quote, last_retrieved: dataUpdate } = dolarTodayURI.sources.DolarToday
    const parseQuote = parseFloat(quote)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return { pair, name, dateLocal, parseQuote }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const global66 = async () => {
  try {
    const globalURI = await ((await baseRate.get(`${process.env.GLOBAL66}`))).data
    const { pair } = globalURI
    const { name, quote, last_retrieved:dataUpdate } = globalURI.sources.Global66
    const parseQuote = parseFloat(quote)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return { pair, name, parseQuote, dateLocal}
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const bcv = async () => {
  try {
    const bcvURI = await ((await baseRate.get(`${process.env.BCV}`))).data
    const { pair, name } = bcvURI
    const { quote, last_retrieved: dataUpdate } = bcvURI.sources.BCV
    const parseQuote = parseFloat(quote)
    const dateLocal = parseZone(utc(dataUpdate)).locale('es').utcOffset('-04:00').format('LL [-] hh:mm A')
    return { pair ,name, parseQuote, dateLocal  } 
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}
export const average = async () => {
  try {

    const airtmURI = await ((await baseRate.get(`${process.env.AIRTM}`))).data
    const yadioURI = await ((await baseRate.get(`${process.env.YADIO}`))).data
    const dolarTodayURI = await ((await baseRate.get(`${process.env.DOLARTODAY}`))).data
  
    const priceAirtm = parseFloat(airtmURI.sources.AirTM_Market.quote)
    const priceYadio = parseFloat(yadioURI.sources.Yadio.quote)
    const priceDolarToday = parseFloat(dolarTodayURI.sources.DolarToday.quote)
    const add = priceAirtm+priceYadio+priceDolarToday    
    const avg = add / 3

    const today = parseZone(utc(now())).utcOffset('-04:00').locale('es').format('LL [-] hh:mm A')
    console.log(today)
    return { avg, today }

  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}