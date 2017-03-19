import React, { PropTypes } from "react";
const Icon = ({ className = "", name, ...rest }) => (
  <i className={[className, `fa fa-${name}`].join(" ")} {...rest} />
);

Icon.displayName = "Icon";

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
