import React, { useState } from 'react'

const Checkout = ({ total }) => {
  const [CheckoutSuccess, setCheckoutSuccess] = useState(false);

  const handleCheckOut = () => {
    setCheckoutSuccess(true);
  };

  return (
    <div className='border p-4 rounded-lg shadow-md mt-4'>
      <h2 className="text-lg font-bold">Checkout</h2>
      {CheckoutSuccess ? (
        <p>Checkout successfull! Thank you for your purchase.</p>
      ) : (
        <>
          <p className="text-green-500 font-bold mb-4">Total: ${total.toFixed(2)}</p>
          <button
            onClick={handleCheckOut}
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Checkout