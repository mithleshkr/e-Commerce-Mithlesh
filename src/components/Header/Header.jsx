import React from "react";
import { Menu } from "@mui/icons-material";
import "./Header.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-main-div">
      <div className="options-div">
        <div className="menu-logo-div">
          <div style={{ marginLeft: "20px" }}>
          
          
            <Menu fontSize="large" component={()=><Sidebar />} />
          </div>
          <div style={{ marginRight: "270px" }}>
            <img
            onClick={()=>navigate('/')}
              height="50vh"
              width="100px"
              src="https://snappyfly.com/uploads/2018/06/contemporary-flash-indoors-134469.jpg"
              alt="nologo"
            />
          </div>
          <div></div>
        </div>
        <div className="search-login-div">
          <div>
            <TextField
              placeholder="Search"
              style={{ backgroundColor: "orange", marginLeft: "100px" }}
              variant="standard"
            />
          </div>
          <div 
          onClick={()=>navigate('/login')}
          className="Login-title">
          Login
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React from "react";
// import Drawer from "react-modern-drawer";
// import { Menu } from "@mui/icons-material";
// import "react-modern-drawer/dist/index.css";
// import "./Header.css";
// import Sidebar from "../sidebar/Sidebar";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate= useNavigate();
//   const [isOpen, setIsOpen] = React.useState(false);
//   const toggleDrawer = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const loginScreen = () =>{
//     navigate('/login')
//   }
//   return (
//     <div className="header-main-container">
//       <div className="header-data-container">
//         <div className="header-left-container">
//           <div>
//             <Menu onClick={toggleDrawer} fontSize="large" className="menu-hover" />
//             <Drawer open={isOpen} onClose={toggleDrawer} direction="left" style={{marginTop:"10vh",marginLeft:"10px"}}>
//               <div><Sidebar  /></div>
//             </Drawer>
//           </div>
//           <div>
//           <img
//           onClick={()=>navigate('/')}
//           className="logo-img"
//           height="50vh"
//           width="100px"
//           src="https://snappyfly.com/uploads/2018/06/contemporary-flash-indoors-134469.jpg"
//           alt="nologo" />
//           </div>
//         </div>
//         <div className="header-right-container">
//           <div>Search</div>
//           <div
//           className="login-hover"
//           onClick={loginScreen}>Login</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
