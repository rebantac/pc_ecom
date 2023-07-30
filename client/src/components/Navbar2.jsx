import React from 'react'
import {Link} from 'react-router-dom'
const Navbar2 = ()=> {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "gray" }}>
                    <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className='nav-item'><Link className='nav-link' to='/'>Laptops</Link></li>
                            <li className='nav-item'><Link className='nav-link' to='/'>Printers</Link></li>
                            <li className='nav-item'><Link className='nav-link' to='/'>Monitors</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
};

export default Navbar2;
