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
        <React.Fragment key={anchor} className="sidenav-body-clr">
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
                <ListItemText style={{color:"white"}} onClick={()=>navigate('/')}>Dashboard</ListItemText>
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
                <ListItemText style={{color:"white"}} onClick={()=>navigate('/register')}>Register</ListItemText>
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
                <ListItemText style={{color:"white"}} onClick={()=>navigate('/login')}>Login</ListItemText>
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
              <ListItemText style={{color:"white"}} onClick={()=>navigate('/product')}>Products</ListItemText>
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
              <ListItemText style={{color:"white"}} onClick={()=>navigate('/cart')}>Cart</ListItemText>
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

