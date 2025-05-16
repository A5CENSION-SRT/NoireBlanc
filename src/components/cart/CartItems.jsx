import React from 'react'

const CartItems = () => {
    const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem('cartprod')
    return storedItems ? JSON.parse(storedItems) : []
  })
  useEffect(() =>{
      localStorage.setItem("cartprod",JSON.stringify(cartItems))
    },[cartItems])
  return (
    <div className='cart-items-container'>
        <h2> shopping cart </h2>
        
    </div>
  )
}

export default CartItems
