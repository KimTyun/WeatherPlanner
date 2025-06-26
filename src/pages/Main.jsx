import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CurrentWeather from '../components/CurrentWeather'
import FiveDaysWeathers from '../components/FiveDaysWeathers'
import { getReverseGeocoding } from '../api/opnWeatherApi'

function Main() {
   const [locate, setLocate] = useState({})
   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               const lat = position.coords.latitude
               const lon = position.coords.longitude
               setLocate({ lat, lon })
            },
            () => {
               console.log('ㅗ')
               setLocate({ lat: 37.5665, lon: 126.978 })
            },
         )
      }
   }, [])

   const onfuckyou = async () => {
      if (locate?.lat && locate?.lon) {
         const response = await getReverseGeocoding(locate.lat, locate.lon)
         const data = await response.data
         console.log(data[0].name)
      }
   }

   return (
      <>
         <button onClick={onfuckyou}></button>
         <div className="wrap">
            <SearchBar></SearchBar>
            <CurrentWeather></CurrentWeather>
            <FiveDaysWeathers></FiveDaysWeathers>
         </div>
      </>
   )
}

export default Main
