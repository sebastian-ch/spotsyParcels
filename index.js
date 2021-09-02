import "leaflet"
import vectorTileLayer from 'leaflet-vector-tile-layer';
import "./node_modules/leaflet/dist/leaflet.css";
import "./index.css";


const map = L.map("map", {
  zoomSnap: 0.1,
  zoomDelta: 0.,
  wheelPxPerZoomLevel: 150
}).setView([38.23,-77.64], 9);

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }
  ).addTo(map);

  const url = 'https://sebastian-ch.github.io/spotsyParcels/data/{z}/{x}/{y}.pbf';
  const options = {
          // Specify zoom range in which tiles are loaded. Tiles will be
          // rendered from the same data for Zoom levels outside the range.
          minDetailZoom, // default undefined
          maxDetailZoom, // default undefined
  
          // Styling options for L.Polyline or L.Polygon. If it is a function, it
          // will be passed the vector-tile feature and the layer name as
          // parameters.
          style, // default undefined
  
          // This works like the same option for `Leaflet.VectorGrid`.
          vectorTileLayerStyle, // default undefined
  };
  
  const layer = vectorTileLayer(url, options);
  