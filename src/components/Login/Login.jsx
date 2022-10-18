import React from "react";
import "antd/dist/antd.css";
import "./Login.css";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const registerScreen = () => {
    navigate("/register");
  };
  return (
    <div className="Login-main-container">
      <div className="form-container">
        <h3 className="login-title">Login</h3>
        <Form
          className="form-inputs-container"
          name="login form"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <label>Email*</label>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Enter Your Email" />
          </Form.Item>
          <label>Password*</label>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>

          {/*  <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

          {/* <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button   htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
          <div>
            <button className="login-button-container">Submit</button>
          </div>
        </Form>
      </div>

      <div className="content-container">
        <h3 className="login-title">Register</h3>
        <div>
          <p className="register-details-container">
            IF YOU STILL DON'T HAVE A <b>MITHLESH.COM</b> ACCOUNT, USE THIS
            OPTION TO ACCESS THE REGISTRATION FORM. BY GIVING US YOUR DETAILS,
            PURCHASING IN <b>MITHLESH.COM</b> WILL BE FASTER AND AN ENJOYABLE
            EXPERIENCE
          </p>
          <div>
            <button
              className="register-button-container"
              onClick={registerScreen}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
