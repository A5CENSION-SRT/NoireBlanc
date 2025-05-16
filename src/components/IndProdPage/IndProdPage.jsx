import React, { useEffect, useState } from 'react'
import './IndProdPage.css'

const IndProdPage = ({product}) => {

  const[cartItems,setCartItems] = useState(() =>{
    const storedItems = localStorage.getItem('cartprod')
    return storedItems ? JSON.parse(storedItems):[]
  })
  useEffect(() =>{
    localStorage.setItem("cartprod",JSON.stringify(cartItems))
  },[cartItems])
  const addToCart = (product) =>{
    const existingItem = cartItems.find(item =>item.id === product.id);
    if(existingItem){
      setCartItems(cartItems.map(item => item.id === product.id
        ?{...item,quantity: item.quantity + 1}:item
      ))
    }
    else{
      setCartItems([...cartItems,{...product,quantity: 1}])
    }
    
  }
  
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
            <button className='add-to-cart-button' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default IndProdPage
