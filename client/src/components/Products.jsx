import React from 'react'
import data from '../assets/data.json'
import ProductCard from './ProductCard'

function Products() {
    return (
        <div className='flex flex-wrap justify-center'>
            {data && data.map((element) => {
                return <ProductCard key={element.Id} pId={element.Id} name={element.Name} price={element.MRP} imageUrl={element.Image} />
            })}
        </div>
    )
}

export default Products