import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get5DayWeatherForecast, getCurrentWeatherData, getReverseGeocoding } from '../api/opnWeatherApi'

export const fecthcurrentWeather = createAsyncThunk('weather/currentWeather', async (cityName) => {
   const response = getCurrentWeatherData(cityName)
   return response
})

export const fecthfiveDaysWeather = createAsyncThunk('weather/fiveDaysWeather', async (cityName) => {
   const response = get5DayWeatherForecast(cityName)
   return response
})

export const fecthreverseGeocoding = createAsyncThunk('weather/reverseGeocoding', async ({ lat, lon }) => {
   const response = getReverseGeocoding(lat, lon)
   return response
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      plan: null,
      cityName: null,
      currentWeather: null,
      fiveDaysWeather: null,
      loading: false,
      error: null,
   },
   reducers: {
      setCityName: (state, action) => {
         state.cityName = action.payload
      },
   },

   extraReducers: (build) => {
      build
         .addCase(fecthcurrentWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fecthcurrentWeather.fulfilled, (state, action) => {
            state.loading = false
            state.currentWeather = action.payload
         })
         .addCase(fecthcurrentWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
         })

         .addCase(fecthfiveDaysWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fecthfiveDaysWeather.fulfilled, (state, action) => {
            state.loading = false
            state.fiveDaysWeather = action.payload
         })
         .addCase(fecthfiveDaysWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
         })

         .addCase(fecthreverseGeocoding.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fecthreverseGeocoding.fulfilled, (state, action) => {
            state.loading = false
            state.cityName = action.payload[0]
         })
         .addCase(fecthreverseGeocoding.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
            console.log(state.error)
         })
   },
})

export default weatherSlice.reducer

export const { setCityName } = weatherSlice.actions
