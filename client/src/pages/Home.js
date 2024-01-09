import React from 'react'
import Products from '../components/Products'
import Carousel from '../components/Carousel'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Services />
      <Products />
    </div>
  )
}

export default Home