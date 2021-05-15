import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "../assets/scss/navbar.scss";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  if (menuActive) {
    document.body.style.overflow = "hidden";
  } else if (!menuActive) {
    document.body.style.overflow = "scroll";
  }

  return (
    <>
      <div>
        <nav className="navbar">
          <Link to="/" className="navbar__logo">
            cazterk
          </Link>

          <div className="navbar__bars">
            <div
              onClick={() => setMenuActive(!menuActive)}
              className={`hamburger__menu ${menuActive && "animate"}`}
            ></div>
          </div>
          <div className={`navbar__menu ${menuActive && "animate"}`}>
            <Scroll
              to="features"
              smooth={true}
              duration={1000}
              onClick={() => setMenuActive(!menuActive)}
            >
              <Link className="navbar__menu--links">Projects</Link>
            </Scroll>

            <Scroll
              to="about"
              smooth={true}
              duration={1000}
              onClick={() => setMenuActive(!menuActive)}
            >
              <Link className="navbar__menu--links">About</Link>
            </Scroll>
          </div>
        </nav>
      </div>

      {/* <div className="nav-section" id="navbar">
        <nav className="nav">
          <div>
            <Link to="/" className="navbar-logo">
              cazterk
            </Link>
          </div>

          <div
            onClick={() => setMenuActive(!menuActive)}
            className={`hamburger ${menuActive && "open"}`}
          >
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
          <ul className={`nav-links ${menuActive && "open"}`}>
            <li className={`nav-left ${menuActive && "fade"}`}>
              <Scroll
                to="features"
                smooth={true}
                duration={1000}
                onClick={() => setMenuActive(!menuActive)}
              >
                <Link>Projects</Link>
              </Scroll>
            </li>

            <li className={`nav-left ${menuActive && "fade"}`}>
              <Scroll
                to="about"
                smooth={true}
                duration={1000}
                onClick={() => setMenuActive(!menuActive)}
              >
                <Link>About</Link>
              </Scroll>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
}

export default Navbar;
