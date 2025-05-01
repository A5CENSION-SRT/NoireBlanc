import React from 'react'
import './Productcards.css'
const ProductCards = ({product}) => {
  return (
    <div className="product-card">
        <div className="product-card-image">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card-details">
            <h3 className="product-card-title">{product.name}</h3>
            <span className="product-card-price">${product.price}</span>
        </div>
    </div>
  )
}

export default ProductCards
