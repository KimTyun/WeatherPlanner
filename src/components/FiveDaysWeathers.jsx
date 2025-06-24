import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper/modules'

import './FiveDaysWeathers.css'

function FiveDaysWeathers() {
   return (
      <>
         <Swiper slidesPerView="auto" spaceBetween={12} freeMode={true} modules={[FreeMode]} className="fiveDaysSwiper">
            <SwiperSlide>
               <img src="https://openweathermap.org/img/wn/04d.png" alt="" />
               <div>
                  <span>22°C</span>
                  <span>29°C</span>
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

export default FiveDaysWeathers
