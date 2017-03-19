import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Block from "jsxstyle/Block";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";
import SectionHeading from "./components/SectionHeading";
import SectionSubHeading from "./components/SectionSubHeading";

import theme from "./lib/theme";

export class Skills extends Component {
  render() {
    const { error, loading, allSkills: skills } = this.props.data;

    return (
      <Block padding="2.5rem 0" backgroundColor={theme.skills.backgroundColor}>
        <Container>
          <SectionHeading>My Skills and Technology Experience</SectionHeading>
          <SectionSubHeading>
            I have a vast skill set which is always growing. I’m constantly learning and I
            {" "}
            enjoy keeping up with the latest technologies and innovations.
          </SectionSubHeading>
          <Block padding="0 0 2.5rem 0" textAlign="center">
            <div className="layout horizontal wrap center-justified">
              <Button
                component="a"
                href="https://www.linkedin.com/in/brendondavidson"
                target="_blank"
                noborder
                color="#0D5D94"
                style={{ margin: "0.4rem" }}
              >
                <Icon
                  name="linkedin-square"
                  style={{ marginRight: "0.5rem" }}
                />
                {" "}Find Me On LinkedIn
              </Button>
            </div>
          </Block>
          <div className="layout horizontal wrap">
            {error && <h4 style={{ color: "#f00" }}>{error}</h4>}
            {loading && <h4>Loading...</h4>}
            {!loading &&
              !error &&
              skills.map(skill => (
                <Block key={skill.id} flex="1 0 17.5rem" padding="0.4rem">
                  <div className="layout horizontal wrap">
                    <Icon
                      name={skill.icon}
                      style={{
                        display: "block",
                        height: "1.7rem",
                        width: "1.7rem",
                        borderRadius: "1.7rem",
                        lineHeight: "1.7rem",
                        textAlign: "center",
                        marginRight: "0.55rem",
                        background: "#e0692c",
                        color: "white",
                        float: "left",
                        transition: "all 300ms"
                      }}
                    />
                    <div className="flex">
                      <h4 className="flex">
                        {skill.title}
                      </h4>
                      <p style={{ fontSize: "0.9rem" }}>{skill.description}</p>
                    </div>
                  </div>
                </Block>
              ))}
          </div>
          <p style={{ marginBottom: "1.75rem", textAlign: "center" }}>
            I have very minimal experience with the following technologies but am interested in doing more:
            <br /><br />
            <i>Ember.js, React Native, Elm, Clojure</i>
          </p>
        </Container>
      </Block>
    );
  }
}

export default graphql(
  gql`
  query {
    allSkills {
      id
      icon
      title
      description
    }
  }
`
)(Skills);
