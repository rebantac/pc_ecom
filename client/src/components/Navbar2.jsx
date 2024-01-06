// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar2 = () => {
    const categories = [
        'Laptops',
        'Monitors',
        'Printers',
        'Peripherals',
        'CCTV Cameras',
        'Services',
        'LED Wall Installation',
    ];

    return (
        <nav className="bg-gray-800 ">
            <div className="container mx-auto">
                    <ul className="flex space-x-2 text-white">
                        {categories.map((category, index) => (
                            <li key={index} className="relative group border-2 border-transparent hover:border-white p-2.5">

                                <Link to="#" className='hover:text-white'>{category}</Link>
                                {/* <div className="hidden group-hover:block absolute bg-white mt-2 p-4 rounded shadow-lg"> */}
                                {/* Subcategories or additional content can be added here */}
                                {/* Example: <p>Subcategory 1</p> */}
                                {/* </div> */}
                            </li>
                        ))}
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar2;
