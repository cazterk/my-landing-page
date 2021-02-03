import React from "react";
import "./Features.css";
import { SiYoutubetv } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IconContext } from "react-icons/lib";

function Features() {
  return (
    <>
      <IconContext.Provider value={{ size: 50, color: "#ff304f" }}>
        <div className="features container container-all" id="features">
          <div className="feature-intro">
            <h2>Projects | hobbies </h2>
            <p></p>
          </div>

          <div className="feature-grid">
            {/* item 1 */}
            <div className="feature-item">
              <div className="feature-icon">
                <i>
                  <SiUnity />
                </i>
              </div>
              <div className="feature-title"> Game dev</div>
              <div className="feature-description">
                I like making games when ever I can check out and have a lot to
                learn in order to be establish{" "}
              </div>
            </div>
            {/* item 2 */}
            <div className="feature-item">
              <div className="feature-icon">
                <i>
                  <ImHtmlFive />
                </i>
              </div>
              <div className="feature-title"> Web dev</div>
              <div className="feature-description">
                This I like as well, reactjs and the like, and this site was
                made by me plus the help of the internet
              </div>
            </div>
            {/* item 3 */}
            <div className="feature-item">
              <div className="feature-icon">
                <i>
                  <SiYoutubetv />
                </i>
              </div>
              <div className="feature-title">Youtube</div>
              <div className="feature-description">
                Well I have a youtube channel as well i do youtube from time to
                time, you can call me a youtuber
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Features;
