import React from 'react'
import Products from '../components/Products'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import BestSellingProducts from '../components/BestSellingProducts'
import { CartState } from '../Context/shopContext'
const Home = () => {
  const {
    state: { products },
} = CartState();
  return (
    <div>
      <Carousel />
      <Products />
      <BestSellingProducts products={products}/>
      <Services />
    </div>
  )
}

export default Home