import React, { useRef, useEffect } from "react";
import videoone from "./videoone.mp4";

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
        <div></div>
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
          <div className="dashboard-product-card">
            <div>
              <h2>Todays Deals</h2>
            </div>
            <div className="details-container">
            <div className="deals-details">
              <img
                width="240px"
                height="230"
                src="https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
                alt="no_img"
              />
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <p className="discount-details"><i><b>up to 50% off</b></i></p>
              <p className="deal-dis"><b>Deal of the day</b></p>
              </div>
              <p>Product Name</p>
            </div>
            &nbsp;&nbsp;
            <div className="deals-details">
              <img
                width="240px"
                height="230"
                src="https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
                alt="no_img"
              />
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <p className="discount-details"><i><b>up to 50% off</b></i></p>
              <p className="deal-dis"><b>Deal of the day</b></p>
              </div>
              <p>Product Name</p>
            </div>
            &nbsp;&nbsp;
            <div className="deals-details">
              <img
                width="240px"
                height="230"
                src="https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
                alt="no_img"
              />
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <p className="discount-details"><i><b>up to 50% off</b></i></p>
              <p className="deal-dis"><b>Deal of the day</b></p>
              </div>
              <p>Product Name</p>
            </div>
            &nbsp;&nbsp;
            <div className="deals-details">
              <img
                width="240px"
                height="230"
                src="https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
                alt="no_img"
              />
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <p className="discount-details"><i><b>up to 50% off</b></i></p>
              <p className="deal-dis"><b>Deal of the day</b></p>
              </div>
              <p>Product Name</p>
            </div>
            &nbsp;&nbsp;
            
            <div className="deals-details">
              <img
                width="240px"
                height="230"
                src="https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
                alt="no_img"
              />
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <p className="discount-details"><i><b>up to 50% off</b></i></p>
              <p className="deal-dis"><b>Deal of the day</b></p>
              </div>
              <p>Product Name</p>
            </div>
            </div>
          </div>

          {/*contents*/}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
