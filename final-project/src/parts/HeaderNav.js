import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Layout, Row, Col, Menu, Typography } from "antd";
import logo from "../logo.svg";
import { UserContext } from "../context";

const { Header } = Layout;

function HeaderNav() {
  let { loginStatus } = useContext(UserContext);

  return (
    <Header className="header" style={{ backgroundColor: "#2e2e2e" }}>
      <Row justify="space-between">
        <Col>
          <Menu
            style={{ display: "inline-block" }}
            mode="horizontal"
            style={{ border: 0, backgroundColor: "#2e2e2e" }}
          >
            <Menu.Item key="nav-home">
              <NavLink
                to={loginStatus ? "/guest-view/home" : "/"}
                style={{ color: "#aeaeae" }}
              >
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item key="nav-movies">
              <NavLink
                to={loginStatus ? "/guest-view/movies" : "/movies"}
                style={{ color: "#aeaeae" }}
              >
                Movies
              </NavLink>
            </Menu.Item>
            <Menu.Item key="nav-games">
              <NavLink
                to={loginStatus ? "/guest-view/games" : "/games"}
                style={{ color: "#aeaeae" }}
              >
                Games
              </NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col>
          {!loginStatus && (
            <Link to="/login">
              <Typography style={{ color: "#aeaeae", padding: "0px 6px" }}>
                Login
              </Typography>
            </Link>
          )}
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderNav;
