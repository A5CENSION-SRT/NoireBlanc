import React , {useState, useEffect}from 'react'
import './CartItems.css'


const CartItems = () => {
    const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem('cartprod')
    return storedItems ? JSON.parse(storedItems) : []
  })

  useEffect(() => {
      localStorage.setItem("cartprod",JSON.stringify(cartItems))
    },[cartItems])
    const total = cartItems.reduce((sum, item) => 
        sum + (item.quantity * item.price)
    , 0)
    const incrementprod =(item)=>{
        setCartItems(cartItems.map(product => product.id === item.id
            ?{...item,quantity: item.quantity + 1}:item
        ))
    }
    const decrementprod =(item)=>{
        setCartItems(cartItems.map(product => product.id === item.id
            ?{...item,quantity: item.quantity - 1}:item
        ))
    }

    const removeprod = (item) => {
        setCartItems(cartItems.filter(product => product.id !== item.id))
    }

  return (
    <>
    <div className="cart-head">your products in cart</div>
    <div className='cart-items-container'>
        {cartItems.length === 0 ? (
            <p className='empty'>Your cart is empty</p>
        ) : (
            <div className='cart-content'>
                <div className='cart-items'>
                    {   
                        cartItems.map(item => (
                            <div className='cart-item' key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className='item-details'>
                                    <h3>{item.name}</h3>
                                    <h3>{item.shortDescription}</h3>
                                    <p className='price'>${item.price}</p>
                                </div>
                                <div className='quantity-controls'>
                                    <div className='pm-container'>
                                    <button className='pm' onClick={() => decrementprod(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button className='pm' onClick={() => incrementprod(item)}>+</button>
                                    </div>
                                <div>
                                    <button className='remove-btn' onClick={() => removeprod(item)}>
                                    remove
                                    </button>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
                <div className='cart-total'>
                    <div className='cart-heading'>
                        <h1 className='heading'>cart summary</h1></div>


                    <div className='items-catalog'>
                        {
                            cartItems.map(item =>(
                                <h4 key={item.id}>{item.name} x {item.quantity} = $ {item.price * item.quantity}</h4>
                            ))
                        }
                    <div className='total'>
                        <h2>{`Total Amount - $ ${total}`}</h2>
                    </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    </>
)}

export default CartItems
