import React from "react";
import { Layout } from "antd";
import ContentContainer from "../parts/ContentContainer";
import SiderNav from "../parts/SiderNav";

function UserLayout(props) {
  return (
    <Layout>
      <Layout>
        <SiderNav />
        <Layout>
          <ContentContainer>{props.children}</ContentContainer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default UserLayout;
