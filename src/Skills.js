import React, { Component } from "react";

import Block from "jsxstyle/Block";
import Row from "jsxstyle/Row";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";
import SectionHeading from "./components/SectionHeading";
import SectionSubHeading from "./components/SectionSubHeading";

import theme from "./lib/theme";

const skills = [
  {
    icon: "code",
    title: "LANGUAGES + FRAMEWORKS",
    description: "HTML • CSS • Flexbox • Javascript (including ES6/7) • Node • React • Ruby/Rails • Java • JSP • JSF • Spring • PHP • C/C++ • C# • Visual Basic"
  },
  {
    icon: "database",
    title: "DATABASES + SEARCH",
    description: "MySQL • PostgreSQL • MS SQL Server • Sphinx Search • Algolia • Memcache • Redis"
  },
  {
    icon: "server",
    title: "HOSTING + SERVER MANAGEMENT",
    description: "Linux • Apache • Nginx • Engine Yard, Heroku • Zeit Now • AppNexus • AWS • EC2 • S3 • SSL"
  },
  {
    icon: "wrench",
    title: "DEVELOPMENT TOOLS",
    description: "Git • Webpack • Broccoli • Grunt / Gulp • VS Code • Hyper.app • ZSH • tmux • Chrome Dev Tools • RubyMine • IntelliJ IDEA • vi • SVN • CVS"
  },
  {
    icon: "globe",
    title: "APIS + SERVICES",
    description: "Github • Google Analytics • Google Fonts • Google Cloud • Firebase • Font Awesome • Mailchimp • SurveyMonkey • Optimizely • Algolia • Many more"
  },
  {
    icon: "line-chart",
    title: "PRODUCTIVITY",
    description: "Word • Excel • Powerpoint • Outlook • Skype • GoToMeeting • Join.Me • Evernote • Pivotal Tracker • Jira • Slack"
  }
];

export class Skills extends Component {
  render() {
    const { id } = this.props;

    return (
      <Block
        props={{ id }}
        padding="2.5rem 0"
        backgroundColor={theme.skills.backgroundColor}
      >
        <Container>
          <SectionHeading>My Skills and Technology Experience</SectionHeading>
          <SectionSubHeading>
            I have a vast skill set which is always growing. I’m constantly learning and I
            {" "}
            enjoy keeping up with the latest technologies and innovations.
          </SectionSubHeading>
          <Block padding="0 0 2.5rem 0" textAlign="center">
            <Row justifyContent="center" flexWrap="wrap">
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
            </Row>
          </Block>
          <Row flexWrap="wrap">
            {skills.map((skill, i) => (
              <Block key={i} flex="1 0 17.5rem" padding="0.4rem">
                <Row flexWrap="wrap">
                  <Icon
                    name={skill.icon}
                    rounded
                    backgroundColor="orange"
                    size="1.7rem"
                    style={{
                      marginRight: "0.55rem"
                    }}
                  />
                  <Block flex="1">
                    <Block component="h4" flex="1">
                      {skill.title}
                    </Block>
                    <Block component="p" fontSize="0.9rem">
                      {skill.description}
                    </Block>
                  </Block>
                </Row>
              </Block>
            ))}
          </Row>
          <Block component="p" marginBottom="1.75rem" textAlign="center">
            I have very minimal experience with the following technologies but am interested in doing more:
            <br /><br />
            <i>Ember.js, React Native, Elm, Clojure</i>
          </Block>
        </Container>
      </Block>
    );
  }
}

export default Skills;
