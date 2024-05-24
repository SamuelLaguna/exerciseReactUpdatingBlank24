
import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1:', quantity: 1 },
      { id: 2, title: 'Product 2:', quantity: 1 }
    ]
  })

  const handleClick = () => {
    setCart({...cart,items: cart.items.map(item => item.id === 1 ? { ...item, quantity: 2 } : item )})
  }

  return (
    <>
      {/* Title, show items, button to handle the update Update Cart */}
      <div>

      <button className="" color="primary" onClick={handleClick}>
        Update Cart
      </button>
      {cart.items.map(item => (<div key={item.id}><h3>{item.title}</h3><p>Quantity: {item.quantity}</p></div>))}
      </div>
    </>
  )
}

export default Cart