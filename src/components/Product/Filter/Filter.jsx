import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div>
      <div className="filter-options">
        <div>
          <h4 style={{ color: "white" }}>Filters</h4>
        </div>
        <div className="price-option">
          <h4 className="option-title">Price</h4>
          <div>
            <p>500-1000</p>
            <p>1000-5000</p>
            <p>5000 and above</p>
          </div>
          <hr />
        </div>
        <br />
        <div className="discount-option">
          <h4 className="option-title">Discount</h4>
          <p>10%</p>
          <p>20%</p>
          <p>50%</p>
        </div>
        <hr />
        <div className="latest-options">
          <h4 className="option-title">Colors</h4>
          <p>Red</p>
          <p>Black</p>
          <p>Blue</p>
        </div>
        <hr />
        <div className="size-options">
          <h4 className="option-title">Size</h4>
          <p>Small</p>
          <p>Medium</p>
          <p>Large</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
