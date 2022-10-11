import axios, { AxiosInstance } from "axios";
import { utc, parseZone } from "moment"

export const baseRate:AxiosInstance = axios.create({
    baseURL: "https://api.exchangedyn.com",
    responseType: "json",
    responseEncoding: "utf-8",
})

export const rates = async () => {
  try {
    const ratesAll = "/free/quotes/usdves"
    const responseRates = await (await (await baseRate.get(`${ratesAll}`)))
    const data = await responseRates.data
    return data
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const average = async () => {
  try {
   const totalData = await rates()
   const averageAll = totalData.average
   return averageAll
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const yadio = async () => {
  try {
    const totalData = await rates()
    const pair = await totalData.pair
    const sources = await totalData.sources[3]
    const nameQuote = await sources.name
    const quote = await sources.quote
    const dateUpdate = await parseZone(utc(sources.last_retrieved)).locale("es").local().format("LLLL")
    return { pair, nameQuote, quote, dateUpdate}
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const dolarToday = async () => {
  try {
    const totalData = await rates()
    const pair= await totalData.pair
    const sources = await totalData.sources[4]
    const nameQuote = await sources.name
    const quote = await sources.quote
    const dateUpdate = await parseZone(utc(sources.last_retrieved)).locale("es").local().format("LLLL")
    return { pair, nameQuote, quote, dateUpdate}
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const global66 = async () => {
  try {
    const totalData = await rates()
    const pair= await totalData.pair
    const sources = await totalData.sources[0]
    const nameQuote = await sources.name
    const quote = await sources.quote
    const dateUpdate = await parseZone(utc(sources.last_retrieved)).locale("es").local().format("LLLL")
    return { pair, nameQuote, quote, dateUpdate}
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}

export const bcv = async () => {
  try {
    const bcvURL = "/markets/quotes/usdves_bcv"
    const responseBCV = await (await (await baseRate.get(`${bcvURL}`))).data
    const nameBCV = await responseBCV.name
    const quote = await responseBCV.sources.BCV_USD.quote
    const bcvUTC =  await utc(responseBCV.sources.BCV_USD.last_retrieved)
    const dataUpdate = await parseZone(bcvUTC).locale("es").local().format("LLLL")
    return {nameBCV,dataUpdate,quote}
  } catch (error) {
    console.log(`Fallo la petición ${error}`)
  }
}