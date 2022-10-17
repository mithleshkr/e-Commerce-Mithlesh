import React from "react";
import Drawer from "react-modern-drawer";
import { Menu } from "@mui/icons-material";
import "react-modern-drawer/dist/index.css";
import "./Header.css";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate= useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const loginScreen = () =>{
    navigate('/login')
  }
  return (
    <div className="header-main-container">
      <div className="header-data-container">
        <div className="header-left-container">
          <div>
            <Menu onClick={toggleDrawer} fontSize="large" className="menu-hover" />
            <Drawer open={isOpen} onClose={toggleDrawer} direction="left" style={{marginTop:"10vh",marginLeft:"10px"}}>
              <div style={{padding:"10px"}}><Sidebar /></div>
            </Drawer>
          </div>
          <div>
          <img
          onClick={()=>navigate('/')}
          className="logo-img"
          height="50vh"
          width="100px"
          src="https://snappyfly.com/uploads/2018/06/contemporary-flash-indoors-134469.jpg"
          //src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg"
          alt="nologo" />
          </div>
        </div>
        <div className="header-right-container">
          <div>Search</div>
          <div onClick={loginScreen}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
