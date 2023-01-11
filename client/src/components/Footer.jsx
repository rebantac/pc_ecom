import React from "react";


function Footer() {
  return (
    <div>
      <div className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Pooja Computers
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Visit Us</h6>
                <p>
                  <a href="/" target="_blank" className="text-reset">
                    SP road
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Marathalli
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Turuvekere
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help & FAQs</h6>
                <p>
                  <a href="/" className="text-reset">
                    Online Ordering
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Customer Service
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Bengaluru, 560-002, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  sales@poojacomputers.in
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
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{backgroundcolor : 'rgba(0, 0, 0, 0.05)'}}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
