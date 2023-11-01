export default function RenderWeather({ weather }) {
  return (
    <>
      <h2 id="weathertitle">Current Weather:</h2>
      <div className="resultdiv">
        {weather.map((data) => (
          <div key={data.date}>
            <div className="resultsweath">
              <h4>{data.date}</h4>
              <h4>{data.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
