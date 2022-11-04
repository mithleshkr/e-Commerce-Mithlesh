import React, { useState } from "react";

//material ui icons
import {
  RemoveCircle,
  AddCircle,
  ShoppingBagRounded,
} from "@mui/icons-material";

//css for current component
import "./Cart.css";

const Cart = () => {
  //state for counter
  const [count, setCount] = useState(1);

  //*function to increase the cart item
  const handleIncrease = () => {
    setCount(count + 1);
  };

  //*function to decrease the cart item
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className="cart-product">
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
              {/* <AddShoppingCart className="add-to-cart" />
                  <Favorite className="like-product" /> */}
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
            </div>
          </div>
        </div>
        <br />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
            </div>
          </div>
        </div>
        <br />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
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
              <div className="counter">
                <RemoveCircle onClick={handleDecrease} />{" "}
                <h3 style={{ color: "red" }}>{count} </h3>{" "}
                <AddCircle onClick={handleIncrease} />
              </div>
              <ShoppingBagRounded titleAccess="Buy Now" className="buynow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
