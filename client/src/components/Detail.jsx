import React from 'react';
import { Stack } from '@mui/material';
import { CartState } from '../Context/shopContext';
import { useNavigate } from 'react-router-dom';




const Detail = ({ pdtDetail }) => {
	const navigate = useNavigate();
	const {
		state: { cart },
		dispatch,
	} = CartState();
	const prod = pdtDetail[0];
	const { Name, MRP, Image, Ratings, Review } = prod;


	const handleBuyNow = () => {
		if (cart.some((p) => p.Id === prod.Id)) {
		  navigate('/cart');
		} else {
		  dispatch({
			type: "ADD_TO_CART",
			payload: prod,
		  });
		  navigate('/cart');
		}
	  };

	return (
		<Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
			<img src={Image} alt={Name} loading='lazy' width="500" height="500" />

			<Stack sx={{ gap: { lg: '35px', xs: '20px' } }} >
				<p>Name: {Name}</p>
				<p>Price: Rs.{MRP}</p>
				<p>Ratings: {Ratings}</p>

				{/* <div>
					Features:
					{Description.Warranty}
				</div> */}

				<div>
					Reviews:
					{Review.map((curr) => {
						return (
							<p>{curr}</p>
						)
					})}
				</div>
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
						onClick={handleBuyNow}
					>
						Buy Now
					</button>
				</div>
			</Stack>
		</Stack>
	)
}

export default Detail