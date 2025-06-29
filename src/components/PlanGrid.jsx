import Button from '@mui/material/Button'
import './css/Plan.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Error from './Error'

function PlanGrid() {
   const { fiveDaysWeather, loading, error } = useSelector((s) => s.weather)
   const [plan, setPlan] = useState(null)
   const [inputValues, setInputValues] = useState({}) // 예: { '0_morning': '경복궁 관람' }
   const [view, setView] = useState(0)
   useEffect(() => {
      const timeSlots = {
         '06:00:00': 'morning',
         '12:00:00': 'afternoon',
         '18:00:00': 'evening',
      }

      const resultMap = {}

      fiveDaysWeather?.list?.forEach((item) => {
         const [dateStr, time] = item.dt_txt.split(' ')
         const dateObj = new Date(dateStr)
         const dateKey = `${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`

         if (!resultMap[dateKey]) {
            resultMap[dateKey] = {
               date: dateKey,
               morning: null,
               afternoon: null,
               evening: null,
            }
         }

         const slot = timeSlots[time]
         if (slot) {
            resultMap[dateKey][slot] = {
               temp: item.main.temp.toFixed(1),
               weather: item.weather[0].main,
            }
         }
      })

      const result = Object.values(resultMap).slice(0, 5)

      setPlan(
         result.map((e) => {
            return {
               ...e,
               plan: {
                  morning: null,
                  afternoon: null,
                  evening: null,
               },
               isSelected: false,
            }
         }),
      )
   }, [fiveDaysWeather])

   if (loading) <p>{'loading...'}</p>
   if (error) <Error error={error} />

   function onAdd(i, day, value) {
      const newPlan = [...plan]

      newPlan[i] = {
         ...newPlan[i],
         plan: {
            ...newPlan[i].plan,
            [day]: value,
         },
      }
      setPlan(newPlan)
   }

   function onDelete(i, day, is) {
      const newPlan = [...plan]

      newPlan[i] = {
         ...newPlan[i],
         plan: {
            ...newPlan[i].plan,
            [day]: null,
         },
      }
      setPlan(newPlan)
      if (is) return
      setInputValues({ ...inputValues, [`${i}_${day}`]: null })
   }

   function onInsert() {
      const newPlan = [...plan]

      newPlan[view] = {
         ...newPlan[view],
         isSelected: true,
      }
      setPlan(newPlan)
      setView(view + 1)
   }

   return (
      <>
         {plan &&
            plan
               .filter((e) => e.isSelected === true)
               .map((e, i) => {
                  return (
                     <div className="planner" key={i}>
                        <div className="date-column">
                           <div className="today-label">{`${i + 1}일째`}</div>
                           <div className="date">{e.date}</div>
                        </div>
                        <div className="plan-row">
                           {e.plan.morning ? (
                              <>
                                 <div className="weather-time">
                                    {e?.morning?.temp} {e?.morning?.weather}
                                    <br />
                                    오전
                                 </div>
                                 <div className="plan">{e.plan.morning}</div>
                                 <Button className="edit" onClick={() => onDelete(i, 'morning', true)}>
                                    수정
                                 </Button>
                                 <Button className="delete" onClick={() => onDelete(i, 'morning')}>
                                    삭제
                                 </Button>
                              </>
                           ) : (
                              <>
                                 <div className="weather-time">
                                    {e.morning?.temp} {e.morning?.weather}
                                    <br />
                                    오전
                                 </div>
                                 <input type="text" placeholder="계획을 작성하세요" value={inputValues[`${i}_${'morning'}`] || ''} onChange={(e) => setInputValues({ ...inputValues, [`${i}_${'morning'}`]: e.target.value })} />
                                 <Button
                                    className="add"
                                    onClick={() => {
                                       onAdd(i, 'morning', inputValues[`${i}_${'morning'}`] || '')
                                    }}
                                 >
                                    추가
                                 </Button>
                              </>
                           )}
                        </div>

                        <div className="plan-row">
                           {e.plan.afternoon ? (
                              <>
                                 <div className="weather-time">
                                    {e.afternoon?.temp} {e.afternoon?.weather}
                                    <br />
                                    오후
                                 </div>
                                 <div className="plan">{e.plan.afternoon}</div>
                                 <Button className="edit" onClick={() => onDelete(i, 'afternoon', true)}>
                                    수정
                                 </Button>
                                 <Button className="delete" onClick={() => onDelete(i, 'afternoon')}>
                                    삭제
                                 </Button>
                              </>
                           ) : (
                              <>
                                 <div className="weather-time">
                                    {e.afternoon?.temp} {e.afternoon?.weather}
                                    <br />
                                    오후
                                 </div>
                                 <input type="text" placeholder="계획을 작성하세요" value={inputValues[`${i}_${'afternoon'}`] || ''} onChange={(e) => setInputValues({ ...inputValues, [`${i}_${'afternoon'}`]: e.target.value })} />
                                 <Button
                                    className="add"
                                    onClick={() => {
                                       onAdd(i, 'afternoon', inputValues[`${i}_${'afternoon'}`] || '')
                                    }}
                                 >
                                    추가
                                 </Button>
                              </>
                           )}
                        </div>
                        <div className="plan-row">
                           {e.plan.evening ? (
                              <>
                                 <div className="weather-time">
                                    {e.evening?.temp} {e.evening?.weather}
                                    <br />
                                    저녁
                                 </div>
                                 <div className="plan">{e.plan.evening}</div>
                                 <Button className="edit" onClick={() => onDelete(i, 'evening', true)}>
                                    수정
                                 </Button>
                                 <Button className="delete" onClick={() => onDelete(i, 'evening')}>
                                    삭제
                                 </Button>
                              </>
                           ) : (
                              <>
                                 <div className="weather-time">
                                    {e.evening?.temp} {e.evening?.weather}
                                    <br />
                                    저녁
                                 </div>
                                 <input type="text" placeholder="계획을 작성하세요" value={inputValues[`${i}_${'evening'}`] || ''} onChange={(e) => setInputValues({ ...inputValues, [`${i}_${'evening'}`]: e.target.value })} />
                                 <Button
                                    className="add"
                                    onClick={() => {
                                       onAdd(i, 'evening', inputValues[`${i}_${'evening'}`] || '')
                                    }}
                                 >
                                    추가
                                 </Button>
                              </>
                           )}
                        </div>
                     </div>
                  )
               })}
         <Button
            style={{ background: '#003b81', marginLeft: '10px' }}
            onClick={() => {
               if (view >= 5) {
                  alert('그만')
                  console.log(plan)
                  return
               }
               onInsert()
            }}
         >
            추가하기
         </Button>
         <Button
            style={{ background: '#003b81', marginLeft: '10px' }}
            onClick={() => {
               localStorage.setItem('travelPlans', JSON.stringify(plan))
            }}
         >
            저장하기
         </Button>
         <Button
            style={{ background: '#003b81', marginLeft: '10px' }}
            onClick={() => {
               const saved = localStorage.getItem('travelPlans')
               if (saved) {
                  setPlan(JSON.parse(saved))
               } else {
                  alert('불러올 데이터가 없습니다.')
               }
            }}
         >
            불러오기
         </Button>
      </>
   )
}

export default PlanGrid
