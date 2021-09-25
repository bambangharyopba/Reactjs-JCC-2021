import React from "react";
import { Layout } from "antd";
import HeaderNav from "../parts/HeaderNav";
import FooterNav from "../parts/FooterNav";
import ContentContainer from "../parts/ContentContainer";

function GuestLayout(props) {
  return (
    <Layout>
      <HeaderNav />
      <Layout>
        <ContentContainer>{props.children}</ContentContainer>
      </Layout>
      <FooterNav />
    </Layout>
  );
}

export default GuestLayout;
