import Button from '@mui/material/Button'
import './css/SearchBar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCityName } from '../feature/weatherSlice'

function SearchBar() {
   const [value, setValue] = useState('')
   const navigate = useNavigate()
   const dispatch = useDispatch()

   function onChange(e) {
      setValue(e.target.value)
   }

   function onSearch(e) {
      e.preventDefault()
      if (value.trim() == '') {
         alert('입력하세요')
         return
      }
      dispatch(setCityName(value))
      navigate(`/search?query=${value.trim()}`)
   }
   return (
      <>
         <form className="search">
            <input type="text" placeholder="도시를 영문으로 입력하세요" onChange={onChange} value={value} />
            <Button type="submit" variant="contained" style={{ backgroundColor: '#003B81' }} onClick={onSearch}>
               검색
            </Button>
         </form>
      </>
   )
}

export default SearchBar
