import React, { useContext } from "react";
import LoginLayout from "../layouts/LoginLayout";
import {
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  InputNumber,
  Checkbox,
  message,
} from "antd";
import { useHistory } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import GameAPI from "../api/GameAPI";
import { GameContext } from "../context";

function PageContent() {
  const history = useHistory();
  const { fetchData } = useContext(GameContext);

  const onFinish = (addData) => {
    console.log(addData);
    GameAPI.AddGame(addData)
      .then((res) => {
        fetchData();
        message.success("Game berhasil ditambahkan");
        history.push("/games-table");
      })
      .catch((error) => message.success(error.message));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Row justify="center" style={{ margin: "20px 0px 0px" }}>
      <Col span={10}>
        <Card style={{ padding: "20px 0px 0px" }}>
          <Form
            name="add-movie-info"
            autoComplete="off"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input game name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Genre"
              name="genre"
              rules={[{ required: true, message: "Please input game genre!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Image Url"
              name="image_url"
              rules={[{ required: true, message: "Please input image url!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Platform"
              name="platform"
              rules={[
                { required: true, message: "Please input game platform!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Release"
              name="release"
              rules={[
                { required: true, message: "Please input release year!" },
              ]}
            >
              <InputNumber min={2000} max={2021} />
            </Form.Item>
            <Form.Item
              label="Single Player"
              name="singlePlayer"
              valuePropName="checked"
              initialValue={false}
              rules={[]}
            >
              <Checkbox />
            </Form.Item>
            <Form.Item
              label="Multi Player"
              name="multiplayer"
              valuePropName="checked"
              initialValue={false}
              rules={[]}
            >
              <Checkbox />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Add Game
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

function AddGame() {
  return (
    <UserLayout>
      <LoginLayout>
        <PageContent />
      </LoginLayout>
    </UserLayout>
  );
}

export default AddGame;
