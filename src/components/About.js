import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div>
        <section className="about">
          <div className="container-about">
            <div className="grid">
              <div className="left">
                <img src="./images/perfil.png" alt="" />
              </div>
              <div className="right">
                <h4>What up!!</h4>
                <h1>I'm Cephas Zulu</h1>
                <h3>A Tech Hobbyist</h3>
                <p>
                  I live in Zambia which is in central-southern Africa, I like
                  technology quite a lot, especially game development and coding
                  (coding for games and web) I also do youtube as well basically
                  a YouTuber. Above all, I'm a Jesus Christ (The Nazarene)
                  follower, a Christian.
                </p>
                <Link>
                  <a className="btn-about">scroll down</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
