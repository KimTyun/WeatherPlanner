import Button from '@mui/material/Button'
import './css/Plan.css'

function PlanGrid() {
   return (
      <>
         <div className="date-column">
            <div className="today-label">오늘</div>
            <div className="date">6.24</div>
         </div>
         <div className="plan-row">
            <div className="weather-time">
               25℃ 맑음
               <br />
               오전
            </div>
            <input type="text" placeholder="계획을 작성하세요" />
            <Button className="add">추가</Button>
         </div>

         <div className="plan-row">
            <div className="weather-time">
               28℃ 맑음
               <br />
               오후
            </div>
            <div className="plan">경복궁 관람하기</div>
            <Button className="edit">수정</Button>
            <Button className="delete">삭제</Button>
         </div>
         <div className="plan-row">
            <div className="weather-time">
               28℃ 맑음
               <br />
               오후
            </div>
            <div className="plan">경복궁 관람하기</div>
            <Button className="edit">수정</Button>
            <Button className="delete">삭제</Button>
         </div>
      </>
   )
}

export default PlanGrid
