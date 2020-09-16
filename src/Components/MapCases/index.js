import React from "react";
import { StyledMap } from "./styles";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import {showDataOnMap} from '../../App/util'

function MapCases({ countries, center, zoom, caseType }) {
  return (
    <StyledMap>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, caseType)}
      </LeafletMap>
    </StyledMap>
  );
}



export default MapCases;
