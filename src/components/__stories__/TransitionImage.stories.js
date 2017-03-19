import React from "react";
import { storiesOf, action } from "@kadira/storybook";

import TransitionImage from "../TransitionImage";

const images = [
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246852/sayu-muertos_t7gbsj.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246853/sayu-sunset_xdxkhi.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/yelapa-beach_emqau0.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/agaves_bqhxe1.jpg"
];

storiesOf("TransitionImage", module).add("example", () => (
  <TransitionImage
    backgroundColor="#fff"
    images={images}
    current={0}
    height="500px"
  />
));
