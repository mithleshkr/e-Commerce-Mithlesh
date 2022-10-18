import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>

    <ul>
    <li className="li-div"><NavLink exact activeClassName="active" to='/'>Dashboard</NavLink></li>
            <li className="li-div" ><NavLink activeClassName="active" to='/register'>Register </NavLink></li>
            <li className="li-div"><NavLink activeClassName="active" to='/login'>Login</NavLink></li>
            </ul>
    </div>
  )
}

export default Sidebar



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