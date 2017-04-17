import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import { colors } from "../../lib/theme";
import Carousel from "../Carousel";

const images = [
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246852/sayu-muertos_t7gbsj.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246853/sayu-sunset_xdxkhi.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/yelapa-beach_emqau0.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/agaves_bqhxe1.jpg"
];

storiesOf("Carousel", module)
  .add("with children", () => (
    <Carousel images={images}>
      <div
        style={{
          marginTop: "220px",
          marginLeft: "1.75rem",
          display: "inline-block",
          padding: "0 8px",
          fontSize: "40px",
          fontWeight: "700",
          color: "#fff",
          backgroundColor: colors.burntOrange
        }}
      >
        I am a child!
      </div>
    </Carousel>
  ))
  .add("with custom height", () => <Carousel images={images} height="300px" />)
  .add("with autoplay", () => <Carousel images={images} autoplay={true} />)
  .add("with autoplay and custom delay", () => (
    <Carousel images={images} autoplay={true} delay={2000} />
  ))
  .add("with autoplay and controls", () => (
    <Carousel images={images} autoplay={true} showControls={true} />
  ))
  .add("with parental control", () => {
    return <ControlledCarousel images={images} showControls={true} />;
  });

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
  }

  onPrev() {
    const index = this.state.current === 0
      ? this.props.images.length - 1
      : this.state.current - 1;
    this.setState({ current: index });
  }

  onNext() {
    const index = this.state.current === this.props.images.length - 1
      ? 0
      : this.state.current + 1;
    this.setState({ current: index });
  }

  render() {
    return (
      <Carousel
        current={this.state.current}
        onPrev={this.onPrev.bind(this)}
        onNext={this.onNext.bind(this)}
        {...this.props}
      />
    );
  }
}
