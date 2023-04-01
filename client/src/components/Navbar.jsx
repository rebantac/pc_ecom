import React from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">
    //         <img className='mx-3' style={{ height: '50px', width: '50px', borderRadius: '20px' }} src={logo} alt="logo" />
    //       </a>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className='nav-item'>Home</li>
    //           <li className="nav-item">Laptop</li>
    //           <li className="nav-item">Printer</li>
    //           <li className="nav-item">Monitor</li>
    //         </ul>
    //       </div>
    //       <div className="flex space-x-4">
    //         <a href="/" className=" text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
    //           Why Choose Us
    //         </a>
    //         <a href="/" className=" text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
    //           Contact Us
    //         </a>
    //         <a href="/" className="  px-3 py-2 ">
    //           Services
    //         </a>
    //         <a href="/" className=" text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
    //           Cart
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img className='mx-3' style={{ height: '50px', width: '50px',  }} src={logo} alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
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
                <Link className="nav-link" to="/">Why choose us?</Link>
              </li>
              <li className='nav-item'><Link className='nav-link' to='/'>Contact us</Link></li>
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
