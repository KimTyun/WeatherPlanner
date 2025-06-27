import { useEffect } from 'react'
import './css/CurrentWeather.css'
import { useDispatch, useSelector } from 'react-redux'
import { fecthcurrentWeather } from '../feature/weatherSlice'

function CurrentWeather() {
   const dispatch = useDispatch()
   const { currentWeather, loading, error, cityName } = useSelector((s) => s.weather)

   useEffect(() => {
      if (cityName) dispatch(fecthcurrentWeather(cityName.name))
   }, [dispatch, cityName])

   if (loading) <p>로딩중</p>
   if (error) <p>에러발생</p>

   return (
      <>
         {currentWeather && (
            <div className="currentCard">
               <div>
                  <h3>{cityName?.local_names?.ko}</h3>
                  <p>{currentWeather.weather[0].main}</p>
               </div>
               <div>
                  <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt={currentWeather.weather[0].main} />
                  <p>{Number(currentWeather.main.temp).toFixed(1)}°C</p>
               </div>
            </div>
         )}
      </>
   )
}

export default CurrentWeather
