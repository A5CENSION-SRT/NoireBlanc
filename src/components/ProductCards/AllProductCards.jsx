import React from 'react'
import ProductCards from '../ProductCards/ProductCards'
import './AllProductCards.css'
const AllProductCards = ({products}) => {
  
  return (
    <div className='product-cards-container'>
        {products.map((productitem) =>(
            <ProductCards key={productitem.id} product={productitem} />
        ))}
    </div>
  )
}

export default AllProductCards
