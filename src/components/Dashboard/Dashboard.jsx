import React, { useRef, useEffect } from "react";
import videoone from './videoone.mp4'

import "./Dashboard.css";

const Dashboard = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div className="dashboard-main-container">
      <div>
        <div>
          
        </div>
        <div>
          <video
           
           width="100%"
           
            className="video-container"
            playsInline
            loop
            muted
            alt="All the devices"
            src={videoone}
            //src="https://iz-my.sharepoint.com/:v:/g/personal/mithlesh_kumar_intelizign_com/Edy7Ca-HZCJEjHvzDtYDhZkBhKbRcPC4WwE47GPEzvD3Gw?e=SQEjO0"
            //src="https://media.istockphoto.com/id/1360048537/video/futuristic-animated-concept-big-data-center-chief-technology-officer-using-laptop-standing-in.mp4?s=mp4-640x640-is&k=20&c=qfseEZiJxfYc26fY6oD2hRZp4stCUQAHBxFgbPJCrKc="
            ref={videoEl}
          />
        </div>
        <div>
        <card className="dashboard-product-card">
        Product1
        </card>

        {/*contents*/}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
