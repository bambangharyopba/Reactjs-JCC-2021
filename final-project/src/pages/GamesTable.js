import React, { useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Card,
  Select,
  Input,
  InputNumber,
  Button,
  Table,
  Image,
} from "antd";
import { GameContext } from "../context/GameContext";
import UserLayout from "../layouts/UserLayout";
import { useHistory } from "react-router-dom";
import GameAPI from "../api/GameAPI";

function PageContent() {
  const history = useHistory();
  let { gameList, fetchData } = useContext(GameContext);
  let [games, setGames] = useState([]);

  useEffect(() => {
    if (gameList) setGames(gameList);
  }, [gameList]);

  const gameAttrb = [
    "number",
    "image_url",
    "name",
    "genre",
    "platform",
    "release",
    "multiplayer",
    "singlePlayer",
    "action",
  ];
  const attrbTitle = [
    "No",
    "Cover",
    "Name",
    "Genre",
    "Platform",
    "Release",
    "Multi Player",
    "Single Player",
    "Action",
  ];

  const handleEdit = (id) => {
    history.push(`/games/edit/${id}`);
  };
  const handleDelete = (id) => {
    GameAPI.DeleteGame(id).then(() => {
      fetchData();
    });
  };

  const getDataSource = () => {
    if (!games) return [];

    let data = games.map((game, index) => {
      return {
        key: game.id,
        number: index + 1,
        action: ["Edit", "Delete"],
        ...game,
      };
    });
    return data;
  };

  const getDataTitle = () => {
    if (!attrbTitle) return [];

    let data = attrbTitle.map((title, index) => {
      if (title === "Cover") {
        return {
          title: title,
          dataIndex: gameAttrb[index],
          key: gameAttrb[index],
          render: (img_url) => (
            <Image style={{ width: "180px" }} alt="cover-img" src={img_url} />
          ),
        };
      }
      if (title === "Action") {
        return {
          title: title,
          dataIndex: gameAttrb[index],
          key: gameAttrb[index],
          render: (action, record) => {
            return (
              <Row>
                <Col>
                  <Button onClick={() => handleEdit(record.id)}>
                    {action[0]}
                  </Button>
                </Col>
                <Col>
                  <Button onClick={() => handleDelete(record.id)}>
                    {action[1]}
                  </Button>
                </Col>
              </Row>
            );
          },
        };
      }
      return {
        title: title,
        dataIndex: gameAttrb[index],
        key: gameAttrb[index],
        onCell: (record) => {
          return {
            onClick: (event) => history.push(`/games/detail/${record.id}`),
          };
        },
      };
    });
    return data;
  };

  const filterSwitch = (sign, data, input) => {
    switch (sign) {
      case "61":
        return data === input;
      case "62":
        return data > input;
      case "60":
        return data < input;
      case "8805":
        return data >= input;
      case "8804":
        return data <= input;
      default:
        return true;
    }
  };

  const handleFilter = (config) => {
    console.log(config);
    let filteredGames = gameList
      .filter((game) => {
        if (!config.release_sign || !config.release) return true;
        return filterSwitch(
          config.release_sign,
          game.release,
          config.release.toString()
        );
      })
      .filter((game) => {
        if (config.singlePlayer === undefined || config.singlePlayer === "?")
          return true;
        return game.singlePlayer === config.singlePlayer;
      })
      .filter((game) => {
        if (config.multiplayer === undefined || config.multiplayer === "?")
          return true;
        return game.multiplayer === config.multiplayer;
      });
    setGames(filteredGames);
  };

  const resetFilter = () => {
    setGames(gameList);
  };

  const handleSearch = (input) => {
    let filteredGames = gameList.filter((game) =>
      game.name.toLowerCase().includes(input.toLowerCase())
    );
    setGames(filteredGames);
  };

  return (
    <Row gutter={[12, 12]} justify="space-between">
      <Col span={24}>
        <Card title="Filter">
          <Form
            name="filter-info"
            autoComplete="off"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 10 }}
            onFinish={handleFilter}
          >
            <Row justify="space-between">
              <Col span={8}>
                <Form.Item label="Release" style={{ marginBottom: 0 }}>
                  <Form.Item
                    name="release_sign"
                    style={{ display: "inline-block" }}
                  >
                    <Select allowClear>
                      <Select.Option value="61">&#61;</Select.Option>
                      <Select.Option value="62">&#62;</Select.Option>
                      <Select.Option value="60">&#60;</Select.Option>
                      <Select.Option value="8805">&#8805;</Select.Option>
                      <Select.Option value="8804">&#8804;</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="release" style={{ display: "inline-block" }}>
                    <InputNumber min={2000} max={2021} />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Single Player" name="singlePlayer">
                  <Select allowClear>
                    <Select.Option value={1}>yes</Select.Option>
                    <Select.Option value={0}>no</Select.Option>
                    <Select.Option value={"?"}>?</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item label="Multiplayer" name="multiplayer">
                  <Select allowClear>
                    <Select.Option value={1}>yes</Select.Option>
                    <Select.Option value={0}>no</Select.Option>
                    <Select.Option value={"?"}>?</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="center" gutter={[2, 2]}>
              <Col>
                <Form.Item style={{ margin: 0 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ padding: "0px 30px" }}
                  >
                    Filter
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item style={{ margin: 0 }}>
                  <Button
                    type="primary"
                    style={{ padding: "0px 30px" }}
                    onClick={() => resetFilter()}
                  >
                    Reset
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
      <Col span={24}>
        <Card title="Search">
          <Input.Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            onSearch={handleSearch}
          />
        </Card>
      </Col>
      <Col span={24}>
        <Table dataSource={getDataSource()} columns={getDataTitle()} />
      </Col>
    </Row>
  );
}

function GamesTable() {
  return (
    <UserLayout>
      <PageContent />
    </UserLayout>
  );
}

export default GamesTable;
