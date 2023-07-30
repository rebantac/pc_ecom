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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className='nav-item'><Link className='nav-link' to='/'>Laptops</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/'>Printers</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/'>Monitors</Link></li>
            </ul>
          </div>
          <div className="my-lg-0 my-2">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={`/AboutUs`}>Why choose us?</Link>
              </li>
              {/* <li className='nav-item'><Link className='nav-link' to='/'>Contact us</Link></li> */}
              <li className='nav-item'><Link className='nav-link' to='/'>Services</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/'>Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
