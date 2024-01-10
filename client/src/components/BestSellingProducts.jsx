import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Assume you have a ProductCard component
import { ChevronLeft, ChevronRight } from 'react-feather';

const BestSellingProducts = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const visibleProducts = Array.isArray(products) ? products.slice(startIndex, startIndex + itemsPerPage) : [];

    const nextSet = () => {
        const newStartIndex = startIndex + itemsPerPage;
        if (newStartIndex < (products ? products.length : 0)) {
            setStartIndex(newStartIndex);
        }
    };

    const prevSet = () => {
        const newStartIndex = startIndex - itemsPerPage;
        if (newStartIndex >= 0) {
            setStartIndex(newStartIndex);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Best Sellers</h2>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={prevSet}
                        disabled={startIndex === 0}
                        className="px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors duration-300"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSet}
                        disabled={startIndex + itemsPerPage >= (products ? products.length : 0)}
                        className="px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-300 transition-colors duration-300"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
            <hr className="border-t border-gray-500 mb-4" />
            <div className="flex flex-wrap space-y-4">
                {visibleProducts.map((product) => (
                    <div key={product.id} className="w-full md:w-1/2 lg:w-1/4">
                        <ProductCard prod={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellingProducts;
