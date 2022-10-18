import React from "react";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import "./Register.css";
import { Form, Input, Button, Select, DatePicker, Upload } from "antd";

const { TextArea } = Input;

const Register = () => {
  return (
    <div className="register-main-container">
      <Form
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
    <Select
    placeholder="Select Your Choice">
     <Select.Option value="customer">Customer</Select.Option>
     <Select.Option value="company">Company</Select.Option>
   </Select>
      
    </Form.Item>
        <Form.Item label="Select for" >
          <Select
           placeholder="Select Your Choice">
            <Select.Option value="customer">Customer</Select.Option>
            <Select.Option value="company">Company</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item 
        
        label="Date Of Birth">
          <Input placeholder="Select DOB" type="date" />
        </Form.Item>
        <Form.Item label="Mobile Number">
          <Input type="number" placeholder="Enter Mobile Number" />
        </Form.Item>
        <Form.Item label="About Yourself">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload Profile Picture" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <div 
        className="Register-button-container"
        >
        <button 
        className="registe-btn"
        >Register</button>
        </div>
        
      </Form>
    </div>
  );
};

export default Register;
