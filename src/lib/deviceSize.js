import React from "react";
import DeviceSize from "../components/DeviceSize";

export default Component => {
  return props => (
    <DeviceSize>
      {deviceProps => <Component {...deviceProps} {...props} />}
    </DeviceSize>
  );
};
