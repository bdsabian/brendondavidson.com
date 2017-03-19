import React from "react";
import { storiesOf, action } from "@kadira/storybook";

import TrackInViewport from "../TrackInViewport";

const Section = props => {
  const { children, id, ["data-path"]: dataPath } = props;
  return (
    <div
      style={{
        minHeight: "500px",
        color: "#fff",
        backgroundColor: "#333",
        border: "5px solid #fff"
      }}
      id={id}
      data-path={dataPath}
    >
      {children}
    </div>
  );
};
class TestWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  onVisibilityChange(elements) {
    const ids = elements.filter(el => el.nodeName).map(el => {
      const nodeType = el.nodeName.toLowerCase();
      return el.id ? `${nodeType}#${el.id}` : nodeType;
    });
    this.props.onChange(ids.join(", "));
  }

  render() {
    return (
      <TrackInViewport onChange={this.onVisibilityChange} offset={50}>
        <Section id="about">about</Section>
        <Section id="skills">skills</Section>
        <Section id="test">test</Section>
        <div>testing</div>
        <Section id="portfolio" data-path="/recent-work">portfolio</Section>
        <Section id="contact">contact</Section>
      </TrackInViewport>
    );
  }
}

storiesOf(
  "TrackInViewport",
  module
).addWithInfo(
  "example",
  `List of current elements in view prints in actions tab.`,
  () => <TestWrapper onChange={action("elementsInViewport")} />,
  { propTables: [TrackInViewport] }
);
