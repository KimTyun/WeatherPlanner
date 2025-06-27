import Button from '@mui/material/Button'
import PlanGrid from '../components/PlanGrid'

function Plan() {
   return (
      <>
         <div className="subTitle">
            <span>간이 계획서 작성하기</span>
            <Button className="load">불러오기</Button>
         </div>
         <div className="planner">
            <PlanGrid />
         </div>
         <div className="bottom-btns">
            <Button>일정 추가하기</Button>
            <Button>저장하기</Button>
         </div>
      </>
   )
}

export default Plan
