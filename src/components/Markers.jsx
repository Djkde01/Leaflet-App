import React from "react";

import { Marker } from "react-leaflet";
import { Icon } from "leaflet";

const pin = new Icon({
  iconUrl: require("@assets/pin.svg"),
  iconSize: [25, 25],
});

const Markers = () => {
  return <Marker position={[4.798304, -75.686463]} icon={pin} />;
};

export default Markers;
