import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {HiMenuAlt3} from "react-icons/hi"
import ClickAwayListener from '@mui/material/ClickAwayListener';


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

  const handleClickAway = () => {
    setMenuVisible(false);
  };


  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto">
        <div className="lg:flex hidden">
          {/* Large screen */}
          <ul className="flex space-x-2 text-white">
            {categories.map((category, index) => (
              <li key={index} className="relative group border-2 border-transparent hover:border-white p-2.5">
                <Link to="#" className="hover:text-white">{category}</Link>
                {/* Additional content or subcategories can be added here */}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden relative z-50">
          {/* Small screen */}
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <HiMenuAlt3
                onClick={() => setMenuVisible(!menuVisible)}
                size={30}
                className="block cursor-pointer text-white"
              />
              {menuVisible && (
                <ul className="bg-gray-800 text-white absolute mt-2 p-2 space-y-2 border border-white rounded shadow-lg">
                  {categories.map((category, index) => (
                    <li key={index} className="hover:text-white">
                      <Link
                        to="#"
                        onClick={() => setMenuVisible(false)}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
