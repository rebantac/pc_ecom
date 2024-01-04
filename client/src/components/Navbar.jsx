import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import { CartState } from "../Context/shopContext";

const Navbar = () => {

  const {
    state : {cart},
  } = CartState();
  return (

    <div>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4 mr-2">
          {/* Logo */}
          <img className="h-8 w-8" src={logo} alt="Logo" />

          {/* Home Button */}
          <Link to="/" className="text-white font-semibold text-lg">Home</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-2">
          {/* Why Choose Us? Link */}
          <Link to="/AboutUs" className="text-white hover:text-gray-300">Why Choose Us?</Link>

          {/* Cart Option */}
          <div className="relative">
            {/* Cart icon */}
            <Link to='/cart'>
              <ShoppingCart size={32}/>
            </Link>
            {/* Cart item count */}
            <span className="bg-red-500 text-white rounded-full w-5 h-5 absolute -top-1 -right-1 flex items-center justify-center">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
