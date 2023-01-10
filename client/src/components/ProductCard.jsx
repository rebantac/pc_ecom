import React from 'react'

const ProductCard = (props) => {
  let { name, description, imageUrl, price } = props;
  return (
    <div className='mx-3 my-3'>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={!imageUrl?"Image not found": imageUrl} />
        <div className="card-body">
          <p className="card-text">${name}</p>
          <p className="card-text">${description}</p>
          <p className='card-text'>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
