import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link as Scroll } from "react-scroll";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ size: 30, color: "#fff" }}>
        <footer>
          <div className="footer-section">
            <Scroll Scroll to="navbar" smooth={true} duration={1000}>
              <Link className="footer-logo">
                <img src="./images/logo-caz.svg" alt="" />
              </Link>
            </Scroll>
            <small className="copyrights">
              cazterk © 2021 All Rights Reserved.
            </small>
            <div className="social-media">
              <Link id="social">
                <AiFillFacebook />
              </Link>
              <Link id="social">
                <FaInstagramSquare />
              </Link>
              <Link id="social">
                <AiFillTwitterSquare />
              </Link>
            </div>
          </div>
        </footer>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
