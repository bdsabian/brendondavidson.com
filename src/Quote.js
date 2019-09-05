import React, { Component } from "react";
import Block from "jsxstyle/Block";

import Container from "./components/Container";

import theme from "./lib/theme";

export class Quote extends Component {
  render() {
    return (
      <Block
        backgroundColor={theme.quote.backgroundColor}
        color={theme.quote.color}
        textAlign="center"
        padding="3.5rem 0"
      >
        <Container>
          <Block fontSize="1.25rem">
            Throughout my career I've amassed a wide range of knowledge and skills and continue to enjoy keeping up with the latest innovations.
          </Block>
        </Container>
      </Block>
    );
  }
}

export default Quote;
