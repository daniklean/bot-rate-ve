import axios, { AxiosInstance } from "axios";

export const baseRate:AxiosInstance = axios.create({
    baseURL: "https://api.exchangedyn.com",
    responseType: "json",
    responseEncoding: "utf-8",
})

export const rates = async () => {
  try {
    const ratesAll = "/free/quotes/usdves"
    const res = await baseRate.get(`${ratesAll}`)
    const data = res.data
    return data
  } catch (error) {
      console.log(`Cannot get API ${error}`)
  }
}

export const average = async () => {
  try {
   const totalData = await rates()
   const averageAll = totalData.average
   return averageAll
  } catch (error) {
    
  }
}
