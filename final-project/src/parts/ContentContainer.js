import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

function ContentContainer(props) {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        backgroundColor: "#1e1e1e",
      }}
    >
      {props.children}
    </Content>
  );
}

export default ContentContainer;
