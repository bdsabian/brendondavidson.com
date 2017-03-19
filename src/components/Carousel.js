import React, { Component, PropTypes } from "react";
import Block from "jsxstyle/Block";

import Timer from "./Timer";
import TransitionImage from "./TransitionImage";

import theme from "../lib/theme";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = { current: 1 };

    this.goto = this.goto.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  static defaultProps = {
    autoplay: false,
    backgroundColor: "transparent",
    delay: 5000,
    height: "750px",
    onChange: () => {},
    onNext: () => {},
    onPrev: () => {},
    showControls: false
  };

  static propTypes = {
    autoplay: PropTypes.bool,
    backgroundColor: PropTypes.string,
    delay: PropTypes.number,
    height: PropTypes.string,
    images: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    onChange: PropTypes.func,
    onNext: PropTypes.func,
    onPrev: PropTypes.func,
    showControls: PropTypes.bool
  };

  isControlled() {
    return typeof this.props.current !== "undefined";
  }

  goto(index) {
    if (!this.isControlled() && index !== this.state.current) {
      this.setState({ current: index });
      this.props.onChange(index);
    }
  }

  next() {
    const index = this.state.current === this.props.images.length - 1
      ? 1
      : this.state.current + 1;
    this.goto(index);
    this.props.onNext();
  }

  prev() {
    const index = this.state.current === 0
      ? this.props.images.length - 1
      : this.state.current - 1;
    this.goto(index);
    this.props.onPrev();
  }

  resetTimer() {
    if (!this.isControlled() && this._timer) {
      this._timer.stop();
      this._timer.start();
    }
  }

  handleNextClick(e) {
    e.preventDefault();

    this.next();
    this.resetTimer();
  }

  handlePrevClick(e) {
    e.preventDefault();

    this.prev();
    this.resetTimer();
  }

  render() {
    const {
      autoplay,
      backgroundColor,
      children,
      delay,
      height,
      images,
      showControls
    } = this.props;
    const current = this.isControlled()
      ? this.props.current
      : this.state.current;

    // assumes height of buttons to be 66px
    const top = parseInt(height, 10) / 2 - 33;

    return (
      <Block position="relative" zIndex="1">
        <div>
          {autoplay &&
            <Timer
              ref={timer => this._timer = timer}
              delay={delay}
              callback={this.next}
            />}
          <TransitionImage
            images={images}
            current={current}
            backgroundColor={backgroundColor}
            height={height}
          />
          <Block
            position="absolute"
            zIndex="10"
            top="0"
            left="0"
            width="100%"
            height="100%"
          >
            {showControls &&
              images.length > 1 &&
              <ControlButton
                onClick={this.handlePrevClick.bind(this)}
                top={top}
              >
                Prev
              </ControlButton>}
            {showControls &&
              images.length > 1 &&
              <ControlButton
                right
                onClick={this.handleNextClick.bind(this)}
                top={top}
              >
                Next
              </ControlButton>}
            {images && children && React.Children.map(children, child => child)}
          </Block>
        </div>
      </Block>
    );
  }
}

const ControlButton = ({ children, right = false, top = 0, ...rest }) => (
  <Block
    position="absolute"
    top={top}
    right={right ? 0 : "auto"}
    left={right ? "auto" : 0}
    backgroundColor={theme.carousel.buttonBackgroundColor}
    color={theme.carousel.buttonTextColor}
    borderRadius={right ? "10px 0 0 10px" : "0 10px 10px 0"}
    opacity="0.4"
    hoverOpacity="0.7"
    transition="0.5s opacity ease"
  >
    <Block
      component="a"
      cursor="pointer"
      userSelect="none"
      padding="16px"
      width="100%"
      height="100%"
      textAlign="center"
      props={rest}
    >
      {children}
    </Block>
  </Block>
);
