import { Component, PropTypes } from "react";
import smoothScroll from "smoothscroll";

export default class ScrollRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrollingToRoute: false
    };
  }

  static propTypes = {
    children: PropTypes.func.isRequired
  };

  static childContextTypes = {
    isScrollingToRoute: PropTypes.bool,
    scrollToRoute: PropTypes.func
  };

  static contextTypes = {
    router: PropTypes.object
  };

  getChildContext() {
    return {
      isScrollingToRoute: this.state.isScrollingToRoute,
      scrollToRoute: this.scrollToRoute.bind(this)
    };
  }

  scrollToRoute(path, updatePath = true) {
    if (this.state.isScrollingToRoute) return;

    this.setState({ isScrollingToRoute: true }, () => {
      const el = document.querySelector(`[data-path="${path}"]`);
      if (el) {
        smoothScroll(el, 250, () => {
          this.setState({ isScrollingToRoute: false });
          if (updatePath) this.context.router.push(path);
        });
      }
    });
  }

  render() {
    return this.props.children(this.state.isScrollingToRoute);
  }
}
