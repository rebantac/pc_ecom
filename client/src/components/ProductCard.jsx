import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  let { pId, name, price, imageUrl } = props;

  return (
    <Link to={`/product/${pId}`}>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={!imageUrl ? "Image not found" : imageUrl} alt='...' />
          <div className="card-body">
            <p className="card-text">Name:{name}</p>
            {/* <p className="card-text">${description}</p> */}
            <p className="card-text">Price:{price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
