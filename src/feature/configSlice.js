import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
   name: 'config',
   initialState: {
      fiveDaysWeatherDatas: null,
      fiveDaysWeatherBigDatas: null,
      planDatas: null,
   },
   reducers: {
      makeFiveDaysWeatherDatas() {},
      makeFiveDaysWeatherBigDatas() {},
      makePlanDatas() {},
   },
})

export default configSlice.reducer

export const { makeFiveDaysWeatherDatas, makeFiveDaysWeatherBigDatas, makePlanDatas } = configSlice.actions
