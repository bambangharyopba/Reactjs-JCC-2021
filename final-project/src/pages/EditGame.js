import React, { useState, useEffect } from "react";
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
} from "antd";
import { useHistory, useParams } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import GameAPI from "../api/GameAPI";

function PageContent() {
  const history = useHistory();
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    GameAPI.GetGame(id)
      .then((res) => setData(res))
      .then(() => setLoaded(true));
  }, [id]);

  const onFinish = (editData) => {
    console.log(editData);
    GameAPI.EditGame(id, editData)
      .then((res) => {
        history.push("/games-table");
      })
      .catch((error) => console.log(error));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    loaded && (
      <Row>
        <Col span={10}>
          <Card style={{ padding: "20px 0px 0px" }}>
            <Form
              initialValues={data}
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
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Genre"
                name="genre"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Image Url"
                name="image_url"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Platform"
                name="platform"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Release"
                name="release"
                rules={[
                  { required: true, message: "Please input your email!" },
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
                  Edit Game
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  );
}

function EditGame() {
  return (
    <UserLayout>
      <LoginLayout>
        <PageContent />
      </LoginLayout>
    </UserLayout>
  );
}

export default EditGame;
