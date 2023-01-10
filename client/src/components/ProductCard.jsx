import React from 'react'

const ProductCard = (props) => {
  let { name, imageUrl, price } = props;
  return (
    <div className='mx-3 my-3'>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={!imageUrl?"Image not found": imageUrl} alt='...' />
        <div className="card-body">
          <p className="card-text">Name:{name}</p>
          {/* <p className="card-text">${description}</p> */}
          <p className="card-text">Price:{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
