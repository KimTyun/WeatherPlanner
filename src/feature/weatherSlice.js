import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { get5DayWeatherForecast, getCurrentWeatherData } from '../api/opnWeatherApi'

export const currentWeather = createAsyncThunk('weather/currentWeather', async (cityName) => {
   const response = getCurrentWeatherData(cityName)
   return response
})

export const fiveDaysWeather = createAsyncThunk('weather/fiveDaysWeather', async (cityName) => {
   const response = get5DayWeatherForecast(cityName)
   return response
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      plan: null,
      data: {
         currentWeather: {},
         fiveDaysWeather: [],
      },
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (build) => {
      build
         .addCase(currentWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(currentWeather.fulfilled, (state, action) => {
            state.loading = false
            state.data.currentWeather = action.payload
         })
         .addCase(currentWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
         })

         .addCase(fiveDaysWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fiveDaysWeather.fulfilled, (state, action) => {
            state.loading = false
            state.data.fiveDaysWeather = action.payload
         })
         .addCase(fiveDaysWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
            console.log(state.error)
         })
   },
})

export default weatherSlice.reducer
