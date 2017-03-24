import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import Row from "jsxstyle/Row";

import Container from "./components/Container";
import SectionHeading from "./components/SectionHeading";

import theme from "./lib/theme";

export class About extends Component {
  render() {
    const {
      id,
      data: { error, loading, allTexts: aboutParagraphs }
    } = this.props;
    return (
      <Block
        props={{ id }}
        textAlign="center"
        backgroundColor={theme.about.backgroundColor}
        color={theme.about.color}
        padding="3.5rem 0"
      >
        <Row component={Container} alignItems="center" flexWrap="wrap">
          <Block
            flex="1"
            flexBasis="12rem"
            position="relative"
            minHeight="1px"
            paddingRight="1rem"
            paddingLeft="1rem"
            marginTop="0"
          >
            <img
              alt="Brendon"
              src="https://res.cloudinary.com/duok7ibrq/image/upload/v1484246837/brendon_wmx9pr.jpg"
              style={{
                display: "block",
                borderRadius: "50%",
                margin: "0 auto",
                border: "0.3rem solid rgba(255,255,255,0.8)",
                verticalAlign: "middle",
                width: "12rem",
                height: "12rem"
              }}
            />
          </Block>
          <Col flex="2" flexBasis="28rem" fontFamily="Raleway" paddingLeft="0">
            <SectionHeading>About Me</SectionHeading>
            {error && <h3 style={{ color: "#f00" }}>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error &&
              !loading &&
              aboutParagraphs.map(p => (
                <p
                  key={p.id}
                  style={{
                    marginBottom: "1.75rem",
                    fontSize: "1.1em",
                    textAlign: "left"
                  }}
                  dangerouslySetInnerHTML={{ __html: p.value }}
                />
              ))}
          </Col>
        </Row>
      </Block>
    );
  }
}

export default graphql(
  gql`
  query {
    allTexts {
      id
      value
    }
  }
`
)(About);
