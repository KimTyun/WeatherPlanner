import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import './FiveDaysBig.css'

function FiveDaysBig() {
   return (
      <>
         <Swiper slidesPerView="1" spaceBetween={10} pagination={true} modules={[Pagination]} className="fiveDaysBig">
            <SwiperSlide>
               <div className="day-wrap">
                  <div className="morning">
                     <p>오전</p>
                     <img src="https://openweathermap.org/img/wn/04d@4x.png" alt="" />

                     <p>22°C</p>
                  </div>
                  <div className="afternoon">
                     <p>오후</p>
                     <img src="https://openweathermap.org/img/wn/04d@4x.png" alt="" />
                     <p>22°C</p>
                  </div>
                  <div className="evening">
                     <p>저녁</p>
                     <img src="https://openweathermap.org/img/wn/04d@4x.png" alt="" />
                     <p>22°C</p>
                  </div>
               </div>
               <div>
                  <p>06.23.MON</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
         </Swiper>
      </>
   )
}

export default FiveDaysBig
