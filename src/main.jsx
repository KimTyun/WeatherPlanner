import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './stores/store.js'
import { BrowserRouter } from 'react-router-dom'
import { Main } from './style/styleComponents.js'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <Main>
               <App />
            </Main>
         </Provider>
      </BrowserRouter>
   </StrictMode>,
)
