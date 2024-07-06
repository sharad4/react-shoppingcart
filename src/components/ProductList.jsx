import React, { useState } from 'react'
import Product from './Product'

const ProductList = ({ products, addToCart }) => {
  const [sortOption, setSortOption] = useState('default');
  const [filterOption, setFilterOption] = useState('');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'priceAsc') return a.price - b.price;
    if (sortOption == 'priceDesc') return b.price - a.price;
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(filterOption.toLowerCase())
  );

  return (
    <>
      <div className='mb-4'>
        <input 
          type='text'
          value={filterOption}
          onChange={handleFilterChange}
          placeholder='Filter by name'
          className='border p-2 rounded mb-2 w-full'
        />
        <select value={sortOption} onChange={handleSortChange} className='border p-2 rounded w-full'>
          <option value='default'>Sort by</option>
          <option value='priceAsc'>Price: Low to High</option>
          <option value='priceDesc'>Price: High to Low</option>
        </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
   
  )
}

export default ProductList