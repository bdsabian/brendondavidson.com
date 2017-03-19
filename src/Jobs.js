import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import Row from "jsxstyle/Row";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";
import SectionHeading from "./components/SectionHeading";
import SectionSubHeading from "./components/SectionSubHeading";

import Job from "./Job";

import theme from "./lib/theme";

export class Jobs extends Component {
  render() {
    const { data: { error, loading, allJobs: jobs } } = this.props;
    return (
      <Block
        backgroundColor={theme.projects.backgroundColor}
        padding="3.5rem 0"
      >
        <Container>
          <SectionHeading>Work History</SectionHeading>
          <SectionSubHeading>
            Check out the projects I've worked on.
          </SectionSubHeading>
          <Col flexWrap="wrap" justifyContent="space-between">
            {error && <Block color="red">{error}</Block>}
            {loading && <Block>Loading...</Block>}
            {!loading &&
              !error &&
              jobs.map(job => <Job key={job.slug} data={job} />)}
          </Col>
          <Row flexWrap="wrap" justifyContent="center" paddingTop="2.5rem">
            <Button
              component="a"
              href="https://brendondavidson-resume2017-zosuultrth.now.sh/BrendonDavidson_Resume2017.pdf"
              target="_blank"
              nobg
              borderColor={theme.projects.downloadButton.borderColor}
              textColor={theme.projects.downloadButton.color}
            >
              <Icon name="download" style={{ marginRight: "0.5rem" }} />
              {" "}Download My Resume
            </Button>
          </Row>
        </Container>
      </Block>
    );
  }
}

export default graphql(
  gql`
  query {
    allJobs(
      filter: {
        enabled: true
      }
    ) {
      id
      slug
      company {
        name
        about
      }
      years
      description
      position
      thumbnail
      order
      technologies
      detailImages
    }
  }
`
)(Jobs);
