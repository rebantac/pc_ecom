import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartState } from '../../Context/shopContext';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  // Function to handle quantity change
  const handleQuantityChange = (Id, qty) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { Id, qty },
    });
  };

  const handleRemoveItem = (prod) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: prod ,
    })
  };

  const [total, setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.MRP)*curr.qty, 0));
  }, [cart]);


  

  // Function to handle checkout
  const handleCheckout = () => {
    // Add your checkout logic here
    alert('Checkout clicked!');
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.Id} className="flex items-center justify-between border-b p-4">
            <div className="flex items-center">
              <img src={item.Image} alt={item.Name} className="w-16 h-16 mr-4 object-cover" />
              <div>
                <p className="text-lg font-semibold">{item.Name}</p>
                <p className="text-gray-600">₹{item.MRP}</p>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor={`quantity-${item.Id}`} className="mr-2">
                Quantity:
              </label>
              <select
                id={`quantity-${item.Id}`}
                defaultValue={item.qty}
                onChange={(e) => handleQuantityChange(item.Id, parseInt(e.target.value))}
                className="p-2 border rounded"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => handleRemoveItem(item)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <p className="text-xl font-semibold">Total Amount: ₹{total}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled = {cart.length === 0}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
