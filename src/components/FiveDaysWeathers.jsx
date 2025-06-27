import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper/modules'

import './css/FiveDaysWeathers.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fecthfiveDaysWeather } from '../feature/weatherSlice'

function FiveDaysWeathers() {
   const dispatch = useDispatch()
   const { fiveDaysWeather, loading, error, cityName } = useSelector((s) => s.weather)
   const [list, setList] = useState(null)

   useEffect(() => {
      if (cityName) dispatch(fecthfiveDaysWeather(cityName.name))
   }, [dispatch, cityName])

   useEffect(() => {
      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

      const grouped = {}
      if (!fiveDaysWeather) return
      fiveDaysWeather.list.forEach((item) => {
         const dateObj = new Date(item.dt_txt)
         const dateKey = `${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}` // 'dd.MM'
         const day = days[dateObj.getDay()]

         if (!grouped[dateKey]) {
            grouped[dateKey] = {
               date: dateKey,
               day,
               min_temp: item.main.temp_min,
               max_temp: item.main.temp_max,
               icon: null,
               _temps: [item.main.temp],
               _icons: { [item.dt_txt]: item.weather[0].icon },
            }
         } else {
            grouped[dateKey]._temps.push(item.main.temp)
            grouped[dateKey]._icons[item.dt_txt] = item.weather[0].icon
         }
      })

      const Lists = Object.values(grouped)
         .slice(0, 5)
         .map((dayObj) => {
            const temps = dayObj._temps
            const icon = dayObj._icons[`${'2025'}-${dayObj.date.slice(2, 4)}-${dayObj.date.slice(0, 2)} 12:00:00`] || Object.values(dayObj._icons)[0]

            return {
               date: dayObj.date,
               day: dayObj.day,
               min_temp: `${Math.min(...temps).toFixed(1)}°C`,
               max_temp: `${Math.max(...temps).toFixed(1)}°C`,
               icon,
            }
         })

      setList(Lists)
   }, [fiveDaysWeather])

   if (loading) <p>로딩중</p>
   if (error) <p>에러발생</p>

   return (
      <>
         {list && (
            <>
               <Swiper slidesPerView="auto" spaceBetween={12} freeMode={true} modules={[FreeMode]} className="fiveDaysSwiper">
                  {list.map((e) => {
                     return (
                        <SwiperSlide>
                           <img src={`https://openweathermap.org/img/wn/${e.icon}.png`} alt={e.date} />
                           <div>
                              <span>{e.min_temp}</span>
                              <span>{e.max_temp}</span>
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

export default FiveDaysWeathers
