import React from "react";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import InlineBlock from "jsxstyle/InlineBlock";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";

import theme from "./lib/theme";

const links = [
  { name: "react 15", href: "https://facebook.github.io/react/" },
  { name: "jsxstyle", href: "https://github.com/smyte/jsxstyle" },
  {
    name: "react-apollo",
    href: "https://github.com/apollographql/react-apollo"
  },
  { name: "graph.cool", href: "https://www.graph.cool" },
  { name: "now.sh", href: "https://zeit.co/now" }
];

export const Code = () => (
  <Block
    color={theme.code.color}
    backgroundColor={theme.code.backgroundColor}
    padding="2.5rem 0"
  >
    <Container style={{ maxWidth: "42rem", textAlign: "center" }}>
      {
        (
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
              {links.map(({ name, href }, i) => (
                <li key={i}>
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
          </Col>
        )
      }
    </Container>
  </Block>
);

export default Code;
