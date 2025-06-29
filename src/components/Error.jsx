import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import './css/Error.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
function Error({ error }) {
   const navigate = useNavigate()

   function onBackToMain() {
      navigate('/')
   }

   if (error == 'NotFound') {
      return (
         <>
            <div className="error-wrap">
               <h1>
                  <FontAwesomeIcon icon={faBan} />
                  <span>NotFound</span>
               </h1>
               <p>올바른 주소인지 다시한번 확인해 주세요</p>
               <Button variant="contained" style={{ backgroundColor: '#003B81' }} onClick={onBackToMain}>
                  메인 페이지로 돌아가기
               </Button>
            </div>
         </>
      )
   }

   if (error) {
      return (
         <>
            <p>{error?.message || '에러발생!'}</p>
            <Button variant="contained" style={{ backgroundColor: '#003B81' }} onClick={onBackToMain}>
               메인 페이지로 돌아가기
            </Button>
         </>
      )
   }
}

export default Error
