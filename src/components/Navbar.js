import React, { Component, PropTypes } from "react";
import { Motion, spring } from "react-motion";

import Block from "jsxstyle/Block";
import Row from "jsxstyle/Row";

import Container from "./Container";
import ScrollLink from "./ScrollLink";
import Sticky from "./Sticky";

export class StaticNavbar extends Component {
  static propTypes = {
    hideLinks: PropTypes.bool,
    style: PropTypes.object,
    links: PropTypes.array.isRequired
  };

  static defaultProps = {
    hideLinks: true,
    style: {}
  };

  shouldComponentUpdate(nextProps) {
    return this.props.hideLinks !== nextProps.hideLinks ||
      this.props.style !== nextProps.style;
  }

  render() {
    const { hideLinks, style, links } = this.props;

    const linkStyle = {
      color: "#fff",
      outline: "none",
      padding: "4px",
      margin: "6px",
      textShadow: "none",
      fontSize: "15px",
      textTransform: "uppercase",
      lineHeight: "20px",
      position: "relative",
      display: "block",
      backgroundColor: "transparent",
      textDecoration: "none"
    };

    return (
      <Block
        style={{
          padding: "0.6rem",
          width: "100%",
          zIndex: "5000",
          position: "absolute",
          backgroundColor: "transparent",
          ...style
        }}
      >
        <Row
          component={Container}
          justifyContent={hideLinks ? "center" : "space-between"}
          alignItems="center"
          display="flex !important"
        >
          <ScrollLink
            style={{
              color: "#fff",
              fontSize: "20px",
              textTransform: "uppercase",
              textDecoration: "none"
            }}
            to="/"
          >
            Brendon Davidson
          </ScrollLink>
          {!hideLinks &&
            <Row flex="2" alignItems="center" justifyContent="flex-end">
              {links.map((link, i) => (
                <Block
                  key={`${i}-${link.text}`}
                  margin="0 4px"
                  border="2px solid transparent"
                >
                  {link.callback &&
                    <ScrollLink to={link.href} style={linkStyle}>
                      {link.text}
                    </ScrollLink>}
                  {!link.callback &&
                    <ScrollLink to={link.href} style={linkStyle}>
                      {link.text}
                    </ScrollLink>}
                </Block>
              ))}
            </Row>}
        </Row>
      </Block>
    );
  }
}

const springConfig = { stiffness: 200, damping: 20 };

export const SlidingNavbar = ({ open = false, style = {}, ...props }) => (
  <Motion
    defaultStyle={{ y: -100 }}
    style={
      open ? { y: spring(0, springConfig) } : { y: spring(-100, springConfig) }
    }
  >
    {({ y }) => {
      return (
        <StaticNavbar
          {...props}
          style={{
            position: "fixed",
            backgroundColor: "rgba(0,0,0,0.75)",
            transform: `translateY(${y}%)`,
            ...style
          }}
        />
      );
    }}
  </Motion>
);

export const StickyNavbar = (
  { stickAt = "0", stickyStyle, style, ...props }
) => (
  <Sticky absolute enter={stickAt}>
    {sticky => (
      <div>
        <StaticNavbar {...props} style={style} />
        <SlidingNavbar open={sticky} {...props} style={stickyStyle} />
      </div>
    )}
  </Sticky>
);

export default StickyNavbar;
