import React, { PropTypes } from "react";

const Icon = (
  {
    backgroundColor = "transparent",
    className = "",
    color = "white",
    name,
    rounded,
    size = "1em",
    style,
    ...rest
  }
) => {
  const defaultStyle = {
    height: size,
    width: size,
    borderRadius: rounded && size,
    lineHeight: size,
    textAlign: "center",
    backgroundColor,
    color
  };

  return (
    <i
      className={[className, `fa fa-${name}`].join(" ")}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
};

Icon.displayName = "Icon";

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
