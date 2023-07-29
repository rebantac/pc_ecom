import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  let { pId, name, price, imageUrl } = props;

  return (
    <Link to={`/product/${pId}`}>
      <div className=' bg-white rounded-lg shadow-md m-2'>
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top h-48" src={!imageUrl ? "Image not found" : imageUrl} alt='...' />

          <div className="card-body h-24">
            <p className="card-text">Name:{name}</p>
            <p className="card-text">Price:{price}</p>
          </div>
          <div className="px-6 py-4 flex justify-between">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow mr-1"
          onClick={() => {
            // Add your "Add to Cart" button functionality here
            alert(`Added ${name} to cart`);
          }}
        >
          Add to Cart
        </button>
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow ml-1"
          onClick={() => {
            // Add your "Buy Now" button functionality here
            alert(`Buy Now clicked for ${name}`);
          }}
        >
          Buy Now
        </button>
          </div>
        </div>
      </div>

    </Link>
  )
}

export default ProductCard
