import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
   return (
      <>
         <h1>
            <Link to={'/'}>Weather Planer</Link>
         </h1>
      </>
   )
}

export default Banner
