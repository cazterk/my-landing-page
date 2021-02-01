import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ size: 40, color: "#fff" }}>
        <footer>
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              cazterk
            </Link>
            <p className="copyrights">cazterk © 2021 All Rights Reserved.</p>
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
