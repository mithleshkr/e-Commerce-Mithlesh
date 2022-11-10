import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import men from './men.png'
import women from './women.png'
import kids from './kids.png'

const Product = () => {
  const navigate = useNavigate();
  // const images = [
  //     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];
  //const images = [
    //"https://www.mediavalet.com/wp-content/uploads/2021/10/7-Best-Practices-for-Your-eCommerce-Images-1440x960.jpg",
    //"https://media.smallbiztrends.com/2017/11/millennial-lady-shopping.jpg",
   // "https://stylephotos.ca/storage/publications/pictures/1624876994_big.webp",
    //{men},
  //];

  return (
    <Slide>
    
    <div className="each-slide-effect">
    <div
    className="men-screen"
      onClick={() => navigate("/men")}
      style={{ backgroundImage: `url(${men})` }}
    >
     
    </div>
  </div>
  <div className="each-slide-effect">
    <div
    className="men-screen"
      onClick={() => navigate("/women")}
      style={{ backgroundImage: `url(${women})` }}
    >
     
    </div>
  </div>
     
  <div className="each-slide-effect">
  <div
  className="men-screen"
    onClick={() => navigate("/kids")}
    style={{ backgroundImage: `url(${kids})` }}
  >
   
  </div>
</div>
      
    </Slide>
  );
};

export default Product;
