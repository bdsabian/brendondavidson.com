import React, { Component, PropTypes } from "react";
import { Route } from "react-router-dom";

export default class ScrollRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool
  };

  static defaultProps = {
    exact: false
  };

  static contextTypes = {
    scrollToRoute: PropTypes.func
  };

  componentDidMount() {
    if (this.match) {
      this.context.scrollToRoute(this.match.path, false);
    }
  }

  render() {
    const { component: Component, exact, path } = this.props;

    return (
      <Route
        exact={exact}
        path={path}
        children={matchParams => {
          this.match = matchParams.match;
          return (
            <div data-path={path}>
              <Component ref={c => this.component = c} {...matchParams} />
            </div>
          );
        }}
      />
    );
  }
}
