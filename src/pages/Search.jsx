import { useNavigate, useSearchParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import FiveDaysBig from '../components/FiveDaysBig'
import { Banner } from '../style/styleComponents'
import Button from '@mui/material/Button'
import Graph from '../components/Graph'
import { useDispatch, useSelector } from 'react-redux'
import { fecthfiveDaysWeather } from '../feature/weatherSlice'
import { useEffect } from 'react'
import Error from '../components/Error'

function Search() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { fiveDaysWeather, loading, error } = useSelector((s) => s.weather)
   const [searchParams] = useSearchParams()
   const query = searchParams.get('query')

   useEffect(() => {
      dispatch(fecthfiveDaysWeather(query))
   }, [dispatch, query])

   if (loading) return <span>loading...</span>

   if (error?.message === 'Request failed with status code 404') {
      return (
         <>
            <SearchBar></SearchBar>
            <Banner as="h2">잘못된 도시이름입니다. </Banner>
         </>
      )
   }
   if (error) {
      return <Error />
   }
   function onPlan() {
      navigate('/plan')
   }

   return (
      <>
         {fiveDaysWeather && (
            <>
               <SearchBar></SearchBar>
               <Banner as="h2">{query} 일기예보</Banner>
               <FiveDaysBig />

               <Graph />
               <Button variant="contained" style={{ backgroundColor: '#003B81', textAlign: 'center', width: '100%' }} onClick={onPlan}>
                  간이계획서 작성하기
               </Button>
            </>
         )}
      </>
   )
}

export default Search
