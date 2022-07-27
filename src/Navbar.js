import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="nav">
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <h4 className="brand">LOGO</h4>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse  ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/servicespage"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/aboutpage"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="contactpage"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn  btn-style" type="submit">
                  Sign Up
                </button>
                <button className="btn  btn-style" type="submit">
                  Log In
                </button>
              </form>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
export default Navbar;
