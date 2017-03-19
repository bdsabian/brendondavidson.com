import React, { Component, PropTypes } from "react";

export default class Hover extends Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };
  }

  static propTypes = {
    children: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  onMouseEnter() {
    if (!this.props.disabled) this.setState({ hover: true });
  }

  onMouseLeave() {
    if (!this.props.disabled) this.setState({ hover: false });
  }

  render() {
    const child = this.props.children(this.state.hover);
    return React.cloneElement(child, {
      ...child.props,
      onMouseEnter: this.onMouseEnter.bind(this),
      onMouseLeave: this.onMouseLeave.bind(this)
    });
  }
}
