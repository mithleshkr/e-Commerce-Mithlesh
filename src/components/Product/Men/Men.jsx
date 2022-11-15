import React from "react";
import Filter from "../Filter/Filter";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Men.css";
import menshirt from "./menshirt.jpg";
import m2 from "./m2.jpg";
import m3 from "./m3.jpg";
import m4 from "./m4.jpg";
import m5 from "./m5.jpg";
import m6 from "./m6.jpg";
import m7 from "./m7.jpg";
import m8 from "./m8.jpg";
import m9 from "./m9.jpg";
import m10 from "./m10.jpg";
import m11 from "./m11.jpg";
import m12 from "./m12.jpg";
import m13 from "./m13.jpg";

const Men = () => {
  const navigate = useNavigate()

  const handleLike=()=>{
    alert("liked")
  }
  const handleAddToCart = () =>{
navigate('/cart')
  }

  return (
    <div>
      <div style={{ padding: "15px", marginLeft: "15px", marginTop: "45px" }}>
        <Filter />
      </div>

      <div className="men-main-container">
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={menshirt}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">Black Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>

                    <span className="add-to-cart">
                      <span className="txt" onClick={handleAddToCart}>Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="like-icon" onClick={handleLike}>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={m9}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">White Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={m11}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">Pink Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={m13}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">Grey Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={m13}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">Grey Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={menshirt}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">Black Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={menshirt}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">Black Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>

                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="like-icon">
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={m9}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">White Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img
                    className="img"
                    height="220px"
                    width="240px"
                    src={m11}
                    alt=""
                  />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">Pink Tshirt</span>
                      <span className="p-company">Denim</span>
                    </div>
                    <div className="a-size">
                      Available sizes :{" "}
                      <span className="size">S , M , L , XL</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <a className="cart" href="#">
                    <span className="price">Rs 500</span>
                    <span className="add-to-cart">
                      <span className="txt">Add in cart</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <Favorite fontSize="small" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
