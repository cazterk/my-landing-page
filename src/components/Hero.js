import React from "react";
import "../assets/css/Hero.css";
import { AiOutlineGithub } from "react-icons/ai";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Typewriter from "typewriter-effect";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

function Hero() {
  return (
    <>
      <IconContext.Provider value={{ size: 40 }}>
        <section className="hero" id="hero">
          <div className="content">
            <div className="hero-content">
              <h1 className="title pop-in">
                cazterk <span id="title-colored"> here</span> :)
              </h1>
              <p className="desc pop-in">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(
                        "Your all in one place to find out what cazterk is up to"
                      )
                      .start();
                  }}
                />
              </p>
              <div className="social-wrapper pop-in">
                <Link
                  to={"//www.github.com/cazterk/"}
                  target="_blank"
                  aria-label="Github"
                >
                  <i id="github">
                    <AiOutlineGithub />
                  </i>
                </Link>
                <Link
                  to={"//www.tinyurl.com/1j61mbdh/"}
                  target="_blank"
                  aria-label="Itch"
                >
                  <i id="gamedev">
                    <IoGameControllerSharp />
                  </i>
                </Link>

                <Link
                  to={"//www.youtube.com/c/cazterk"}
                  target="_blank"
                  aria-label="YouTube"
                >
                  <i id="youtube">
                    <FaYoutube />
                  </i>
                </Link>
              </div>
              <div className="action pop-in">
                <Scroll to="features" smooth={true} duration={1000}>
                  <Link>
                    <Button buttonSize="btn--medium" buttonColor="blue">
                      get started
                    </Button>
                  </Link>
                </Scroll>
              </div>
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </>
  );
}

export default Hero;
