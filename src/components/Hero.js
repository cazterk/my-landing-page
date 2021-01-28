import React from "react";
import "./Hero.css";
import { AiOutlineGithub } from "react-icons/ai";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Hero() {
  return (
    <>
      <IconContext.Provider value={{ color: "rgb(153, 153, 153)", size: 40 }}>
        <section className="hero">
          <div class="content">
            <div className="hero-content">
              <h2 className="title pop-in">Cazterk here! you are welcome</h2>
              <p className="desc pop-in">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <ul className="social-wrapper pop-in">
                <li>
                  <i id="github">
                    <AiOutlineGithub />
                  </i>
                </li>
                <li>
                  <i id="gamedev">
                    <IoGameControllerSharp />
                  </i>
                </li>
                <li>
                  <i id="youtube">
                    <FaYoutube />
                  </i>
                </li>
              </ul>
              <button className="action pop-in">order now</button>
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </>
  );
}

export default Hero;
