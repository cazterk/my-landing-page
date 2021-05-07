import React from "react";
import "../assets/scss/about.scss";

function About() {
  return (
    <>
      <div className="about-section">
        <div className="about container container-all " id="about">
          <div className="about-title">
            <h2>About Me</h2>
          </div>
          <div className="about-item">
            <div className="about-icon"></div>
            <div className="about-header">
              <div className="about-profile">
                <img
                  className="profile-img"
                  src="./images/profile.png"
                  alt=""
                />
                <br />
                <br />
                <br />
                <br />
                <div className="about-description">
                  My actuall name is Cephas Zulu, I live in Zambia which is in
                  central-southern Africa, I like technology quite a lot,
                  especially game development and coding (coding for games and
                  web) I also do youtube as well, basically a YouTuber. Above
                  all, I'm a Jesus Christ (The Nazarene) follower, a Christian.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
