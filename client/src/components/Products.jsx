import React from 'react'
import ProductCard from './ProductCard'
import { CartState } from '../Context/shopContext'

function Products() {
    const {
        state :{products},
    } = CartState();
    return (
        <div className='flex flex-wrap justify-center'>
            {products && products.map((element) => {
                return <ProductCard key={element.Id} prod={element} />
            })}
        </div>
    )
}

export default Products