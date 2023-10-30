import axios from "axios";
import "./App.css";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState({});
  const [mapPic, setMap] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const loc = await axios.get(API);
    setLocation(loc.data[0]);

    const lat = loc.data[0].lat;
    const lon = loc.data[0].lon;

    const mapData = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${lat},${lon}zoom=2&size=500x300&format=png&maptype=roadmap`;
    setMap(mapData);
  }

  return (
    <main>
      <div className="title">
        <h1>
          city explorer
          <span>
            <img
              src="https://img.icons8.com/doodle/48/building--v1.png"
              alt="house"
            />
          </span>
        </h1>
        <h2>search for a city to find out more</h2>
      </div>
      <form onClick={getLocation}>
        <input onChange={handleChange} type="text" placeholder="City Name" />
        <button>Explore!</button>
      </form>

      <div className="results">
        <h2>{location.display_name}</h2>
        <h3>latitude: {location.lat}</h3>
        <h3>longitute: {location.lon}</h3>
        <img src={mapPic} />
      </div>
    </main>
  );
}

export default App;
