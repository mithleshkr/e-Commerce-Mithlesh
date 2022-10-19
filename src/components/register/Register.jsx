import React from "react";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import "./Register.css";
import { Form, Input, Select, Upload } from "antd";



const Register = () => {
  return (
    <div className="register-container">
      <div className="register-main-container">
        <Form
          className="form-registe"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
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
          <Form.Item
            name="name"
            label="Select for"
            rules={[
              {
                required: true,
                message: "Please select your choice!",
              },
            ]}
          >
            <Select placeholder="Select Your Choice">
              <Select.Option value="customer">Customer</Select.Option>
              <Select.Option value="company">Company</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="dob"
            label="DOB"
            rules={[
              {
                required: true,
                type: "date",
                message: "Please choose your date of birth!",
              },
            ]}
          >
            <Input placeholder="Select Your DOB" type="date" />
          </Form.Item>
          <Form.Item
            name="number"
            label="Mobile Number"
            rules={[
              {
                required: true,
                type: "number",
                message: "Please input your number!",
              },
            ]}
          >
            <Input placeholder="Enter Your Number" type="number" />
          </Form.Item>
         

          <Form.Item label="Upload Profile Picture" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <div className="Register-button-container">
            <button className="registe-btn">Register</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
