import React from "react";
import Media from "react-media";

export default ({ children, ...props }) => (
  <Media query={{ maxWidth: 855 }}>
    {small => (
      <Media query={{ maxWidth: 400 }}>
        {tiny => children({ small, tiny })}
      </Media>
    )}
  </Media>
);
