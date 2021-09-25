import React from "react";
import LoginLayout from "../layouts/LoginLayout";
import {
  Card,
  Form,
  Input,
  Button,
  Row,
  Col,
  InputNumber,
  message,
} from "antd";
import { useHistory } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import MovieAPI from "../api/MovieAPI";

function PageContent() {
  const history = useHistory();
  const onFinish = (addData) => {
    console.log(addData);
    MovieAPI.AddMovie(addData)
      .then((res) => {
        message.success("Movie berhasil ditambahkan");
        history.push("/movies-table");
      })
      .catch((error) => message.error(error.message));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Row justify="center" style={{ margin: "20px 0px 0px" }}>
      <Col span={12}>
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
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Duration"
              name="duration"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item
              label="Genre"
              name="genre"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Image Url"
              name="image_url"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Rating"
              name="rating"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <InputNumber min={0} max={10} />
            </Form.Item>
            <Form.Item
              label="Review"
              name="review"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label="Release"
              name="year"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <InputNumber min={1980} max={2021} />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Add Movie
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

function AddMovie() {
  return (
    <UserLayout>
      <LoginLayout>
        <PageContent />
      </LoginLayout>
    </UserLayout>
  );
}

export default AddMovie;
