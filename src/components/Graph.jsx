import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import { LineChart } from '@mui/x-charts/LineChart'
import './css/Graph.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Graph() {
   const [chartsParams, setchartsParams] = useState(null)
   const { fiveDaysWeather } = useSelector((s) => s.weather)

   useEffect(() => {
      const dayMap = {}
      const labels = []
      const temperatureData = []
      const rainData = []

      fiveDaysWeather?.list?.forEach((item) => {
         const [dateStr, time] = item.dt_txt.split(' ') // '2025-06-27', '12:00:00'
         const dateObj = new Date(dateStr)
         const label = `${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`

         if (!dayMap[label]) {
            dayMap[label] = {
               tempAtNoon: null,
               maxPop: 0,
            }
            labels.push(label) // 날짜 순서 유지
         }

         if (time === '12:00:00') {
            dayMap[label].tempAtNoon = item.main.temp.toFixed(1)
         }

         if (item.pop > dayMap[label].maxPop) {
            dayMap[label].maxPop = item.pop
         }
      })

      // 추출
      labels.forEach((label) => {
         const day = dayMap[label]
         const temp = day.tempAtNoon !== null ? parseFloat(day.tempAtNoon) : 0
         const pop = Math.round(day.maxPop * 100)

         temperatureData.push(temp)
         rainData.push(pop)
      })

      // 그래프용 객체 생성
      const lineChartsParams = {
         series: [
            {
               id: 'temperature',
               data: temperatureData,
               label: '온도 (℃)',
               yAxisKey: 'rightAxis',
               color: '#ff7043',
               area: true,
            },
            {
               id: 'rain',
               data: rainData,
               label: '강수확률 (%)',
               yAxisKey: 'leftAxis',
               color: '#42a5f5',
               area: false,
            },
         ],
         xAxis: [
            {
               id: 'x',
               data: labels,
               scaleType: 'band',
            },
         ],
         yAxis: [
            {
               id: 'rightAxis',
               scaleType: 'linear',
               label: '온도 (℃)',
               position: 'left',
               min: 0,
               max: 100,
            },
            {
               id: 'leftAxis',
               scaleType: 'linear',
               label: '강수확률 (%)',
               position: 'right',
               min: 0,
               max: 100,
            },
         ],
         height: 250,
      }
      setchartsParams(lineChartsParams)
   }, [fiveDaysWeather, setchartsParams])

   return (
      <>
         {chartsParams && (
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0, md: 4 }} sx={{ width: '100%' }}>
               <Box sx={{ flexGrow: 1 }}>
                  <LineChart {...chartsParams} />
               </Box>
            </Stack>
         )}
      </>
   )
}

export default Graph
