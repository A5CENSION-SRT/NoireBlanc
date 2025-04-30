import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SortFilter from '../components/SortFilter/SortFilter'
import AllProductCards from '../components/ProductCards/AllProductCards'
const Products = () => {
  return (
    <div>
      <Navbar/>
      <SortFilter/>
      <AllProductCards/>

      

      
    </div>
  )
}
export default Products