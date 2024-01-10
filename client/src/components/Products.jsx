import React from 'react';
import ProductCard from './ProductCard';
import { CartState } from '../Context/shopContext';

function Products() {
    const {
        state: { products },
    } = CartState();

    return (
        <div className='container mx-auto mt-8'>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-2xl font-semibold'>New Arrivals</h2>
            </div>
            <hr className='border-t border-gray-500 mb-4' />
            <div className='flex flex-wrap justify-center space-y-4'>
                {products &&
                    products.map((element) => {
                        return <ProductCard key={element.Id} prod={element} />;
                    })}
            </div>
        </div>
    );
}

export default Products;
