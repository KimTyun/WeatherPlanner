import Button from '@mui/material/Button'
import '../components/css/Plan.css'
import PlanGrid from '../components/PlanGrid'

function Plan() {
   return (
      <>
         <div className="subTitle">
            <span>간이 계획서 작성하기</span>
            <Button className="load">불러오기</Button>
         </div>
         <div className="planner">
            <div className="date-column">
               <div className="today-label">오늘</div>
               <div className="date">6.24</div>
            </div>
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
