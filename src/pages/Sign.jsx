import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import { useLocation } from 'react-router-dom'

function Sign() {
   const location = useLocation().pathname.split('/').join('')

   if (location == 'signUp') {
      return <SignUp />
   } else if (location == 'signIn') {
      return <SignIn />
   } else {
      return <Error error="NotFound" />
   }
}

export default Sign
