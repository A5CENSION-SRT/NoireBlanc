import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
function App() {
  const products =[
    {
      id:1,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:2,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:3,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    { 
      id:4,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:1,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:5,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:5,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:6,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:1,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:7,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:1,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:1,
      type: " ",
      name:"product1",  
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:8,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:9,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:10,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:11,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:12,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:13,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:1,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:14,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:15,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    },
    {
      id:16,
      type: " ",
      name:"product1",
      price:100,
      image : "",
      shortDescription:"",
      longDescription:"",
    }
  ]
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
