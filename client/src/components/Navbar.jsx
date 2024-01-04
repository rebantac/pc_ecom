import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const {user, logout} = UserAuth();

  const handleSignOut = async() => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }


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
          {user?.displayName ? <p className="text-white">Hello, {user?.displayName}</p> : <Link to="/" className="text-white font-semibold text-lg">Home</Link>}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-2">
          {/* Why Choose Us? Link */}
          <Link to="/AboutUs" className="text-white hover:text-gray-300">Why Choose Us?</Link>
          {user?.displayName ? <button onClick={handleSignOut} className="text-white hover:text-gray-300">LogOut</button> : <Link to="/Login" className="text-white hover:text-gray-300">Login</Link>}
          {user?.displayName ? <p></p> : <Link to="/Register" className="text-white hover:text-gray-300">Register</Link>}

          {/* Cart Option */}
          <div className="relative">
            {/* Cart icon */}
            <Link to='/cart'>

              <button className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19c0 1.657 1.343 3 3 3s3-1.343 3-3M4 2l2.3 6.9M20 2l-2.3 6.9M2 10h20l-2.2 6.6c-.267.8-1 1.4-1.9 1.4H5.1c-.9 0-1.6-.6-1.9-1.4L2 10z"
                  />
                </svg>
              </button>

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
