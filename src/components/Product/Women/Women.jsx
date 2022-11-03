import React,{useState} from "react";
import Filter from "../Filter/Filter";
import {  AddShoppingCart, Favorite } from "@mui/icons-material";
import "./Women.css";
import { useNavigate } from "react-router-dom";
//ant design 
import { message } from "antd";

const Women = () => {
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
      <div className="womens-product">
        <div className="product-details">
          <div className="product-details-option">
            <img
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
              alt="no_img"
            />
            <div className="product-footer">
              <p style={{color:"white"}}>Product Details</p>
              <p title="red color" style={{backgroundColor:"red",width:"40px"}}></p>
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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
              src="https://thumbnail.imgbin.com/4/23/22/imgbin-long-sleeved-t-shirt-long-sleeved-t-shirt-crew-neck-t-shirt-women-3DkcWdCLvx0PHvzf6xDuf7xDg_t.jpg"
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

export default Women;
