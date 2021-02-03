import React from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  window.onload = function () {
    const btnhamburger = document.querySelector("#btn-hamburger");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const navleft = document.querySelector("#nav-left");

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

    navleft.addEventListener("click", () => {
      navLinks.classList.remove("open");
      console.log("remove");

      btnhamburger.classList.contains("open");
      btnhamburger.classList.remove("open");

      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    });
  };

  return (
    <>
      <div className="nav-section" id="navbar">
        <nav className="nav">
          <Link to="/" className="navbar-logo">
            <img src="./images/logo-caz.svg" alt="" />
          </Link>
          <div id="btn-hamburger" className="hamburger">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
          <ul className="nav-links" id="nav-left">
            <li id="nav-left">
              <Scroll to="features" smooth={true} duration={1000}>
                <Link>Projects</Link>
              </Scroll>
            </li>
            {/* <li id="nav-left">
              <Link>Contact</Link>
            </li> */}
            <li id="nav-left">
              <Scroll to="about" smooth={true} duration={1000}>
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
