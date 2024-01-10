import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
function Footer() {
  return (
    <div>
      <div className="text-center text-lg-start bg-light text-muted">
        <section className="flex justify-center lg:justify-between p-4 border-b">
          <div className="me-5 lg:me-0">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="flex space-x-4">
            <Link to="/" className="text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link to="/" className="text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="/" className="text-reset">
              <i className="fab fa-instagram"></i>
            </Link>

          </div>
        </section>

        <section className="container mt-5">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">
                <i className="fas fa-gem me-3"></i>Pooja Computers
              </h6>
              <Link to="/">
                <img
                  className="h-70 w-40 ml-10"
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">Visit Us</h6>
              <p>
                <Link to="/" target="_blank" className="text-reset">
                  SP road
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Marathalli
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Turuvekere
                </Link>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">Help & FAQs</h6>
              <p>
                <Link to="/" className="text-reset">
                  Online Ordering
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Customer Service
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i>Bengaluru, 560-002, India
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>sales@poojacomputers.in
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+91-80-4132 4765
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+91-80-41221127
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+91-9880121898
              </p>
            </div>
          </div>
        </section>

        <div className="text-center p-4 bg-gray-100">
          © 2024 Copyright:
          <Link className="text-reset font-bold" to="https://mdbootstrap.com/">
            PoojaComputers.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
