import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Search from './pages/Search'
import Plan from './pages/Plan'
import Sign from './pages/Sign'
import NotFound from './pages/NotFound'
import { Banner } from './style/styleComponents'

function App() {
   return (
      <>
         <Banner>
            <Link to={'/'}>Weather Planer</Link>
         </Banner>
         <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/search/" element={<Search />}></Route>
            <Route path="/plan/*" element={<Plan />}></Route>
            <Route path="/signIn" element={<Sign key={'In'} />}></Route>
            <Route path="/signUp" element={<Sign key={'Up'} />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
         </Routes>
      </>
   )
}

export default App
