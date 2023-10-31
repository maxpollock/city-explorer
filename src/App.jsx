import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import RenderWeather from "./component/Weather";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState({});
  const [mapPic, setMap] = useState("");
  const [zoom, setZoom] = useState(13);
  const [errorMessage, setErrorMessage] = useState("");
  const [weather, setWeather] = useState([])

  function handleChange(event) {
    setSearch(event.target.value);
    checkInput();
  }

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const loc = await axios.get(API);
    setLocation(loc.data[0]);
    getMap(loc.data[0].lat, loc.data[0].lon, zoom);
    getWeather(loc.data[0].lat, loc.data[0].lon);
  }

  function getMap(lat, lon, zoom) {
    const mapData = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${lat},${lon}&zoom=${zoom}&size=500x300&format=png&maptype=roadmap`;
    setMap(mapData);
  }

  function zoomIn() {
    setZoom(zoom + 1);
  }

  function zoomOut() {
    setZoom(zoom - 1);
  }

  useEffect(() => {
    getMap(location.lat, location.lon, zoom);
  }, [zoom, location.lat, location.lon]);

  function checkInput() {
    if (!isNaN(search)) {
      setErrorMessage("Please enter a valid city name.");
    }
  }


  async function getWeather(lat, lon){
    const API = `http://localhost:8080/weather?lat=${lat}&lon=${lon}`
    const res = await axios.get(API)
    setWeather(res.data)
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
        <button onClick={checkInput}>Explore!</button>
        {!isNaN(search) && <p>{errorMessage}</p>}
      </form>

      {location.lat && (
        <div className="results">
          <img id="map" src={mapPic} />
          <h2>{location.display_name}</h2>
          <button onClick={zoomIn}>+ zoom</button>
          <button onClick={zoomOut}>- zoom</button>
          <h3>latitude: {location.lat}</h3>
          <h3>longitute: {location.lon}</h3>
        </div>
      )}

      < RenderWeather weather={weather} />

    </main>
  );
}

export default App;
