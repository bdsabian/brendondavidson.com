import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";

import About from "./About";
import Code from "./Code";
import Contact from "./Contact";
import Intro from "./Intro";
import Jobs from "./Jobs";
import Skills from "./Skills";
import Quote from "./Quote";

import Navbar from "./components/Navbar";
import ScrollRouter from "./components/ScrollRouter";
import ScrollRoute from "./components/ScrollRoute";
import TrackInViewport from "./components/TrackInViewport";

import deviceSize from "./lib/deviceSize";

const links = [
  { href: "/about", text: "About Me" },
  { href: "/skills", text: "My Skills" },
  { href: "/work-history", text: "Work History" },
  { href: "/contact", text: "Contact Me" }
];

export class App extends Component {
  render() {
    const { small } = this.props;
    return (
      <Router>
        <ScrollRouter>
          {isScrollingToRoute => (
            <div className="layout vertical" style={{ minHeight: "100vh" }}>
              <Navbar
                links={links}
                hideLinks={small}
                stickAt="600"
                stickyStyle={{ padding: "0.2rem 0" }}
              />
              <div className="flex-1">
                <Route
                  path="/"
                  render={({ push }) => (
                    <TrackInViewport
                      disabled={isScrollingToRoute}
                      onChange={components => {
                        const el = ReactDOM.findDOMNode(components[0]);
                        if (el) {
                          const { path } = el.dataset;
                          if (path) push(path);
                        }
                      }}
                      offset={50}
                    >
                      <ScrollRoute exact path="/" component={Intro} />
                      <ScrollRoute path="/about" component={About} />
                      <ScrollRoute path="/skills" component={Skills} />
                      <ScrollRoute path="/quote" component={Quote} />
                      <ScrollRoute path="/work-history" component={Jobs} />
                      <ScrollRoute path="/contact" component={Contact} />
                      <ScrollRoute path="/code" component={Code} />
                    </TrackInViewport>
                  )}
                />
              </div>
            </div>
          )}
        </ScrollRouter>
      </Router>
    );
  }
}

export default deviceSize(App);
