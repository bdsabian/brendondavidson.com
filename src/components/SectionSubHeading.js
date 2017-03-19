import React from "react";

export default ({ children, color = "#444", style, ...rest }) => (
  <p
    style={{
      color,
      margin: "0.5rem 0 2.5rem 0",
      textAlign: "center",
      ...style
    }}
  >
    {children}
  </p>
);
