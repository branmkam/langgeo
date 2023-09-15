import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import countries from "../data/countries.json";

function filterGeo(feature) {
  return feature.properties.ADMIN[0] == "U";
}

function featPopup(feature, leafletLayer) {
  const popupOptions = {
    minWidth: 100,
    maxWidth: 250,
    className: "popup-classname",
  };

  leafletLayer.bindPopup(() => {
    return `${feature.properties.ADMIN}`;
  }, popupOptions);
}

export default function Map() {
  const position = [35.1, -80.9];
  return (
    <MapContainer className="map" center={position} zoom={7}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON onEachFeature={featPopup} data={countries} filter={filterGeo} />
    </MapContainer>
  );
}
