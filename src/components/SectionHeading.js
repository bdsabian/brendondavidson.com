import React from "react";
import Block from "jsxstyle/Block";

export default ({ children, style, ...rest }) => (
  <Block
    component="h2"
    fontWeight="400"
    textAlign="center"
    textTransform="uppercase"
    style={style}
    props={rest}
  >
    {children}
  </Block>
);
