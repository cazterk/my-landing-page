import React from "react";
import "./Hero.css";
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
          <div class="content">
            <div className="hero-content">
              <h1 className="title pop-in">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Hello! cazterk here").start();
                  }}
                />
              </h1>
              <p className="desc pop-in">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        " This is my site developed using react, feel free to look around, checkout some goodies and my projects"
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
                    <Button buttonSize="btn--wide" buttonColor="blue">
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
