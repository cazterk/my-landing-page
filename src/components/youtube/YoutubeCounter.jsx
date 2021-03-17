import React, { useState, useEffect, Fragment } from "react";
import config from "./config";
import "../../assets/css/LiveStats.css";
import { IconContext } from "react-icons/lib";
import { IoLogoYoutube } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { TiVideo } from "react-icons/ti";
import CountUp from "react-countup";

function YoutubeCounter() {
  const [subscriberCount, setSubscriberCount] = useState(true);
  const [viewCount, setviewrCount] = useState(true);
  const [videoCount, setvideoCount] = useState(true);

  useEffect(() => {
    const { api_key, channel_id } = config;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
    fetch(apiCall)
      .then((result) => result.json())
      .then((data) => {
        const subCount = parseInt(data.items[0].statistics.subscriberCount);

        const viewCount = parseInt(data.items[0].statistics.viewCount);

        const videoCount = parseInt(data.items[0].statistics.videoCount);

        setSubscriberCount(subCount);
        setviewrCount(viewCount);
        setvideoCount(videoCount);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="stats">
        <div className="stats-section container container-all">
          <div className="live-stats ">
            {/* item 1 */}
            <IconContext.Provider value={{ size: 40 }}>
              <div className="item-desc">
                {" "}
                <i id="yt-icon">
                  <IoLogoYoutube />
                </i>
                <h2>Live Stats</h2>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 30, color: "#e62117" }}>
              <div className="live-item">
                <div className="live-icon">
                  <div>
                    <i>
                      <BsPeopleFill />
                    </i>
                    <div className="live-title">
                      {" "}
                      <CountUp
                        end={subscriberCount}
                        duration={20}
                        separator=","
                      />
                    </div>
                  </div>
                  <div>
                    <i>
                      <MdRemoveRedEye />
                    </i>
                    <div className="live-title">
                      <CountUp end={viewCount} duration={20} separator="," />
                    </div>
                  </div>
                  <div>
                    <i>
                      <TiVideo />
                    </i>
                    <div className="live-title">
                      {" "}
                      <CountUp end={videoCount} duration={20} separator="," />
                    </div>
                  </div>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default YoutubeCounter;
