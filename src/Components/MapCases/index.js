import React from "react";
import { StyledMap } from "./styles";
import { Map, TileLayer } from "react-leaflet";

function MapCases({ center, zoom }) {
  return (
    <StyledMap>
      <Map center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </StyledMap>
  );
}

export default MapCases;
