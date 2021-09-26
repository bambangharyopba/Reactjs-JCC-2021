import React, { useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  InputNumber,
  Select,
  Button,
  Table,
  Image,
  Card,
  Input,
} from "antd";
import { MovieContext } from "../context/MovieContext";
import UserLayout from "../layouts/UserLayout";
import { useHistory } from "react-router-dom";
import MovieAPI from "../api/MovieAPI";

function PageContent() {
  const history = useHistory();
  let { movieList, fetchData } = useContext(MovieContext);
  let [movies, setMovies] = useState([]);
  let [filterStatus, setFilterStatus] = useState(false);
  let [filterConfig, setFilterConfig] = useState({});
  let [searchStatus, setSearchStatus] = useState(false);
  let [searchInput, setSearchInput] = useState();

  const movieAttrb = [
    "number",
    "image_url",
    "title",
    "description",
    "year",
    "duration",
    "genre",
    "rating",
    "review",
    "action",
  ];
  const attrbTitle = [
    "No",
    "Cover",
    "Title",
    "Description",
    "Year",
    "Duration",
    "Genre",
    "Rating",
    "Review",
    "Action",
  ];
  const sorter = {
    No: (a, b) => a.number - b.number,
    Cover: false,
    Title: (a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0),
    Description: false,
    Year: (a, b) => a.year - b.year,
    Duration: (a, b) => a.duration - b.duration,
    Genre: false,
    Rating: (a, b) => a.rating - b.rating,
    Review: false,
    Action: false,
  };

  const handleEdit = (id) => {
    history.push(`/movies/edit/${id}`);
  };
  const handleDelete = (id) => {
    MovieAPI.DeleteMovie(id).then(() => {
      fetchData();
    });
  };

  const getDataSource = () => {
    if (!movies) return [];

    let data = movies.map((movie, index) => {
      return {
        key: movie.id,
        number: index + 1,
        action: ["Edit", "Delete"],
        ...movie,
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
          dataIndex: movieAttrb[index],
          key: movieAttrb[index],
          sorter: sorter[title],
          render: (img_url) => ({
            props: {
              style: { backgroundColor: "#2e2e2e" },
            },

            children: (
              <Image alt="cover-img" src={img_url} style={{ width: 180 }} />
            ),
          }),
        };
      }
      if (title === "Action") {
        return {
          title: title,
          dataIndex: movieAttrb[index],
          key: movieAttrb[index],
          sorter: sorter[title],
          render: (action, record) => {
            return {
              props: {
                style: { backgroundColor: "#2e2e2e" },
              },
              children: (
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
              ),
            };
          },
        };
      }
      return {
        title: title,
        dataIndex: movieAttrb[index],
        key: movieAttrb[index],
        sorter: sorter[title],
        render: (atr) => {
          return {
            props: {
              style: { backgroundColor: "#2e2e2e" },
            },
            children: <p style={{ color: "#aeaeae" }}>{atr}</p>,
          };
        },
        onCell: (record) => {
          return {
            onClick: (event) => history.push(`/movies/detail/${record.id}`),
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
    setFilterStatus(true);
    setFilterConfig(config);
  };

  const resetFilter = () => {
    setFilterStatus(false);
  };

  const handleSearch = (input) => {
    setSearchStatus(true);
    setSearchInput(input);
  };

  useEffect(() => {
    const filter = (config, _movies) => {
      let filteredMovies = _movies
        .filter((movie) => {
          if (!config.year_sign || !config.year) return true;
          return filterSwitch(config.year_sign, movie.year, config.year);
        })
        .filter((movie) => {
          if (!config.duration_sign || !config.duration) return true;
          return filterSwitch(
            config.duration_sign,
            movie.duration,
            config.duration
          );
        })
        .filter((movie) => {
          if (!config.rating_sign || !config.rating) return true;
          return filterSwitch(config.rating_sign, movie.rating, config.rating);
        });
      return filteredMovies;
    };

    const search = (input, _movies) => {
      let filteredMovies = [];
      filteredMovies = _movies.filter((movie) =>
        movie.title.toLowerCase().includes(input.toLowerCase())
      );
      return filteredMovies;
    };

    if (movieList) {
      let newMoviesList = movieList;
      if (filterStatus) {
        newMoviesList = filter(filterConfig, newMoviesList);
      }
      if (searchStatus) {
        newMoviesList = search(searchInput, newMoviesList);
      }
      setMovies(newMoviesList);
    }
  }, [movieList, filterConfig, filterStatus, searchInput, searchStatus]);

  return (
    <Row gutter={[12, 12]} justify="space-between">
      <Col span={24}>
        <Card title="Filter">
          <Form
            name="filter-info"
            autoComplete="off"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            onFinish={handleFilter}
          >
            <Row justify="space-between">
              <Col span={8}>
                <Form.Item label="Year" style={{ marginBottom: 0 }}>
                  <Form.Item
                    name="year_sign"
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
                  <Form.Item name="year" style={{ display: "inline-block" }}>
                    <InputNumber min={1980} max={2021} />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Duration" style={{ marginBottom: 0 }}>
                  <Form.Item
                    name="duration_sign"
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
                  <Form.Item
                    name="duration"
                    style={{ display: "inline-block" }}
                  >
                    <InputNumber min={0} />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Rating" style={{ marginBottom: 0 }}>
                  <Form.Item
                    name="rating_sign"
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
                  <Form.Item name="rating" style={{ display: "inline-block" }}>
                    <InputNumber min={0} max={10} />
                  </Form.Item>
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
        <Table
          dataSource={getDataSource()}
          columns={getDataTitle()}
          style={{ backgroundColor: "#2e2e2e" }}
        />
      </Col>
    </Row>
  );
}

function MoviesTable() {
  return (
    <UserLayout>
      <PageContent />
    </UserLayout>
  );
}

export default MoviesTable;
