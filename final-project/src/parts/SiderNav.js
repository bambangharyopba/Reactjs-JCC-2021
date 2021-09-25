import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  EyeOutlined,
  PlayCircleOutlined,
  LeftOutlined,
  RightOutlined,
  AppstoreOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { UserContext } from "../context/UserContext";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

function SiderNav() {
  let { setLoginStatus, sideCollapse, setSideCollapse } =
    useContext(UserContext);

  const handleCollapse = () => {
    setSideCollapse((collapsed) => !collapsed);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setLoginStatus(false);
  };

  return (
    <Sider
      width={200}
      className="site-layout-background"
      collapsible
      collapsed={sideCollapse}
      trigger={null}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
          backgroundColor: "#2e2e2e",
          color: "#aeaeae",
        }}
        selectable="false"
      >
        <Menu.Item
          key="collapse"
          icon={sideCollapse ? <RightOutlined /> : <LeftOutlined />}
          onClick={handleCollapse}
          style={{ color: "#aeaeae" }}
        >
          Hide
        </Menu.Item>
        <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
          <Link to="/dashboard" style={{ color: "#aeaeae" }}>
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="guest-view" icon={<EyeOutlined />}>
          <Link to="/guest-view/home" style={{ color: "#aeaeae" }}>
            Guest View
          </Link>
        </Menu.Item>
        <SubMenu key="sub-movies" icon={<PlayCircleOutlined />} title="Movies">
          <Menu.Item key="1" style={{ backgroundColor: "#2e2e2e", margin: 0 }}>
            <Link to="/movies-table" style={{ color: "#aeaeae" }}>
              All Movies
            </Link>
          </Menu.Item>
          <Menu.Item key="2" style={{ backgroundColor: "#2e2e2e", margin: 0 }}>
            <Link to="/movies/add" style={{ color: "#aeaeae" }}>
              Add Movie
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub-games" icon={<RocketOutlined />} title="Games">
          <Menu.Item key="3" style={{ backgroundColor: "#2e2e2e", margin: 0 }}>
            <Link to="/games-table" style={{ color: "#aeaeae" }}>
              All Games
            </Link>
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{ backgroundColor: "#2e2e2e", margin: 0, color: "#aeaeae" }}
          >
            <Link to="/games/add" style={{ color: "#aeaeae" }}>
              Add Game
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub-setting" icon={<UserOutlined />} title="User">
          <Menu.Item
            key="5"
            style={{ backgroundColor: "#2e2e2e", margin: 0, color: "#aeaeae" }}
          >
            <Link to="/change-password" style={{ color: "#aeaeae" }}>
              Change Password
            </Link>
          </Menu.Item>
          <Menu.Item
            key="6"
            style={{ backgroundColor: "#2e2e2e", margin: 0, color: "#aeaeae" }}
          >
            <Link to="/" onClick={handleLogout} style={{ color: "#aeaeae" }}>
              Logout
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SiderNav;
