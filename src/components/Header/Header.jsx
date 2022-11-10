import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
//import SearchForm from '../form/searchform/searchformview';
import serachbar from './searchbar.png';
import camera from './camera.png'
import "./Header.css";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="headerContainer">
      <div id="logoContainer">
        <div id="burgerIconContainer">
          <Sidebar className="burgerSlice"  />
          {/* <div className='burgerSlice'></div>
						<div className='burgerSlice'></div>
    <div className='burgerSlice'></div> */}
        </div>
        <div id="logo">
          <Link to="/">eCommerce</Link>
        </div>
      </div>
      <div id="headerSearchFormContainer">
        <div className="bar">
        <img
              className="voice1"
              src={serachbar}
              title="Search"
            />
          <input className="searchbar" type="text" title="Search" />
          <a href="#">
            {" "}
            <img
              className="voice"
              src={camera}
              title="Search by Camera"
            />
          </a>
        </div>
        {/* 	<SearchForm
						productSearchHandler={this.props.productSearchHandler}
    /> */}
      </div>
      <div id="headerCartIcon">
        <div id="cartIconContainer">
          <i id="cartIcon" className="fa fa-shopping-basket"></i>
          <span className="cart-icon">
            <ShoppingCart onClick={()=>navigate('/cart')} />
          </span>
        </div>
      </div>
      <div id="signIn" onClick={()=>navigate('/login')} >SIGN IN</div>
    </div>
  );
};
export default Header;

// import React from "react";
// import { Menu, ShoppingCart } from "@mui/icons-material";
// import "./Header.css";
// import { TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";

// const Header = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="header-main-div">
//       <div className="options-div">
//         <div className="menu-logo-div">
//           <div style={{ marginLeft: "20px" }}>
//             <Menu fontSize="large" component={() => <Sidebar />} />
//           </div>
//           <div style={{ marginRight: "320px" }}>
//             <img
//               onClick={() => navigate("/")}
//               height="60vh"
//               width="130px"
//               src="https://c4.wallpaperflare.com/wallpaper/321/1011/781/abstract-vector-colorful-fire-wallpaper-preview.jpg"
//               alt="nologo"
//             />
//           </div>
//           <div>
//           </div>
//         </div>
//         <div className="search-login-div">
//           <div>
//             <TextField
//               placeholder="Search"
//               style={{ backgroundColor: "orange", marginLeft: "100px" }}
//               variant="standard"
//             />
//           </div>
//           <div onClick={() => navigate("/login")} className="Login-title">
//             Login
//           </div>
//           <div>
//             <ShoppingCart onClick={() => navigate("/cart")} />{" "}
//             <span style={{ color: "red", fontSize: "15px" }}>
//               {sessionStorage.getItem("cart-count")}
//             </span>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
