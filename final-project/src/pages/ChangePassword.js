import React from "react";
import LoginLayout from "../layouts/LoginLayout";
import UserLayout from "../layouts/UserLayout";
import { Card, Form, Input, Button, Row, Col, message } from "antd";
import { useHistory } from "react-router-dom";
import UserAPI from "../api/UserAPI";

function PageContent() {
  const history = useHistory();

  const onFinish = (changeData) => {
    console.log(changeData);
    UserAPI.ChangePasswordUser(changeData)
      .then(() => {
        message.success("Password berhasil diganti");
        history.push("/dashboard");
      })
      .catch((error) => message.error(error.message));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Row justify="center" style={{ margin: "20px 0px 0px" }}>
      <Col span={12}>
        <Card style={{ padding: "20px 0px 0px" }}>
          <Form
            name="change-password-info"
            autoComplete="off"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Password"
              name="current_password"
              rules={[
                {
                  required: true,
                  message: "Please input your current password",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="new_password"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm New Password"
              name="new_confirm_password"
              dependencies={["new_password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value && getFieldValue("new_password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

function ChangePassword() {
  return (
    <UserLayout>
      <LoginLayout>
        <PageContent />
      </LoginLayout>
    </UserLayout>
  );
}

export default ChangePassword;
