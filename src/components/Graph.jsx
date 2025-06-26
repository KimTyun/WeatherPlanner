import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import { LineChart } from '@mui/x-charts/LineChart'
import './css/Graph.css'

const lineChartsParams = {
   series: [
      {
         id: 'temperature',
         data: [25, 28, 30, 27, 26],
         label: '온도 (℃)',
         yAxisKey: 'rightAxis',
         color: '#ff7043',
         area: true,
      },
      {
         id: 'rain',
         data: [10, 20, 60, 30, 100],
         label: '강수확률 (%)',
         yAxisKey: 'rightAxis',
         color: '#42a5f5',
         area: false,
      },
   ],
   xAxis: [
      {
         id: 'x',
         data: ['월', '화', '수', '목', '금'],
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

function Graph() {
   return (
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0, md: 4 }} sx={{ width: '100%' }}>
         <Box sx={{ flexGrow: 1 }}>
            <LineChart {...lineChartsParams} />
         </Box>
      </Stack>
   )
}

export default Graph
