import React from "react";
import Block from "jsxstyle/Block";

export default ({ children, ...rest }) => (
  <Block
    maxWidth="66rem"
    marginLeft="auto"
    marginRight="auto"
    paddingLeft="1.75rem"
    paddingRight="1.75rem"
    {...rest}
  >
    {children}
  </Block>
);
