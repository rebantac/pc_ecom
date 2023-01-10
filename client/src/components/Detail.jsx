import React from 'react';
import { Stack } from '@mui/material';

const Detail = ({ pdtDetail }) => {
	// console.log(pdtDetail[0]);
	const pdt = pdtDetail[0];
	const { Name, Description, MRP, Image, Ratings, Review } = pdt;
	// console.log(Review);

	return (
		<Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
			<img src={Image} alt={Name} loading='lazy' width="500" height="500" />

			<Stack sx={{ gap: { lg: '35px', xs: '20px' } }} >
				<p>Name: {Name}</p>
				{console.log(Description)}
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
			</Stack>
		</Stack>
	)
}

export default Detail