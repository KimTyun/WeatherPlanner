import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import CurrentWeather from '../components/CurrentWeather'
import FiveDaysWeathers from '../components/FiveDaysWeathers'
import { useDispatch } from 'react-redux'
import { fecthreverseGeocoding } from '../feature/weatherSlice'
import { Link } from 'react-router-dom'

function Main() {
   const dispatch = useDispatch()
   const [locate, setLocate] = useState(null)

   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            setLocate({ lat, lon })
         })
      } else {
         setLocate({ lat: 37.5665, lon: 126.978 })
      }
   }, [])

   useEffect(() => {
      if (locate) {
         dispatch(fecthreverseGeocoding({ lat: locate.lat, lon: locate.lon }))
      }
   }, [locate, dispatch])

   return (
      <>
         <div className="wrap">
            <SearchBar></SearchBar>
            <CurrentWeather></CurrentWeather>
            <FiveDaysWeathers></FiveDaysWeathers>
            <div style={{ textAlign: 'right' }}>
               <Link style={{ color: 'white', padding: '5px' }} to={'/signIn'}>
                  로그인
               </Link>
               <Link style={{ color: 'white', padding: '5px' }} to={'/signUp'}>
                  회원가입
               </Link>
            </div>
         </div>
      </>
   )
}

export default Main
