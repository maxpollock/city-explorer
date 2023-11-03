export default function RenderWeather({ weather }) {
  return (
    <>
      <h2 id="weathertitle">Current Weather:</h2>
      <div className="resultdiv">
        {weather.map((data) => (
          <div key={data.date}>
            <div className="resultsweath">
              <img src={`./icons/${data.icon}.png`}/>
              <h4>{data.description}</h4>
              <h4>Temp: {data.temp}*C</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
