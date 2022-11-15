import React, { useState } from "react";
//import { Button, TextField } from "@mui/material";
import { message } from "antd";
import "antd/dist/antd.css";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    sessionStorage.setItem("Name", name);
    if (!name + !email + !mobile + !password) {
      message.error("Fill all the details properly");
    } else {
      message.success("Great! successfully registerd");
      setTimeout(() => {
        navigate("/product");
      }, 2000);
    }
  };
  const onFinish = () => {
    console.log("Success:");
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };
  return (
    <div style={{ padding: "30px",marginTop:"45px" }}>
      <div className="register-container">
        <div className="register-form-container">
          <h3>REGISTER</h3>
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
              label="Name"
              name="Name"
              rules={[{ required: true, message: "Please input your name" }]}
            >
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item
            
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email" }]}
            >
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Mobile"
              name="Mobile"
              rules={[{ required: true, message: "Please input your mobile",length:10 }]}
            >
              <Input
                type="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
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
            <br />
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={handleRegister}
                className="rgstr-btn"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          
          </div>
        <div className="space-middle">{/*space*/}</div>
        <div className="register-right-side">
          {/*register content if needed*/}
          <img
            className="img-rn"
            height="395px"
            // src="https://images.shiksha.com/mediadata/images/articles/1587617454phpMr6VR1.jpeg"
            //src="https://media.istockphoto.com/photos/hand-holding-green-sheet-with-register-now-through-hole-in-ripped-picture-id1295582365?k=20&m=1295582365&s=612x612&w=0&h=kOSjuNAtx_pOqBri4LbsIQgiGw4ERqMBtSqGs6pzVng="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

