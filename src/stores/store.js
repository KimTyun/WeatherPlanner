import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from '../feature/weatherSlice'
import configSlice from '../feature/configSlice'

const store = configureStore({
   reducer: {
      weather: weatherSlice,
      config: configSlice,
   },
})

export default store
