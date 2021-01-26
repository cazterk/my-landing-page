import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  window.onload = function () {
    const btnhamburger = document.querySelector("#btn-hamburger");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    });

    btnhamburger.addEventListener("click", function () {
      console.log("hamburger");

      if (btnhamburger.classList.contains("open")) {
        btnhamburger.classList.remove("open");
      } else {
        btnhamburger.classList.add("open");
      }
    });
  };

  return (
    <>
      <div className="nav-section">
        <nav>
          <Link to="/" className="navbar-logo">
            {/* < className="navbar-icon" /> */}
            <span className="logo-left">caz</span>
            <spam className="logo-right">terk</spam>
          </Link>
          <div id="btn-hamburger" className="hamburger">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
