import React, { useContext } from "react";
import LoginLayout from "../layouts/LoginLayout";
import { Card, Form, Input, Button, Row, Col, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import UserAPI from "../api/UserAPI";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";

function PageContent() {
  const { setLoginStatus } = useContext(UserContext);
  const history = useHistory();

  const onFinish = (loginData) => {
    console.log(loginData);
    UserAPI.LoginUser(loginData)
      .then((res) => {
        Cookies.set("token", res.token);
      })
      .then(() => {
        setLoginStatus(true);
      })
      .then(() => {
        history.push("/dashboard");
      })
      .catch((error) => message.error(error.message));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Row justify="center" style={{ margin: "100px 0px 0px" }}>
      <Col span={10}>
        <Card style={{ padding: "20px 0px 0px" }}>
          <Form
            name="login-info"
            autoComplete="off"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
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
          <Link to="/register">Register</Link>
        </Card>
      </Col>
    </Row>
  );
}

function Login() {
  return (
    <LoginLayout>
      <PageContent />
    </LoginLayout>
  );
}

export default Login;
