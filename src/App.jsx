import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Categories from './pages/categories'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Categories/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
