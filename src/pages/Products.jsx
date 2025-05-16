import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import SortFilter from '../components/SortFilter/SortFilter'
import AllProductCards from '../components/ProductCards/AllProductCards'
import ProductsData from '../data/ProductData'
const Products = () => {
  const [sortOption , setSortOption] = useState('default')
  const [filterOption , setFilterOption] = useState('all')
  
  let finalProducts = [...ProductsData]
  if (filterOption !== 'all'){
    finalProducts = finalProducts.filter(
      product => product.type === filterOption
    )
  }

  if (sortOption === 'p-asc'){
    finalProducts = [...finalProducts].sort((a,b) => a.price - b.price)
  }
  else if(sortOption == 'p-des'){
    finalProducts = [...finalProducts].sort((a,b) => b.price - a.price)
  }
  else if(sortOption == 'name-asc'){
    finalProducts = [...finalProducts].sort((a,b) => a.name.localeCompare(b.name))
  }
  else if(sortOption == 'name-des'){
    finalProducts = [...finalProducts].sort((a, b) => b.name.localeCompare(a.name))
  }

  return (
    <div>
      <Navbar/>
      <SortFilter 
      sortOption={sortOption} 
      setSortOption={setSortOption} 
      filterOption={filterOption}
      setFilterOption ={setFilterOption}/>
      <AllProductCards products={finalProducts}/>
    </div>
  )
}
export default Products