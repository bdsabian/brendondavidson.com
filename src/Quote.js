import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import Block from "jsxstyle/Block";

import Container from "./components/Container";

import theme from "./lib/theme";

export class Quote extends Component {
  render() {
    const { error, loading, Quote: quote } = this.props.data;

    return (
      <Block
        backgroundColor={theme.quote.backgroundColor}
        color={theme.quote.color}
        textAlign="center"
        padding="3.5rem 0"
      >
        <Container>
          <Block fontSize="1.25rem">
            {!error && !loading && quote.text}
          </Block>
        </Container>
      </Block>
    );
  }
}

export default graphql(
  gql`
  query {
    Quote(id: "cj0b1yl3c2moy01385udzi9ld") {
      text
    }
  }
`
)(Quote);
