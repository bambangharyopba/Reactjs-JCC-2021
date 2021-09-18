import React, { useContext, useEffect } from "react";
import { Form, Input, InputNumber, Button, Checkbox, Row, Col } from "antd";
import MobileAppContext from "./MobileAppContext";
import { useHistory } from "react-router-dom";

function MobileForm() {
  const history = useHistory();
  let { editData, createApp, updateApp, clearEdit } =
    useContext(MobileAppContext);
  const [form] = Form.useForm();

  useEffect(() => {
    if (!editData) return;
    form.setFieldsValue(generateFormValues());
  });

  const handleSubmit = (data) => {
    let { platform, ...rest } = data;
    let submitData = {
      ...rest,
      is_android_app: platform.includes("android") ? 1 : 0,
      is_ios_app: platform.includes("ios") ? 1 : 0,
    };
    if (!editData) {
      createApp(submitData);
    } else {
      updateApp(editData.id, submitData);
    }
    clearEdit();
    history.push("/mobile-list");
  };

  const generateFormValues = () => {
    if (!editData) return;

    let data_platform = [];
    if (editData.is_android_app === 1) {
      data_platform.push("android");
    }
    if (editData.is_ios_app === 1) {
      data_platform.push("ios");
    }

    return {
      name: editData.name,
      category: editData.category,
      description: editData.description,
      release_year: editData.release_year,
      size: editData.size,
      price: editData.price,
      rating: editData.rating,
      image_url: editData.image_url,
      platform: data_platform,
    };
  };

  return (
    <div>
      <h1>{editData ? "Edit" : "New"} App Form</h1>
      <Form
        form={form}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please fill app name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please fill app category!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="release_year"
          label="Release year"
          rules={[
            {
              required: true,
              message: "Please fill app price!",
            },
            {
              type: "number",
              min: 0,
              message: "Release year must be equal or bigger than 0",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="size"
          label="Size(MB)"
          rules={[
            {
              required: true,
              message: "Please fill app price!",
            },
            {
              type: "number",
              min: 0,
              message: "Size must be equal or bigger than 0",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please fill app price!",
            },
            {
              type: "number",
              min: 0,
              message: "Price must be equal or bigger than 0",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="rating"
          label="Rating"
          rules={[
            {
              required: true,
              message: "Please fill app price!",
            },
            {
              type: "number",
              min: 0,
              max: 5,
              message: "Rating must be equal or between 0 and 5",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="image_url" label="Image Url">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="platform"
          label="Platform"
          rules={[{ required: true, message: "Please choose app platform!" }]}
        >
          <Checkbox.Group>
            <Row>
              <Col>
                <Checkbox value="android">Android</Checkbox>
              </Col>
              <Col>
                <Checkbox value="ios">iOS</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 2 }}>
          <Button type="primary" htmlType="Submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MobileForm;
