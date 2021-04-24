import React from "react";
import "../assets/css/Features.css";
import { IoLogoYoutube } from "react-icons/io";
import { SiUnity } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Features() {
  return (
    <>
      <IconContext.Provider value={{ size: 50 }}>
        <div className="feature-section">
          <div className="features container container-all" id="features">
            <div className="feature-intro">
              <h2>Projects | hobbies </h2>
              <p></p>
            </div>

            <div className="feature-grid">
              {/* item 1 */}
              <div className="feature-item left-item">
                <div className="feature-icon">
                  <i id="unity">
                    <SiUnity />
                  </i>
                </div>
                <div className="feature-title"> Game dev</div>
                <div className="feature-description">
                  I like making games, using unity, I'm always learning from the
                  internet and established people in the industry{" "}
                </div>
              </div>
              {/* item 2 */}
              <div className="feature-item center-item">
                <div className="feature-icon">
                  <i id="html">
                    <FaCode />
                  </i>
                </div>
                <div className="feature-title"> Web dev</div>
                <div className="feature-description">
                  I'm a reactjs developer, I like good ui design, I do backend
                  as well with node and dotnet
                </div>
              </div>
              {/* item 3 */}
              <div className="feature-item right-item">
                <div className="feature-icon">
                  <i id="youtube-feature">
                    <IoLogoYoutube />
                  </i>
                </div>
                <div className="feature-title">Youtube</div>
                <div className="feature-description">
                  Tech focused channel, programming tips and other random cool
                  stuff, feel free to subscribe its free
                </div>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Features;
