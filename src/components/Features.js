import React from "react";
import "../assets/css/Features.css";
import { IoLogoYoutube } from "react-icons/io";
import { SiUnity } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
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
                  I like making games when ever I can, using unity and have a
                  lot to learn in order to be pro{" "}
                </div>
              </div>
              {/* item 2 */}
              <div className="feature-item center-item">
                <div className="feature-icon">
                  <i id="html">
                    <ImHtmlFive />
                  </i>
                </div>
                <div className="feature-title"> Web dev</div>
                <div className="feature-description">
                  This I like as well, reactjs and the like, and this site was
                  made by me with the help of the internet
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
                  Well I have a youtube channel as well i do youtube from time
                  to time, (youtuber)
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
