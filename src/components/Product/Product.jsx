import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  // const images = [
  //     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];
  const images = [
    "https://www.mediavalet.com/wp-content/uploads/2021/10/7-Best-Practices-for-Your-eCommerce-Images-1440x960.jpg",
    "https://media.smallbiztrends.com/2017/11/millennial-lady-shopping.jpg",
    "https://stylephotos.ca/storage/publications/pictures/1624876994_big.webp",
  ];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div
          onClick={() => navigate("/men")}
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <h1
            style={{
              fontSize:"100px",
              opacity:"0.7",
              color: "orange",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            Men
          </h1>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          onClick={() => navigate("/women")}
          style={{ backgroundImage: `url(${images[1]})` }}
        >
          <h1
            style={{
              fontSize:"100px",
              opacity:"0.7",
              color: "orange",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            Women
          </h1>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          onClick={() => navigate("/kids")}
          style={{ backgroundImage: `url(${images[2]})` }}
        >
          <h1
            style={{
              fontSize:"100px",
              opacity:"0.7",
              color: "orange",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            Kids
          </h1>
        </div>
      </div>
    </Slide>
  );
};

export default Product;
