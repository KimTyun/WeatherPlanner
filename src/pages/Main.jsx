import { useEffect } from 'react'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'
import CurrentWeather from '../components/CurrentWeather'
import FiveDaysWeathers from '../components/FiveDaysWeathers'

function Main() {
   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               const lat = position.coords.latitude
               const lon = position.coords.longitude
               console.log(`위도: ${lat}, 경도: ${lon}`)
            },
            () => {
               console.log('ㅗ')
            },
         )
      }
   }, [])

   return (
      <>
         <div className="wrap">
            <Banner />
            <SearchBar></SearchBar>
            <CurrentWeather></CurrentWeather>
            <FiveDaysWeathers></FiveDaysWeathers>
         </div>
      </>
   )
}

export default Main
