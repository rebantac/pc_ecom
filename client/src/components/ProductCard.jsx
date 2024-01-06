import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartState } from '../Context/shopContext';


const ProductCard = ({ prod }) => {
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  return (
    <div className=' bg-white rounded-lg shadow-md m-2'>
      <div className="card" style={{ width: '18rem' }}>
        <Link to={`/product/${prod.Id}`}>
          <img className="card-img-top h-48" src={!prod.Image ? "Image not found" : prod.Image} alt='...' />

          <div className="card-body h-20">
            <p className="card-text">{prod.Name.length < 30 ? prod.Name : prod.Name.substring(0, 30) + "..."}</p>
            <p className="card-text">₹{prod.MRP}</p>
          </div>
        </Link>
        <div className="flex items-center justify-center m-2">

          {/*check whether in cart or not */}
          {
            cart.some((p) => p.Id === prod.Id) ? (
              <button
                className="transition ease-in-out delay-150 flex-shrink-0 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded shadow mr-1"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="transition ease-in-out delay-150 flex-shrink-0 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded shadow mx-1"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }
              >
                Add to Cart
              </button>

            )}


          <button
            className="transition ease-in-out delay-150 flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded shadow ml-1"
            onClick={() => {
              if (cart.some((p) => p.Id === prod.Id)) {
                navigate('/cart');
              } else {
                dispatch({
                type: "ADD_TO_CART",
                payload: prod,
                });
                navigate('/cart');
              }
            }}
          >
            Buy Now
          </button>
        </div>

      </div>
    </div>

  )
}

export default ProductCard
