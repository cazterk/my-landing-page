import React from "react";
import "./Features.css";
import { ImYoutube2 } from "react-icons/im";
import { SiUnity } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { IconContext } from "react-icons/lib";

function Features() {
  return (
    <>
      <IconContext.Provider value={{ size: 40, color: "blue" }}>
        <div className="features container container-all">
          <h2>Check out my projects</h2>
          <p></p>
          <div className="feature-grid">
            {/* item 1 */}
            <div className="feature-item">
              <div className="feature-icon">
                <i>
                  <SiUnity />
                </i>
              </div>
              <div className="feature-title"> Hi</div>
              <div className="feature-description">this is a description</div>
            </div>
            {/* item 2 */}
            <div className="feature-item">
              <div className="feature-icon">
                <i>
                  <ImHtmlFive />
                </i>
              </div>
              <div className="feature-title"> Hi</div>
              <div className="feature-description">this is a description</div>
            </div>
            {/* item 3 */}
            <div className="feature-item">
              <div className="feature-icon">
                <i>
                  <ImYoutube2 />
                </i>
              </div>
              <div className="feature-title"> Hi</div>
              <div className="feature-description">this is a description</div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Features;
