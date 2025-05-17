import React from 'react'
import './ProductCards.css'
import { Link } from 'react-router-dom'
const ProductCards = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
    <div className="product-card">
        <div className="product-card-image">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card-details">
            <h3 className="product-card-title">{product.name}</h3>
            <span className="product-card-price">${product.price}</span>
        </div>
    </div>
    </Link>
  )
}

export default ProductCards
