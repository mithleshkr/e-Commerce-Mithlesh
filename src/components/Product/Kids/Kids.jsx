import React,{useState} from "react";
import Filter from "../Filter/Filter";
import {  AddShoppingCart, Favorite } from "@mui/icons-material";
import "./Kids.css";
import { useNavigate } from "react-router-dom";
//ant design 
import { message } from "antd";

const Kids = () => {
   //navigation
   const navigate = useNavigate();

   //state for count the add to cart
   const [count, setCount] = useState(0);
 
   //*function to increase the cart number
   const handleAddToCart = () => {
     setCount(count + 1);
     message.info("Added to cart");
   };
 
   //*function to display info of liked item
   const handleLikeProduct = () => {
     message.info("You liked this item");
   };
 
  return (
    <div>
      <div style={{ float: "left" }}>
        <Filter />
      </div>
      <div className="kids-product">
        <div className="product-details">
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
        </div>
        <br/>
        <div className="product-details">
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
        </div>
        <br/>
        <div className="product-details">
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
          <div className="product-details-option">
            <img
              src=" https://toppng.com/uploads/preview/1-shirt-t-shirt-kids-mockup-psd-free-download-11562999023pk7x4iaof6.png"
              alt="no_img"
            />
            <div className="product-footer">
              <p>Product Details</p>
              <p>Color</p>
            </div>
            <div className="product-footer">
              <AddShoppingCart
                className="add-to-cart"
                onClick={handleAddToCart}
              />
              <h3 style={{ color: "red" }} onClick={() => navigate("/cart")}>
                {count}
              </h3>
              <Favorite className="like-product" onClick={handleLikeProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
