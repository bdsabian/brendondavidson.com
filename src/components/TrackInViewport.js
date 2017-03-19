import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (var i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const elementInViewport = (el, options) => {
  if (!el) return false;

  const { containment, offset = 0 } = options;
  const rect = el.getBoundingClientRect();

  const containmentRect = containment
    ? containment.getBoundingClientRect()
    : {
        top: 0,
        left: 0,
        bottom: window.innerHeight || document.documentElement.clientHeight,
        right: window.innerWidth || document.documentElement.clientWidth
      };

  return rect.bottom > containmentRect.top + offset &&
    rect.top < containmentRect.bottom;
};

export default class TrackInViewport extends Component {
  constructor(props) {
    super(props);
    this.state = { elements: [] };
    this.childRefs = [];
    this.checkVisibility = this.checkVisibility.bind(this);
  }

  static propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    containment: PropTypes.element,
    offset: PropTypes.number,
    checkOnMount: PropTypes.bool
  };

  static defaultProps = {
    disabled: false,
    offset: 0,
    checkOnMount: false
  };

  componentDidMount() {
    if (this.props.checkOnMount) this.checkVisibility();
    setTimeout(
      () => {
        window.addEventListener("scroll", this.checkVisibility);
        window.addEventListener("resize", this.checkVisibility);
      },
      1000
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
    window.removeEventListener("resize", this.checkVisibility);
  }

  shouldComponentUpdate(nextProps) {
    return false; //this.props.disabled !== nextProps.disabled;
  }

  checkVisibility() {
    if (!this.childRefs || this.props.disabled) return;

    const elements = this.childRefs.filter(child => {
      const el = ReactDOM.findDOMNode(child);
      return elementInViewport(el, {
        containment: this.props.containment,
        offset: this.props.offset
      });
    });

    if (!arraysEqual(this.state.elements, elements)) {
      this.setState({ elements });
      this.props.onChange(elements);
    }
  }

  render() {
    // eslint-disable-next-line
    const { checkOnMount, children, ...ownProps } = this.props;
    this.childRefs = [];
    return (
      <div>
        {React.Children.map(children, child => React.cloneElement(child, {
          ref: ref => {
            if (ref) this.childRefs.push(ref);
          },
          ...ownProps
        }))}
      </div>
    );
  }
}
