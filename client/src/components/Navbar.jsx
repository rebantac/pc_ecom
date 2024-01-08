import React, { useState } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../Context/AuthContext";
import { ShoppingCart } from "phosphor-react";
import { CartState } from "../Context/shopContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const { state: { cart } } = CartState();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="flex items-center space-x-4 lg:space-x-0">
          <div className="lg:flex hidden items-center space-x-4">
            {/* Home Button */}
            <Link to="/" className="hover:text-blue-800 text-grey-800 font-semibold">
              Home
            </Link>

            {/* Why Choose Us? Link */}
            <Link to="/AboutUs" className="hover:text-blue-800 text-grey-800 font-semibold">
              Why Choose Us?
            </Link>

            {user?.displayName ? (
              <button onClick={handleSignOut} className="font-semibold hover:text-blue-800 text-grey-800">
                LogOut
              </button>
            ) : (
              <Link to="/Login" className="hover:text-blue-800 text-grey-800 font-semibold">
                Login
              </Link>
            )}

            {user?.displayName ? (
              <p></p>
            ) : (
              <Link to="/Register" className="font-semibold hover:text-blue-800 text-grey-800">
                Register
              </Link>
            )}
          </div>

          {/* Cart Option */}
          <div className="relative lg:flex hidden">
            {/* Cart icon */}
            <Link to="/cart">
              <ShoppingCart size={32} />
            </Link>
            {/* Cart item count */}
            <span className="bg-red-500 text-black rounded-full w-5 h-5 absolute -top-1 -right-1 flex items-center justify-center">
              {cart.length}
            </span>
          </div>

          {/* Menu button for small screens */}
          <div className="lg:hidden">
            {!menuVisible ? (
              <HiMenuAlt3
                size={30}
                className="block cursor-pointer text-black"
                onClick={() => setMenuVisible(true)}
              />
            ) : (
              <AiOutlineClose
                size={25}
                className="block cursor-pointer text-black"
                onClick={() => setMenuVisible(false)}
              />
            )}
          </div>

          {/* Responsive menu for small screens */}
          {menuVisible && (
            <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#dde0e5] z-10">
              <div className="block w-full fixed top-0 left-0 bg-[#dde0e5] h-full transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl">
                <AiOutlineClose
                  size={25}
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={() => setMenuVisible(false)}
                />
                <ul className="pt-[60px] items-center flex flex-col gap-8">
                  <Link to="/" className="block text-grey-800 hover:text-blue-800 font-semibold">
                    Home
                  </Link>
                  <Link to="/AboutUs" className="block text-grey-800 hover:text-blue-800 font-semibold">
                    Why Choose Us?
                  </Link>
                  {user?.displayName ? (
                    <button onClick={handleSignOut} className="block text-grey-800 hover:text-blue-800 font-semibold">
                      LogOut
                    </button>
                  ) : (
                    <Link to="/Login" className="block text-grey-800 hover:text-blue-800 font-semibold">
                      Login
                    </Link>
                  )}
                  {!user?.displayName && (
                    <Link to="/Register" className="block text-grey-800 hover:text-blue-800 font-semibold">
                      Register
                    </Link>
                  )}
                  <div className="lg:flex">
                  {/* Cart icon */}
                  <Link to="/cart">
                    <ShoppingCart size={32} />
                  </Link>
                  {/* Cart item count */}
                  <span className="bg-red-500 text-black rounded-full w-5 h-5 absolute -top-1 -right-1 flex items-center justify-center">
                    {cart.length}
                  </span>
                </div>
                </ul>
                
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
