import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import './css/FiveDaysBig.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function FiveDaysBig() {
   const { fiveDaysWeather } = useSelector((s) => s.weather)
   const [weatherList, setweatherList] = useState(null)
   useEffect(() => {
      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

      const timeSlots = {
         '06:00:00': 'morning',
         '12:00:00': 'afternoon',
         '18:00:00': 'evening',
      }

      const grouped = {}

      fiveDaysWeather?.list?.forEach((item) => {
         const dateObj = new Date(item.dt_txt)
         const time = item.dt_txt.split(' ')[1] // '06:00:00'
         const dateKey = `${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}` // 'MM.dd'
         const day = days[dateObj.getDay()]

         if (!grouped[dateKey]) {
            grouped[dateKey] = {
               date: dateKey,
               day,
               morning: null,
               afternoon: null,
               evening: null,
            }
         }

         const slot = timeSlots[time]
         if (slot) {
            grouped[dateKey][slot] = {
               temp: item.main.temp.toFixed(1),
               icon: item.weather[0].icon,
               main: item.weather[0].main,
            }
         }
      })

      const List = Object.values(grouped).slice(0, 5)

      setweatherList(List)
   }, [fiveDaysWeather, setweatherList])

   return (
      <>
         {weatherList && (
            <>
               <Swiper slidesPerView="1" spaceBetween={10} pagination={true} modules={[Pagination]} className="fiveDaysBig">
                  {weatherList.map((e) => {
                     return (
                        <SwiperSlide>
                           <div className="day-wrap">
                              <div className="morning">
                                 {e.morning ? (
                                    <>
                                       <p>오전(06:00)</p>
                                       <img src={`https://openweathermap.org/img/wn/${e.morning.icon}@4x.png`} alt="icon" />

                                       <p>{e.morning.temp}°C</p>
                                    </>
                                 ) : (
                                    ''
                                 )}
                              </div>
                              <div className="afternoon">
                                 {e.afternoon ? (
                                    <>
                                       <p>오후(12:00)</p>
                                       <img src={`https://openweathermap.org/img/wn/${e.afternoon.icon}@4x.png`} alt="icon" />

                                       <p>{e.afternoon.temp}°C</p>
                                    </>
                                 ) : (
                                    ''
                                 )}
                              </div>
                              <div className="evening">
                                 {e.evening ? (
                                    <>
                                       <p>저녁(18:00)</p>
                                       <img src={`https://openweathermap.org/img/wn/${e.evening.icon}@4x.png`} alt="icon" />

                                       <p>{e.evening.temp}°C</p>
                                    </>
                                 ) : (
                                    ''
                                 )}
                              </div>
                           </div>
                           <div>
                              <p>{`${e.date} ${e.day}`}</p>
                           </div>
                        </SwiperSlide>
                     )
                  })}
               </Swiper>
            </>
         )}
      </>
   )
}

export default FiveDaysBig
