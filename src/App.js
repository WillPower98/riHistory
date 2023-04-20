import React, { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import data from "./data/historical-events.json";

function App() {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
  const [selectedEvent, setSelectedEvent] = useState(null);
  console.info('mapbox token is ' + MAPBOX_TOKEN); 

  return (
    <ReactMapGL
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
            <button className="marker-btn"
            onClick={e => {
              e.preventDefault();
              setSelectedEvent(event);
            }}>
            <img src={event.img} alt="event icon"/>
            </button>
        </Marker>
      ))}
  
      {selectedEvent ? (
        <Popup 
          latitude={selectedEvent.coordinates[0]} 
          longitude={selectedEvent.coordinates[1]}
          onClose={ ()=> { setSelectedEvent(null); }}>
          <div>
            {console.info("over here")}
            <p>{selectedEvent.eventDescription}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

export default App;
