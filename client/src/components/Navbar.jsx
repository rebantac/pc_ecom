import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

import { UserAuth } from "../Context/AuthContext";
import { ShoppingCart } from "phosphor-react";
import { CartState } from "../Context/shopContext";

const Navbar = () => {

  const {user, logout} = UserAuth();
  console.log("navbar");
  console.log(user);
  const handleSignOut = async() => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const {
    state: { cart },
  } = CartState();

  return (
    <div>
      <nav className="bg-white p-2 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Styled Logo */}
          <Link to="/">
            <img
              className="h-12 w-14 ml-5"
              src={logo}
              alt="Logo"
            />
          </Link>
          {user?.displayName ? (
            <p className="text-black font-semibold">Hello, {user?.displayName}</p>
          ) : (
            <p className="text-black font-semibold">Hello, Guest</p>
          )}
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-lg transition duration-300 hover:border-blue-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Home Button */}
          <Link to="/" className="hover:text-blue-800 text-grey-800 font-semibold ">
            Home
          </Link>

          {/* Why Choose Us? Link */}
          <Link
            to="/AboutUs"
            className="hover:text-blue-800 text-grey-800 font-semibold"
          >
            Why Choose Us?
          </Link>

          {user?.displayName ? (
            <button
              onClick={handleSignOut}
              className="font-semibold hover:text-blue-800 text-grey-800"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/Login"
              className="hover:text-blue-800 text-grey-800 font-semibold"
            >
              Login
            </Link>
          )}

          {user?.displayName ? (
            <p></p>
          ) : (
            <Link
              to="/Register"
              className="font-semibold hover:text-blue-800 text-grey-800"
            >
              Register
            </Link>
          )}

          {/* Cart Option */}
          <div className="relative">
            {/* Cart icon */}
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
            {/* Cart item count */}
            <span className="bg-red-500 text-black rounded-full w-5 h-5 absolute -top-1 -right-1 flex items-center justify-center">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
