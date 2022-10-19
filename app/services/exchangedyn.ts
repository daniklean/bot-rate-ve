import axios, { AxiosInstance } from 'axios'
import { utc, parseZone } from 'moment'
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
    const { name:nameRate, quote:quote, last_retrieved: dateUpdate} = airtmURI.sources.AirTM_Market
    return { nameRate, pair, quote, dateUpdate }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}
airtm()

export const yadio = async () => {
  try {
    const yadioURI = await ((await baseRate.get(`${process.env.YADIO}`))).data  
    const nameRate = await yadioURI.name
    const pairRate = await yadioURI.pair
    const accessYadio = await yadioURI.sources.Yadio
    const quote = await accessYadio.quote
    const yadioUTC = await utc(accessYadio.last_retrieved)
    const dateUpdate = await parseZone(yadioUTC).locale('es').local().format('LLLL')
    return { nameRate, pairRate, quote, dateUpdate }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const dolarToday = async () => {
  try {
    const dolarTodayURI = await ((await baseRate.get(`${process.env.DOLARTODAY}`))).data
    const nameRate = await dolarTodayURI.name
    const pairRate = await dolarTodayURI.pair
    const accessDolarToday = dolarTodayURI.sources.DolarToday
    const quote = await accessDolarToday.quote
    const dolarTodayUTC =  await utc(accessDolarToday.last_retrieved)
    const dataUpdate = await parseZone(dolarTodayUTC).locale('es').local().format('LLLL')
    return { nameRate, pairRate, dataUpdate, quote }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const global66 = async () => {
  try {
    const globalURI = await ((await baseRate.get(`${process.env.GLOBAL66}`))).data
    const nameRate = await globalURI.name
    const pairRate = await globalURI.pair
    const accessGlobal = globalURI.sources.Global66
    const quote = await accessGlobal.quote
    const globalUTC = await utc(accessGlobal.last_retrieved)
    const dateUpdate = await parseZone(globalUTC).locale('es').local().format('LLLL')
    return { quote, dateUpdate, nameRate, pairRate }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const bcv = async () => {
  try {
    const bcvURI = await ((await baseRate.get(`${process.env.BCV}`))).data
    const nameRate = await bcvURI.name
    const accessBCV = bcvURI.sources.BCV
    const quote = await accessBCV.quote
    const bcvUTC =  await utc(accessBCV.last_retrieved)
    const dataUpdate = await parseZone(bcvUTC).locale('es').local().format('LLLL')
    return { nameRate, dataUpdate, quote }
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const average = async () => {
  try {

    const airtmURI = await ((await baseRate.get(`${process.env.AIRTM}`))).data
    const globalURI = await ((await baseRate.get(`${process.env.GLOBAL66}`))).data
    const yadioURI = await ((await baseRate.get(`${process.env.YADIO}`))).data
    const dolarTodayURI = await ((await baseRate.get(`${process.env.DOLARTODAY}`))).data

    const priceAirtm = await parseFloat(airtmURI.sources.AirTM_Market.quote)
    const priceGlobal = await parseFloat(globalURI.sources.Global66.quote)
    const priceYadio = await parseFloat(yadioURI.sources.Yadio.quote)
    const priceDolarToday = await parseFloat(dolarTodayURI.sources.DolarToday.quote)
    const add = priceAirtm+priceGlobal+priceYadio+priceDolarToday    
    const avg = add / 4
    return { avg }

  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}