import React from "react";
import SearchAppBar from "./components/Header/SearchAppBar";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { statesData } from "./../src/Leaflet/data";

function App() {
  const position = [21.03333, 105.85];

  return (
    <>
      <SearchAppBar />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=El1KKGkzSldLWtJQo9IS"
        />
        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              key={state.id}
              pathOptions={{
                fillColor: "#FD8D3C",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    dashArray: "",
                    fillColor: "#BD0026",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: "white",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                    fillColor: "#FD8D3C",
                  });
                },
                click: (e) => {},
              }}
            />
          );
        })}

        <Marker position={position}>
          <Popup>
            This is <br /> my hometown
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
