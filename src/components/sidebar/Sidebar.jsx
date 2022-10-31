import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Menu, Dashboard, AppRegistrationRounded,Login,Category,ShoppingCart } from "@mui/icons-material";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate= useNavigate();
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{ backgroundColor: "black", color: "orange" }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Dashboard", "Register", "Login", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "orange" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor} style={{ backgroundColor: "black" }}>
          <Menu
            className="menu-icon"
            onClick={toggleDrawer(anchor, true)}
            fontSize="large"
          />
          <Drawer
            className="drawer-container"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
          <div>
            <div>
              <List>
              <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "orange" }}>
                 <Dashboard />
                </ListItemIcon>
                <ListItemText style={{color:"orange"}} onClick={()=>navigate('/')}>Dashboard</ListItemText>
              </ListItemButton>
            </ListItem>
              </List>
            </div>
            <div>
            <List>
              <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "orange" }}>
                 <AppRegistrationRounded />
                </ListItemIcon>
                <ListItemText style={{color:"orange"}} onClick={()=>navigate('/register')}>Register</ListItemText>
              </ListItemButton>
            </ListItem>
              </List>
            </div>
            <div>
            <List>
              <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "orange" }}>
                 <Login />
                </ListItemIcon>
                <ListItemText style={{color:"orange"}} onClick={()=>navigate('/login')}>Login</ListItemText>
              </ListItemButton>
            </ListItem>
              </List>
            </div>
            <div>
            <List>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "orange" }}>
               <Category />
              </ListItemIcon>
              <ListItemText style={{color:"orange"}} onClick={()=>navigate('/product')}>Products</ListItemText>
            </ListItemButton>
          </ListItem>
            </List>
            </div>
            <div>
            <List>
            <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "orange" }}>
               <ShoppingCart />
              </ListItemIcon>
              <ListItemText style={{color:"orange"}} onClick={()=>navigate('/cart')}>Cart</ListItemText>
            </ListItemButton>
          </ListItem>
            </List>
            </div>
          </div>
            {/* {list(anchor)} */}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css'

// const Sidebar = () => {
//   return (
//     <div>

//     <ul>
//     <li className="li-div"><NavLink exact activeClassName="active" to='/'>Dashboard</NavLink></li>
//             <li className="li-div" ><NavLink activeClassName="active" to='/register'>Register </NavLink></li>
//             <li className="li-div"><NavLink activeClassName="active" to='/login'>Login</NavLink></li>
//             </ul>
//     </div>
//   )
// }

// export default Sidebar

// import React, { useState } from 'react';
// import 'antd/dist/antd.css';

// import {  MailOutlined,  } from '@ant-design/icons';
// import { Menu } from 'antd';

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Option 1', '1'),
//     getItem('Option 2', '2'),
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//   ]),

// ];

// // submenu keys of first level
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
// const Sidebar = () => {
//   const [openKeys, setOpenKeys] = useState(['sub1']);
//   const onOpenChange = (keys) => {
//     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
//     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       setOpenKeys(keys);
//     } else {
//       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//     }
//   };
//   return (
//     <Menu
//       mode="inline"
//       openKeys={openKeys}
//       onOpenChange={onOpenChange}
//       style={{
//         width: 256,
//       }}
//       items={items}
//     />
//   );
// };
// export default Sidebar;
