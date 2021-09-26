import React, { useState, useEffect, useContext } from "react";
import LoginLayout from "../layouts/LoginLayout";
import { Card, Form, Input, Button, Row, Col, InputNumber } from "antd";
import { useHistory, useParams } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import MovieAPI from "../api/MovieAPI";
import { MovieContext } from "../context";

function PageContent() {
  const history = useHistory();
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState();
  let { fetchData } = useContext(MovieContext);

  useEffect(() => {
    MovieAPI.GetMovie(id)
      .then((res) => setData(res))
      .then(() => setLoaded(true));
  }, [id]);

  const onFinish = (editData) => {
    MovieAPI.EditMovie(id, editData)
      .then((res) => {
        fetchData();
        history.push("/movies-table");
      })
      .catch((error) => console.log(error));
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    loaded && (
      <Row justify="center" style={{ margin: "20px 0px 0px" }}>
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
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Duration"
                name="duration"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <InputNumber min={0} />
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
                label="Rating"
                name="rating"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <InputNumber min={0} max={10} />
              </Form.Item>
              <Form.Item
                label="Review"
                name="review"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Release"
                name="year"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <InputNumber min={1980} max={2021} />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Edit Movie
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  );
}

function EditMovie() {
  return (
    <UserLayout>
      <LoginLayout>
        <PageContent />
      </LoginLayout>
    </UserLayout>
  );
}

export default EditMovie;
