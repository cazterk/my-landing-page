import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="nav-section" id="navbar">
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
      </div>
    </>
  );
}

export default Navbar;
