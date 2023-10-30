import axios from "axios";
import "./App.css";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState({});

  function handleChange(event) {
    setSearch(event.target.value);
    console.log(search)
  }

  async function getLocation(event) {
    event.preventDefault();
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const loc = await axios.get(API);
    setLocation(loc.data[0]);
  }

  return (
    <>
      <form onClick={getLocation}>
        <input onChange={handleChange} type="text" placeholder="City Name" />
        <button>Explore!</button>
      </form>

      <div className="results">
        <h2>{location.display_name}</h2>
        <h3>{location.lat}</h3>
        <h3>{location.lon}</h3>
      </div>
    </>
  );
}

export default App;
