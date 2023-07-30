import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="flex items-center space-x-4">
        <p className='text-2xl'><b>Quantity</b></p>
      <button
        className="border-2 border-black   bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 font-bold py-1 px-2 rounded"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button
        className="border-2 border-black  bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 font-bold py-1 px-2 rounded"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
