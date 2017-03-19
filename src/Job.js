import React, { PureComponent, PropTypes } from "react";
import Media from "react-media";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import Inline from "jsxstyle/Inline";
import Row from "jsxstyle/Row";

export default class Job extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const {
      data: { company, description, position, technologies, years }
    } = this.props;
    return (
      <Block
        borderLeft="0.5rem solid #AD4C20"
        backgroundColor="#f0f0f0"
        marginBottom="2rem"
      >
        <Row>
          <Col padding="1rem" flex="8 0 335px">
            <h4>{position}</h4>
            <Row
              color="rgba(74,74,74,.9)"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Inline flex="1 0 300px" fontWeight="bold">
                {company.name}
              </Inline>

              <Media query={{ maxWidth: 625 }}>
                {matches => (
                  <Inline
                    flexGrow={1}
                    flexBasis={matches ? "1000px" : "230px"}
                    fontStyle="italic"
                    textAlign={matches ? "left" : "right"}
                  >
                    {years}
                  </Inline>
                )}
              </Media>
            </Row>
            {description &&
              <Block marginBottom="1rem">
                <div
                  style={{ color: "rgba(74,74,74,.9)" }}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </Block>}
            {technologies &&
              <Block>
                <Row flexWrap="wrap" justifyContent="flex-start">
                  {technologies.map((tech, i) => (
                    <Inline
                      key={i}
                      margin="0.3rem"
                      padding="0.3rem"
                      fontSize="0.8rem"
                      color="rgba(74,74,74,.9)"
                      backgroundColor="#fff"
                    >
                      {tech}
                    </Inline>
                  ))}
                </Row>
              </Block>}
          </Col>
        </Row>
      </Block>
    );
  }
}
