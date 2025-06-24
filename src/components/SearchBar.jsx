import Button from '@mui/material/Button'
import './SearchBar.css'
function SearchBar() {
   return (
      <>
         <form className="search">
            <input type="text" placeholder="도시를 영문으로 입력하세요" />
            <Button variant="contained" style={{ backgroundColor: '#003B81' }}>
               검색
            </Button>
         </form>
      </>
   )
}

export default SearchBar
