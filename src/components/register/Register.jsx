import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { message } from "antd";
import 'antd/dist/antd.css';
import './Register.css'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate= useNavigate()
  const [name, setName]= useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister =()=>{

    sessionStorage.setItem("Name",name);
    if( mobile.length<10 ||mobile.length>10 && password.length<6  ){
      message.error("Mobile Number must be of 10 digit or password should be more than 6 character")
      
    }
    else{
      message.success("Great! successfully registerd")
      setTimeout(()=>{
        navigate('/product')
      },2000)
      
    }
  }

  return (
    <div style={{padding:"30px"}}>
      <div className="register-container" >
        <div className="register-form-container">
          <h3>REGISTER</h3>
          <TextField
            type="text"
            label="Name"
            placeholder="Enter Your Name"
            variant="standard"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <TextField
            type="email"
            label="Email"
            placeholder="Enter Your Email"
            variant="standard"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          <br />
          <TextField
            type="number"
            label="Mobile"
            placeholder="Enter Your Mobile Number"
            variant="standard"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
          />
          <br />
          <TextField
            type="password"
            label="Password"
            placeholder="Enter Your Password"
            variant="standard"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br/>
          <Button
          className="rgstr-btn"
          variant="outlined"
          size="small"
          onClick={handleRegister}
          disabled={!email + !name + !mobile + !password}
          >Register</Button>
        </div>
        <div className="space-middle">
          {/*space*/}
        </div>
        <div className="register-right-side">
         {/*register content if needed*/}
         <img 
         className="img-rn"
         height="395px"
         // src="https://images.shiksha.com/mediadata/images/articles/1587617454phpMr6VR1.jpeg"
         src="https://media.istockphoto.com/photos/hand-holding-green-sheet-with-register-now-through-hole-in-ripped-picture-id1295582365?k=20&m=1295582365&s=612x612&w=0&h=kOSjuNAtx_pOqBri4LbsIQgiGw4ERqMBtSqGs6pzVng="
         alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;

// import React from "react";
// import "antd/dist/antd.css";
// import { PlusOutlined } from "@ant-design/icons";
// import "./Register.css";
// import { Form, Input, Select, Upload } from "antd";

// const Register = () => {
//   return (
//     <div className="register-container">
//       <div className="register-main-container">
//         <Form
//           className="form-registe"
//           labelCol={{ span: 4 }}
//           wrapperCol={{ span: 14 }}
//           layout="horizontal"
//         >
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your name!",
//               },
//             ]}
//           >
//             <Input placeholder="Enter Your Name" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               {
//                 required: true,
//                 type: "email",
//                 message: "Please input your email!",
//               },
//             ]}
//           >
//             <Input placeholder="Enter Your Email" />
//           </Form.Item>
//           <Form.Item
//             name="name"
//             label="Select for"
//             rules={[
//               {
//                 required: true,
//                 message: "Please select your choice!",
//               },
//             ]}
//           >
//             <Select placeholder="Select Your Choice">
//               <Select.Option value="customer">Customer</Select.Option>
//               <Select.Option value="company">Company</Select.Option>
//             </Select>
//           </Form.Item>
//           <Form.Item
//             name="dob"
//             label="DOB"
//             rules={[
//               {
//                 required: true,
//                 type: "date",
//                 message: "Please choose your date of birth!",
//               },
//             ]}
//           >
//             <Input placeholder="Select Your DOB" type="date" />
//           </Form.Item>
//           <Form.Item
//             name="number"
//             label="Mobile Number"
//             rules={[
//               {
//                 required: true,
//                 type: "number",
//                 message: "Please input your number!",
//               },
//             ]}
//           >
//             <Input placeholder="Enter Your Number" type="number" />
//           </Form.Item>

//           <Form.Item label="Upload Profile Picture" valuePropName="fileList">
//             <Upload action="/upload.do" listType="picture-card">
//               <div>
//                 <PlusOutlined />
//                 <div>Upload</div>
//               </div>
//             </Upload>
//           </Form.Item>
//           <div className="Register-button-container">
//             <button className="registe-btn">Register</button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Register;
