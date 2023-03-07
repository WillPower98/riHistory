import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import data from "./data/historical-events.json";

function App() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
  console.info('mapbox token is ' + MAPBOX_TOKEN); 
  return (
    <Map
      initialViewState={{
        latitude: 41.5801,
        longitude: -71.4774,
        zoom: 8
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
      >
      {data.events.map(event =>(
        <Marker key={event.eventId} 
          latitude={event.coordinates[0]} 
          longitude={event.coordinates[1]}>
            <button class="marker-btn">
              <img src={event.img} alt="event icon"/>
            </button>
        </Marker>
      ))}
    </Map>
  );
}

export default App;
