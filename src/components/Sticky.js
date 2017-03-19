import React from "react";
import ReactDOM from "react-dom";

export default class Sticky extends React.Component {
  static propTypes = {
    enter: React.PropTypes.string,
    exit: React.PropTypes.string,
    children: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isStuck: false
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.setState({ initialHeight: el.getBoundingClientRect().top });

    document.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const bottom = document.documentElement.scrollHeight ||
      document.body.scrollHeight;
    const { enter, exit } = this.props;
    const { initialHeight } = this.state;

    if (top >= (enter || initialHeight) && top <= (exit || bottom)) {
      if (!this.state.isStuck) this.setState({ isStuck: true });
    } else {
      if (this.state.isStuck) this.setState({ isStuck: false });
    }
  }

  render() {
    return this.props.children(this.state.isStuck);
  }
}
