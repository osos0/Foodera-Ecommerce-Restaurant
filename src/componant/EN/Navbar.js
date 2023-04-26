import React from "react";
import { Link } from "react-router-dom";
import navStyle from "../../Styles/Navbar.css";
import { Image } from "react-bootstrap";
import logoSample from "../../imges/lo.png";

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navo}`}>
        <div className={`container`}>
          <Link className={`navbar-brand`} to="/">
            <Image src={logoSample} alt="logo" />
          </Link>
          <button
            className={`navbar-toggler ${navStyle.navflex}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link ora" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ora"
                  aria-current="page"
                  to="/aboutme"
                >
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ora"
                  aria-current="page"
                  to="/explore"
                >
                  Explore Foods
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ora"
                  aria-current="page"
                  to="#EnSlide"
                >
                  Reviews
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link ora" aria-current="page" to="/">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ora" aria-current="page" to="/ar">
                  <button className="ENbtn">AR</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
