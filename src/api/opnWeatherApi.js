import axios from 'axios'
const WEATHERKEY = import.meta.env.VITE_WEATHER_API_KEY

const weatherApi = axios.create({
   baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export async function getCurrentWeatherData(cityName) {
   const response = await weatherApi.get('weather', {
      params: {
         q: cityName,
         appid: WEATHERKEY,
         units: 'metric',
      },
   })
   console.log(response.data, '1단. get요청 리스펀스 데이터')
   return response.data
}

export async function get5DayWeatherForecast(cityName) {
   const response = await weatherApi.get('forecast', {
      params: {
         q: cityName,
         appid: WEATHERKEY,
         units: 'metric',
      },
   })
   console.log(response.data, '1단. get요청 리스펀스 데이터')
   return response.data
}

export default weatherApi
