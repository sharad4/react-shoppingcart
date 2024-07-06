import React from 'react'

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="border p-2 rounded mb-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>${item.price} x {item.quantity}</p>
        <div className='flex items-center mt-2'>
          <button
            onClick={() => updateQuantity(item, item.quantity - 1)}
            className='bg-gray-300 text-gray-700 px-2 py-1 rounded mr-2'
          >
            -
          </button>
          <button
            onClick={() => updateQuantity(item, item.quantity + 1)}
            className='bg-gray-300 text-gray-700 px-2 py-1 rounded'
          >
            +
          </button>
        </div>
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