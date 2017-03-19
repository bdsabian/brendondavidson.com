import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

import TransitionImage from "../TransitionImage";

const images = [
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246852/sayu-muertos_t7gbsj.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246853/sayu-sunset_xdxkhi.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/yelapa-beach_emqau0.jpg",
  "https://res.cloudinary.com/duok7ibrq/image/upload/v1484246849/agaves_bqhxe1.jpg"
];

function verifyCurrentImage(component, current) {
  component.find(TransitionImage).children().map((img, i) => {
    if (i === current) {
      expect(img.prop("opacity")).toBe(1);
    } else {
      expect(img.prop("opacity")).toBe(0);
    }
  });
}

describe("TransitionImage", () => {
  it("renders all images", () => {
    const component = mount(<TransitionImage images={images} />);

    expect(component.find("div[data-image]").length).toBe(images.length);
  });

  it("only displays the currently selected image", () => {
    const component = mount(<TransitionImage images={images} current={1} />);

    verifyCurrentImage(component, 1);
  });

  it("displays the correct image when current changes", () => {
    const component = mount(<TransitionImage images={images} current={0} />);

    verifyCurrentImage(component, 0);

    // Change the current index
    const updatedComponent = component.setProps({ images, current: 1 });
    verifyCurrentImage(component, 1);
  });
});
