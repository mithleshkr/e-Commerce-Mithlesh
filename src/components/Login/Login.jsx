import React, { useState } from "react";

//material ui core
//import { Button, TextField } from "@mui/material";

//navigation
import { useNavigate } from "react-router-dom";

//ant design
import { message } from "antd";
import "antd/dist/antd.css";

//css for current component
import "./Login.css";
import "antd/dist/antd.css";

import { Button, Form, Input } from "antd";

const Login = () => {
  const onFinish = () => {
    console.log("Success:");
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };

  //for navigation
  const navigate = useNavigate();

  //state for email
  const [email, setEmail] = useState("");

  //state for password
  const [password, setPassword] = useState("");

  //*function for validation of email and password and navigation for success
  const handleLogin = () => {
    if (email === "mithlesh@gmail.com" && password === "123456") {
      message.success("Login Successfull");
      setTimeout(() => {
        navigate("/product");
      }, 2000);
    } else {
      message.error("Login Failed");
    }
  };
  return (
    <div style={{ padding: "30px" }}>
      <div className="login-container">
        <div className="login-form-container">
          <h3>LOGIN</h3>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username" },
              ]}
            >
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={handleLogin}
                htmlType="submit"
                className="login-btn"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="blank-login-space">{/*  blank space */}</div>
        <div className="login-register">
          <div>
            <h3>REGISTER</h3>
            
            
            <p style={{ padding: "5px" }}>
              IF YOU STILL DON'T HAVE A <b>MITHLESH.COM</b> ACCOUNT, USE THIS
              OPTION TO ACCESS THE REGISTRATION FORM. BY GIVING US YOUR DETAILS,
              PURCHASING IN <b>MITHLESH.COM</b> WILL BE FASTER AND AN ENJOYABLE
              EXPERIENCE
            </p>
            <br />

            <Button
              fullWidth
              className="register-btn"
              variant="outlined"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
