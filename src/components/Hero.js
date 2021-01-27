import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div class="content">
          <div className="hero-content">
            <h2 className="title pop-in">Cazterk here! you are welcome</h2>
            <p className="desc pop-in">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="action pop-in">order now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
