import React, { useState } from "react";

//filter component
import Filter from "../Filter/Filter";

//material ui icons
import { AddShoppingCart, Favorite } from "@mui/icons-material";

//css for current component
import "./Men.css";

//navigation
import { useNavigate } from "react-router-dom";

//ant design 
import { message } from "antd";

const Men = () => {
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
      {/*Filter*/}
      <div style={{ float: "left" }}>
        <Filter />
      </div>

      <div className="mens-product">
        <div className="product-details">
          <div className="product-details-option">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
        <br />
        <div className="product-details">
          <div className="product-details-option">
            <img
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
        <br />
        <div className="product-details">
          <div className="product-details-option">
            <img
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-zKtKk1Hsop21DcckfP2TFko1854f-SUBQ&usqp=CAU"
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

export default Men;
