import React, { Component, PropTypes } from "react";
import { Motion, spring } from "react-motion";

import Block from "jsxstyle/Block";
import InlineBlock from "jsxstyle/InlineBlock";
import Row from "jsxstyle/Row";

import Container from "./Container";
import Sticky from "./Sticky";

export class StaticNavbar extends Component {
  static propTypes = {
    hideLinks: PropTypes.bool,
    homeLinkUrl: PropTypes.string,
    style: PropTypes.object,
    links: PropTypes.array.isRequired
  };

  static defaultProps = {
    hideLinks: true,
    homeLinkUrl: "#page-top",
    style: {}
  };

  shouldComponentUpdate(nextProps) {
    return this.props.hideLinks !== nextProps.hideLinks ||
      this.props.style !== nextProps.style;
  }

  render() {
    const { hideLinks, homeLinkUrl, style, links } = this.props;

    const linkStyle = {
      color: "rgba(255,255,255,0.7)",
      hoverColor: "#fff",
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
      textDecoration: "none",
      transition: "color 0.7s ease"
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
          <InlineBlock
            component="a"
            props={{ href: homeLinkUrl }}
            color="rgba(255,255,255,0.7)"
            hoverColor="#fff"
            fontSize="20px"
            textTransform="uppercase"
            textDecoration="none"
            transition="color 0.7s ease"
          >
            Brendon Davidson
          </InlineBlock>
          {!hideLinks &&
            <Row flex="2" alignItems="center" justifyContent="flex-end">
              {links.map((link, i) => {
                const linkProps = link.callback
                  ? { onClick: link.callback }
                  : { href: link.href };
                return (
                  <Block
                    key={`${i}-${link.text}`}
                    margin="0 4px"
                    border="2px solid transparent"
                  >
                    <InlineBlock component="a" props={linkProps} {...linkStyle}>
                      {link.text}
                    </InlineBlock>
                  </Block>
                );
              })}
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
