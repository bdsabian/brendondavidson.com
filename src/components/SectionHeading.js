import React from "react";

export default ({ children, style, ...rest }) => (
  <h2
    style={{
      fontWeight: "400",
      textAlign: "center",
      textTransform: "uppercase",
      ...style
    }}
    {...rest}
  >
    {children}
  </h2>
);
