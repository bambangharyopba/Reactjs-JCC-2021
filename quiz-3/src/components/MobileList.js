import React, { useContext } from "react";
import MobileAppContext from "./MobileAppContext";
import { Table, Button, Tag } from "antd";
import { Link } from "react-router-dom";

export default function MobileList() {
  const { app, deleteApp, editApp, clearEdit } = useContext(MobileAppContext);
  const dataIndex = [
    "number",
    "name",
    "category",
    "description",
    "release_year",
    "size",
    "price",
    "rating",
    "platform",
    "action",
  ];
  const dataHeader = [
    "No",
    "Name",
    "Category",
    "Description",
    "Released Year",
    "Size",
    "Price",
    "Rating",
    "Platform",
    "Action",
  ];

  const getData = () => {
    if (!app) return;
    return app.map((data, i) => {
      let data_platform = [];
      if (data.is_android_app === 1) {
        data_platform.push("Android");
      }
      if (data.is_ios_app === 1) {
        data_platform.push("iOS");
      }
      return {
        key: i,
        number: i + 1,
        name: data.name,
        category: data.category,
        description: data.description,
        size: data.size >= 1000 ? `${data.size / 1000} GB` : `${data.size} MB`,
        price: data.price === 0 ? "Free" : data.price,
        rating: data.rating,
        release_year: data.release_year,
        platform: data_platform,
        action: (
          <>
            <Link
              to={`/mobile-form/edit/${data.id}`}
              onClick={() => handleUpdate(data.id)}
            >
              <Button type="primary">edit</Button>
            </Link>
            <Button type="danger" onClick={() => handleDelete(data.id)}>
              delete
            </Button>
          </>
        ),
      };
    });
  };

  const getHeader = () => {
    if (!app) return;
    let header = dataHeader.map((title, i) => {
      return title !== "Platform"
        ? {
            title: title,
            dataIndex: dataIndex[i],
            key: dataIndex[i],
          }
        : {
            title: title,
            dataIndex: dataIndex[i],
            key: dataIndex[i],
            render: (tags) => (
              <>
                {tags.map((tag) => {
                  return (
                    <Tag color={"geekblue"} key={tag}>
                      {tag}
                    </Tag>
                  );
                })}
              </>
            ),
          };
    });
    return header;
  };

  const handleUpdate = (id) => {
    clearEdit();
    editApp(id);
  };

  const handleDelete = (id) => {
    deleteApp(id);
  };

  return (
    <div>
      <Link to="/mobile-form" onClick={() => clearEdit()}>
        <Button className="btn-tambah-mhs">Tambah App</Button>
      </Link>
      <Table columns={getHeader()} dataSource={getData()} />
    </div>
  );
}
