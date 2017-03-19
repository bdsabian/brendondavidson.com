import React from "react";
import { addDecorator, configure, setAddon } from "@kadira/storybook";
import infoAddon, { setDefaults } from "@kadira/react-storybook-addon-info";

import ThemeProvider from "../src/components/ThemeProvider";

import "normalize.css";
import "../src/index.css";
import "typeface-montserrat";
import "typeface-raleway";

setAddon(infoAddon);
setDefaults({ inline: true, source: false });

addDecorator(story => (
  <ThemeProvider>
    {story()}
  </ThemeProvider>
));
const req = require.context(
  "../src/components/__stories__",
  true,
  /.stories.js$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
