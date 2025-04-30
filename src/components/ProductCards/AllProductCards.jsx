import React from 'react'
import ProductData from '../../data/ProductData'
import ProductCards from '../ProductCards/ProductCards'
const AllProductCards = () => {
  return (
    <div className='product-cards-container'>
        {ProductData.map((productitem) =>(
            <ProductCards key={productitem.id} product={productitem} />
        ))}
    </div>
  )
}

export default AllProductCards
