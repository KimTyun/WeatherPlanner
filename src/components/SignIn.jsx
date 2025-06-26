import { Link } from 'react-router-dom'
import { SignWrap } from '../style/styleComponents'
import Button from '@mui/material/Button'
import './css/Sign.css'

function SignIn() {
   return (
      <>
         <SignWrap className="sign-wrap">
            <h2>sign In</h2>
            <form>
               <label htmlFor="id"> 아이디</label>
               <input type="text" name="id" id="id" />
               <label htmlFor="pw">비밀번호</label>
               <input type="password" name="pw" id="pw" />
               <Link to={'/signUp'}>회원가입은 이곳에서</Link>
               <Button variant="contained" style={{ backgroundColor: '#E96E50', textAlign: 'center' }}>
                  Submit{' '}
               </Button>
            </form>
         </SignWrap>
      </>
   )
}

export default SignIn
