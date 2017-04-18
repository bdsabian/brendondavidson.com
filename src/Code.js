import React from "react";
import { gql, graphql } from "react-apollo";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import InlineBlock from "jsxstyle/InlineBlock";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";

import theme from "./lib/theme";

export const Code = ({ data: { error, loading, allLinks: links } }) => (
  <Block
    color={theme.code.color}
    backgroundColor={theme.code.backgroundColor}
    padding="2.5rem 0"
  >
    <Container style={{ maxWidth: "42rem", textAlign: "center" }}>
      {error && <Block>{error}</Block>}
      {loading && <Block>Loading...</Block>}
      {!error &&
        !loading &&
        <Col>
          <Block marginBottom="1rem">
            This site lovingly over-engineered with:
          </Block>
          <Block
            component="ul"
            listStyle="none"
            margin="0 0 1rem 0"
            padding="0"
          >
            {links.map(({ id, name, href }) => (
              <li key={id}>
                {href
                  ? <Block component="a" color="white" props={{ href }}>
                      {name}
                    </Block>
                  : name}
              </li>
            ))}
          </Block>
          <Button
            component="a"
            href="https://www.github.com/bdsabian/brendondavidson.com"
            target="_blank"
            noborder
            color="#0D5D94"
            style={{ margin: "0.4rem" }}
          >
            <InlineBlock
              component={Icon}
              props={{ name: "github-square" }}
              fontSize="1.5rem"
              marginRight="0.5rem"
              lineHeight="24px"
              verticalAlign="middle"
            />
            {" "}
            <InlineBlock lineHeight="24px" verticalAlign="middle">
              View the code on Github
            </InlineBlock>
          </Button>
        </Col>}
    </Container>
  </Block>
);

export default graphql(
  gql`
  query {
    allLinks {
      id
      name
      href
    }
  }
`
)(Code);
