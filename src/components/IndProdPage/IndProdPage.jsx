import React from 'react'
import './IndProdPage.css'

const IndProdPage = ({product}) => {
  return (
    <div>
      <div className='product-page-container'>
        <div className='product-image-container'>
            <img src={product.image} alt={product.name} className='product-image'/>
        </div>
        <div className='product-details-container'>
            <h1 className='product-name'>{product.name}</h1>
            <p className='product-description'>{product.shortDescription}</p>
            <p className='product-description'>{product.longDescription}</p>
            <p className='product-price'>${product.price}</p>
            <button className='add-to-cart-button'>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default IndProdPage
