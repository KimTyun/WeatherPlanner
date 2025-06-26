import { useParams } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import FiveDaysBig from '../components/FiveDaysBig'
import { Banner } from '../style/styleComponents'
import Button from '@mui/material/Button'
import Graph from '../components/Graph'

function Search() {
   const { cityName } = useParams()

   return (
      <>
         <SearchBar></SearchBar>
         <Banner as="h2">{cityName} 일기예보</Banner>
         <FiveDaysBig />

         <Graph />
         <Button variant="contained" style={{ backgroundColor: '#003B81', textAlign: 'center', width: '100%' }}>
            간이계획서 작성하기
         </Button>
      </>
   )
}

export default Search
