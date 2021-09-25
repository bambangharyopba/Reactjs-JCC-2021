import React from "react";
import LoginLayout from "../layouts/LoginLayout";
import { Card, Form, Input, Button, Row, Col, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import UserAPI from "../api/UserAPI";

function PageContent() {
  const history = useHistory();
  const onFinish = (registerData) => {
    UserAPI.RegisterUser(registerData)
      .then((res) => {
        message.success("Akun berhasil ditambahkan");
        history.push("/");
      })
      .catch((error) => message.error(error.message));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Row justify="center" style={{ margin: "100px 0px 0px" }}>
      <Col span={10}>
        <Card style={{ padding: "20px 0px 0px" }}>
          <Form
            name="register-info"
            autoComplete="off"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Link to="/login">Login</Link>
        </Card>
      </Col>
    </Row>
  );
}

function Register() {
  return (
    <LoginLayout>
      <PageContent />
    </LoginLayout>
  );
}

export default Register;
