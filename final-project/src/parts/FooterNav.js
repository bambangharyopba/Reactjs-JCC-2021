import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

function FooterNav() {
  return (
    <Footer
      style={{
        color: "#aeaeae",
        backgroundColor: "#2e2e2e",
        textAlign: "center",
      }}
    >
      &copy; Copyright 2021, Bambang Haryo
    </Footer>
  );
}

export default FooterNav;
