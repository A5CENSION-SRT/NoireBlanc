import React , {useState, useEffect}from 'react'
import '../cart/cartItems.css'


const CartItems = () => {
    const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem('cartprod')
    return storedItems ? JSON.parse(storedItems) : []
  })

  useEffect(() => {
      localStorage.setItem("cartprod",JSON.stringify(cartItems))
    },[cartItems])

  return (
    <div className='cart-items-container'>
        {cartItems.length === 0 ?(
            <p className='empty'>Your cart is empty</p>
        ): (
            <>
            <div className='cart-items'>
                {
                    cartItems.map(item => (
                        <div key={item.id} className='cart-item'>
                                <img src={item.image} alt={item.name} />
                                <div className='item-details'>
                                    <h3>{item.name}</h3>
                                    <p className='price'>${item.price}</p>
                                    <div className='quantity-controls'>
                                        <button>-</button>
                                        <span>{item.quantity}</span>
                                        <button>+</button>
                                    </div>
                                    <button className='remove-btn'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                    ))
                }
            </div>
            
            </>
        )}
    </div>
)}

export default CartItems
