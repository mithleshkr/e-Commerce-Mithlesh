import React from "react";
import Filter from "../Filter/Filter";
import { Favorite } from "@mui/icons-material";
import "./Pets.css";
import p1 from './p1.jfif'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import p4 from './p4.webp'


const Pets = () => {
  return (
    <div >
    <div style={{padding:"15px",marginLeft:"15px",marginTop:"45px"}}>
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
                    src={p1}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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
                    src={p2}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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
                    src={p3}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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
                    src={p4}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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
                    src={p3}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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
                    src={p4}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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
                    src={p1}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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
                    src={p2}
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
                      <span className="txt">Add in cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      
                      <span  ><Favorite fontSize="small" /></span>
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

export default Pets;

