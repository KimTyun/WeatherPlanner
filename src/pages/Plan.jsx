import Button from '@mui/material/Button'
import PlanGrid from '../components/PlanGrid'
import { useSelector } from 'react-redux'

function Plan() {
   const cityName = useSelector((s) => s.weather.cityName)
   return (
      <>
         <div className="subTitle">
            <span>간이 계획서 작성하기 {cityName}</span>
         </div>
         <PlanGrid />
      </>
   )
}

export default Plan
