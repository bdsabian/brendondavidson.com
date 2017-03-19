import React, { Component, PropTypes } from "react";

import InlineBlock from "jsxstyle/InlineBlock";

export default class Button extends Component {
  static propTypes = {
    borderColor: PropTypes.string,
    color: PropTypes.string,
    nobg: PropTypes.bool,
    noborder: PropTypes.bool,
    textColor: PropTypes.string
  };

  static defaultProps = {
    borderColor: "#fff",
    color: "rgba(0, 0, 0, 0.36)",
    nobg: false,
    noborder: false,
    textColor: "#fff"
  };

  render() {
    const {
      borderColor,
      children,
      color,
      component = "button",
      nobg,
      noborder,
      textColor,
      ...rest
    } = this.props;

    return (
      <InlineBlock
        component={component}
        margin="0"
        fontWeight="400"
        textDecoration="none"
        textAlign="center"
        whiteSpace="nowrap"
        verticalAlign="middle"
        touchAction="manipulation"
        userSelect="none"
        backgroundImage="none"
        backgroundColor={nobg ? "transparent" : color}
        color={textColor}
        borderWidth="0.12rem"
        borderStyle="solid"
        borderRadius="0.333rem"
        borderColor={noborder ? "transparent" : borderColor}
        padding="0.5rem 1rem"
        props={rest}
      >
        {children}
      </InlineBlock>
    );
  }
}
