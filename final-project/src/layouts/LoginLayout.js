import React from "react";
import ContentContainer from "../parts/ContentContainer";

function LoginLayout(props) {
  return <ContentContainer>{props.children}</ContentContainer>;
}

export default LoginLayout;
