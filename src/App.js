import React, { Component } from "react";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";

import About from "./About";
import Code from "./Code";
import Contact from "./Contact";
import Intro from "./Intro";
import Jobs from "./Jobs";
import Skills from "./Skills";
import Quote from "./Quote";

import Navbar from "./components/Navbar";

import deviceSize from "./lib/deviceSize";

const links = [
  { href: "#about", text: "About Me" },
  { href: "#skills", text: "My Skills" },
  { href: "#work-history", text: "Work History" },
  { href: "#contact", text: "Contact Me" }
];

export class App extends Component {
  render() {
    const { small } = this.props;
    return (
      <Col id="page-top" minHeight="100vh">
        <Navbar
          links={links}
          hideLinks={small}
          stickAt="600"
          stickyStyle={{ padding: "0.2rem 0" }}
        />
        <Block flex="1">
          <Intro />
          <About id="about" />
          <Skills id="skills" />
          <Quote />
          <Jobs id="work-history" />
          <Contact id="contact" />
          <Code />
        </Block>
      </Col>
    );
  }
}

export default deviceSize(App);
