import React from "react";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";

import theme from "./lib/theme";

export default () => (
  <Block
    color={theme.code.color}
    backgroundColor={theme.code.backgroundColor}
    padding="2.5rem 0"
  >
    <Container style={{ maxWidth: "42rem" }}>
      <Col>
        <Button
          component="a"
          href="https://www.github.com/bdsabian/brendondavidson.com"
          target="_blank"
          noborder
          color="#0D5D94"
          style={{ margin: "0.4rem" }}
        >
          <Icon
            name="github-square"
            style={{
              fontSize: "1.5rem",
              marginRight: "0.5rem",
              lineHeight: "24px",
              verticalAlign: "middle"
            }}
          />
          {" "}
          <span style={{ lineHeight: "24px", verticalAlign: "middle" }}>
            View the code for this site on Github
          </span>
        </Button>
      </Col>
    </Container>
  </Block>
);
