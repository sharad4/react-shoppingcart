import React from 'react'
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
      <p className='text-green-500 font-bold mt-4'>Totals: ${total.toFixed(2)}</p>
    </div>
  )
}

export default Cart