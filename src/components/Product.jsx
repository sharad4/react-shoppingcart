import React from 'react'

const Product = ({ product, addToCart }) => {
  return (
    <div className='border p-4 rounded-lg shadow-md'>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-green-500 font-bold">$ {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className='bg-blue-500 text-white px-4 py-2 rounded mt-2'
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Product