import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link as Scroll } from "react-scroll";

function Footer() {
  const year = React.useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ size: 30, color: "#212f3c" }}>
        <footer>
          <div className="footer-section">
            <Scroll Scroll to="navbar" smooth={true} duration={1000}>
              <Link className="footer-logo">cazterk</Link>
            </Scroll>
            <small className="copyrights">
              cazterk © {year} All Rights Reserved.
            </small>
            <div className="social-media">
              <Link
                to={"//www.facebook.com/Cazhd1/"}
                target="_blank"
                aria-label="facebook"
                id="social"
              >
                <AiFillFacebook />
              </Link>
              <Link
                to={"//www.instagram.com/cazterk/"}
                target="_blank"
                aria-label="instagram"
                id="social"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                to={"//www.twitter.com/cazterk"}
                target="_blank"
                aria-label="twitter"
                id="social"
              >
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
