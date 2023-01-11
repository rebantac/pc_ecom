import React from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
         <img className= 'mx-3' style={{height: '50px', width: '50px', borderRadius: '20px'}} src={logo} alt="logo" />
        </a>

        <div className="flex space-x-4">
          <a href="/" className=" text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
            Why Choose Us
          </a>
          <a href="/" className=" text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
            Contact Us
          </a>
          <a href="/" className="  px-3 py-2 ">
            Services
          </a>
          <a href="/" className=" text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
