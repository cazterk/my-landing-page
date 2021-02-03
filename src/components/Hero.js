import React from "react";
import "./Hero.css";
import { AiOutlineGithub } from "react-icons/ai";
import { IoGameControllerSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Typewriter from "typewriter-effect";
import { Button } from "./Button";
import { Link } from "react-router-dom";

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
                <i id="github">
                  <AiOutlineGithub />
                </i>

                <i id="gamedev">
                  <IoGameControllerSharp />
                </i>

                <i id="youtube">
                  <FaYoutube />
                </i>
              </div>
              <div className="action pop-in">
                <Link>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    get started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </>
  );
}

export default Hero;
