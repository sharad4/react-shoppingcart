import React from 'react'

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="border p-2 rounded mb-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>${item.price} x {item.quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(item)}
        className='bg-red-500 text-white px-2 py-1 rounded'
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem