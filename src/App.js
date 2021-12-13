import React, {useState} from "react";
import axios from "axios";
import Map from "./Map/Map";
import PerformersNearby from "./performersNearby/index.js";
import API_KEY from '../config'

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <div>
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <PerformersNearby/>
    </div>
  );
}

export default App;
