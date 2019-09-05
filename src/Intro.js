import React, { Component } from "react";
import { Motion, spring } from "react-motion";

import Block from "jsxstyle/Block";
import Inline from "jsxstyle/Inline";
import InlineBlock from "jsxstyle/InlineBlock";
import Col from "jsxstyle/Col";

import Button from "./components/Button";
import Carousel from "./components/Carousel";
import Container from "./components/Container";

import deviceSize from "./lib/deviceSize";
import theme from "./lib/theme";

const images = [
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246852/sayu-muertos_t7gbsj.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246853/sayu-sunset_xdxkhi.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/yelapa-beach_emqau0.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/agaves_bqhxe1.jpg"
];

export class Intro extends Component {
  render() {
    const { id, tiny } = this.props;

    const height = "42rem";
    const learnMoreButton = (
      <Button component="a" href="#about">Learn About Me</Button>
    );
    const springConfig = { stiffness: 120, damping: 20 };
    return (
      <Block
        id={{ id }}
        position="relative"
        backgroundColor="#0D5D94"
        margin="0"
        padding="0"
      >
        <Motion
          defaultStyle={{ x: -20, y: -50 }}
          style={{
            x: spring(0, springConfig),
            y: spring(0, springConfig)
          }}
        >
          {({ x, y }) => (
            <Col
              alignItems="flex-start"
              justifyContent="center"
              position="absolute"
              zIndex="3"
              width="100%"
              height={height}
              transform={`translateX(${x}px), translateY(${y}px)`}
            >
              <Col
                component={Container}
                alignItems="flex-start"
                width="100%"
                paddingLeft={tiny ? 0 : null}
                paddingRight={tiny ? 0 : null}
                opacity={1}
                transition="opacity 0.4s ease"
              >
                <Block
                  width={tiny ? "100%" : "auto"}
                  backgroundColor={theme.intro.helloText.backgroundColor}
                  color={theme.intro.helloText.color}
                  padding="0.2rem 0.4rem"
                  fontSize="2.2rem"
                  fontWeight="500"
                >
                  Hi, I'm Brendon Davidson
                </Block>
                <InlineBlock
                  width={tiny ? "100%" : "auto"}
                  backgroundColor={theme.intro.subHeading.backgroundColor}
                  color={theme.intro.subHeading.color}
                  padding="0.2rem 0.4rem"
                  fontSize="1.3rem"
                  fontWeight="500"
                >
                  Polyglot developer
                  {" "}
                  <Inline whiteSpace="nowrap">
                    and bilingual world traveler
                  </Inline>
                </InlineBlock>
                <InlineBlock
                  width={tiny ? "100%" : "auto"}
                  backgroundColor={theme.intro.tagLine.backgroundColor}
                  color={theme.intro.tagLine.color}
                  padding="0.2rem 0.4rem"
                  fontSize="1.1rem"
                  fontStyle="italic"
                >
                  When I'm not coding, I'm out exploring the world...
                </InlineBlock>
                <Block marginTop="1.75rem" paddingLeft={tiny ? "1.75rem" : "0"}>
                  {learnMoreButton}
                </Block>
              </Col>
            </Col>
          )}
        </Motion>
        <Carousel autoplay images={images} height={height} />
      </Block>
    );
  }
}

export default deviceSize(Intro);
