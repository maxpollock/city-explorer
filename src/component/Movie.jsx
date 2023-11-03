export default function RenderMovie({ weather }) {
  return (
    <>
      <h2 id="weathertitle">Movie Suggestion:</h2>
      <div className="resultdiv">
        {weather.map((data) => (
          <div key={data.date}>
            <div className="resultsweath">
              <h4>Title: {data.title}</h4>
              <h4>Overview: {data.overview}</h4>
              <h4>Popularity: {data.popularity}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
