import React, { Component } from "react";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import Row from "jsxstyle/Row";

import Container from "./components/Container";
import SectionHeading from "./components/SectionHeading";

import theme from "./lib/theme";

const aboutParagraphs = [
  `I'm Brendon Davidson, a 36-year-old web developer from Rochester, NY currently living near
  Puerto Vallarta, Mexico. My 10+ years of experience include <span class="highlight">web application architecture</span>,
  <span class="highlight">database design</span>, and both <span class="highlight">backend and frontend development</span>
  using a variety of languages and frameworks.`,
  `Throughout my career I've amassed a wide range of knowledge and skills and continue to enjoy keeping up with the latest innovations.  
  I've designed and built many systems from simple <span class="highlight">responsive web pages</span> to a 
  <span class="highlight">highly scalable platform for measuring ad engagement</span>  for an NYC-based startup that was eventually 
  purchased by one of the largest market research companies in the world.`,
  `My biggest passions apart from technology are travel and photography. When I'm not working, <span class="highlight">I love to explore the world</span>
  , seeking out new sights, cultures, and experiences. I've been fortunate to      have climbed Mt. Kilimanjaro, rafted through the Grand Canyon, gone 
  ziplining in the rainforests of Costa Rica, walked through ancient Macchu Picchu, and more.`,
  "<b>Tambien hablo español!</b>"
];

export class About extends Component {
  render() {
    const {
      id
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
            <Block
              component="img"
              props={{
                alt: "Brendon",
                src: "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246837/brendon_wmx9pr.jpg"
              }}
              margin="0 auto"
              width="12rem"
              height="12rem"
              verticalAlign="middle"
              border="0.3rem solid rgba(255,255,255,0.8)"
              borderRadius="50%"
            />
          </Block>
          <Col flex="2" flexBasis="28rem" fontFamily="Raleway" paddingLeft="0">
            <SectionHeading>About Me</SectionHeading>
            {aboutParagraphs.map((p, i) => (
              <Block
                component="p"
                key={i}
                marginBottom="1.75rem"
                fontSize="1.1em"
                textAlign="left"
                props={{ dangerouslySetInnerHTML: { __html: p } }}
              />
            ))}
          </Col>
        </Row>
      </Block>
    );
  }
}

export default About;
