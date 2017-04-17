import React from "react";
import Block from "jsxstyle/Block";

export default ({ children, color = "#444", style, ...rest }) => (
  <Block
    component="p"
    color={color}
    margin="0.5rem 0 2.5rem 0"
    textAlign="center"
    style={style}
    props={rest}
  >
    {children}
  </Block>
);
