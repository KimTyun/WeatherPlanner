import { Link } from 'react-router-dom'
import { SignWrap } from '../style/styleComponents'
import Button from '@mui/material/Button'
import './css/Sign.css'

function SignUp() {
   return (
      <SignWrap className="sign-wrap">
         <h2>sign Up</h2>
         <form>
            <label htmlFor="id"> 아이디</label>
            <input type="text" name="id" id="id" />
            <label htmlFor="email">이메일</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="pw">비밀번호</label>
            <input type="password" name="pw" id="pw" />
            <label htmlFor="pwre">비밀번호 확인</label>
            <input type="password" name="pwre" id="pwre" />
            <Link to={'/signIn'}>아이디가 이미 있다면</Link>
            <Button variant="contained" style={{ backgroundColor: '#E96E50', textAlign: 'center' }}>
               Submit
            </Button>
         </form>
      </SignWrap>
   )
}

export default SignUp
