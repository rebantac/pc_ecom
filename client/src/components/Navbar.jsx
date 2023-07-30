import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img className="h-8 w-8" src={logo} alt="Logo" />

          {/* Home Button */}
          <Link to="/" className="text-white font-semibold text-lg">Home</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Why Choose Us? Link */}
          <Link to="/AboutUs" className="text-white hover:text-gray-300">Why Choose Us?</Link>

          {/* Cart Option */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Cart
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
