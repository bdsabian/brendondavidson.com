import React, { Component, PropTypes } from "react";

export default class ScrollLink extends Component {
  static contextTypes = {
    scrollToRoute: PropTypes.func
  };

  onClick(to) {
    return e => {
      e.preventDefault();
      this.context.scrollToRoute(to);
    };
  }

  render() {
    const { children, to, ...rest } = this.props;

    return <a href={to} onClick={this.onClick(to)} {...rest}>{children}</a>;
  }
}
