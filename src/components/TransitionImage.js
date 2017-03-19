import React, { Component, PropTypes } from "react";

import Block from "jsxstyle/Block";

export default class TransitionImage extends Component {
  static defaultProps = { backgroundColor: "#fff", current: 0 };

  static propTypes = {
    backgroundColor: PropTypes.string,
    current: PropTypes.number,
    images: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
  };

  render() {
    const { backgroundColor, current, height, images } = this.props;
    let currentIndex;

    if (current !== undefined) {
      currentIndex = current < images.length
        ? current
        : current % images.length;
    }

    return (
      <Block
        position="relative"
        backgroundColor={backgroundColor}
        height={height}
        margin="0"
        padding="0"
        opacity={!images.length ? 0 : 1}
        transition="opacity 2s ease"
      >
        {images.map((image, index) => {
          return (
            <Block
              key={image}
              position="absolute"
              zIndex="1"
              left="0"
              top="0"
              height="100%"
              width="100%"
              opacity={index === currentIndex ? 1 : 0}
              transition="opacity 2s ease"
              backgroundImage={`url(${image})`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="cover"
              props={{ "data-image": image }}
            />
          );
        })}
      </Block>
    );
  }
}
