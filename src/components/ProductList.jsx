import React from 'react'
import Product from './Product'

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ProductList