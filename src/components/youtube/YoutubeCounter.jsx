import React, { useState, useEffect, Fragment } from "react";
import config from "./config";
import numeral from "numeral";
import "./LiveStats.css";
import { IconContext } from "react-icons/lib";
import { IoLogoYoutube } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";

function YoutubeCounter() {
  const [subscriberCount, setSubscriberCount] = useState();
  const [viewCount, setviewrCount] = useState();
  const [videoCount, setvideoCount] = useState();

  useEffect(() => {
    const { api_key, channel_id } = config;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        const subCount = numeral(
          data.items[0].statistics.subscriberCount
        ).format("0.0");
        const viewCount = numeral(data.items[0].statistics.viewCount).format(
          "0.0"
        );
        const videoCount = numeral(data.items[0].statistics.videoCount).format(
          "0.0"
        );
        setSubscriberCount(subCount);
        setviewrCount(viewCount);
        setvideoCount(videoCount);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="stats-section">
        <IconContext.Provider value={{ size: 40, color: "#e62117" }}>
          <div className="live-stats container container-all">
            {/* item 1 */}
            <div className="item-desc">
              {" "}
              <i>
                <IoLogoYoutube />
              </i>
              <h2>Live Stats</h2>
            </div>
            <div className="live-item">
              <div className="live-icon">
                <div>
                  <i>
                    <BsPeople />
                  </i>
                  <div className="live-title"> {subscriberCount}</div>
                </div>
                <div>
                  <i>
                    <BsCameraVideo />
                  </i>
                  <div className="live-title">
                    {" "}
                    <Fragment>{viewCount}</Fragment>
                  </div>
                </div>
                <div>
                  <i>
                    <AiOutlineCloudUpload />
                  </i>
                  <div className="live-title">
                    {" "}
                    <Fragment>{videoCount}</Fragment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default YoutubeCounter;
