import React from "react";
import { storiesOf, action } from "@kadira/storybook";

import Timer from "../Timer";

storiesOf("Timer", module).addWithInfo(
  "example",
  `
  Timer component calls the supplied callback after the supplied delay (ms). Check the Action Logger 
  to see the calls being executed.
`,
  () => <Timer delay={1000} callback={action("callback called")} />
);
