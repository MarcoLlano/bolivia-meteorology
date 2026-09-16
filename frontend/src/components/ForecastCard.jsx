import WeatherIcon
  from "./WeatherIcon";


function ForecastCard({ forecast }) {

  const date =
    new Date(
      `${forecast.date}T12:00:00`
    );


  const dayName =
    date.toLocaleDateString(
      "es-BO",
      {
        weekday: "long"
      }
    );


  const formattedDate =
    date.toLocaleDateString(
      "es-BO",
      {
        day: "numeric",
        month: "short"
      }
    );


  return (

    <article className="forecast-card">

      <h3>
        {dayName}
      </h3>

      <span className="forecast-date">
        {formattedDate}
      </span>


      <WeatherIcon
        icon={forecast.icon}
      />


      <div className="forecast-temperatures">

        <strong>
          {Math.round(
            forecast.maxTemperature
          )}°
        </strong>

        <span>
          {Math.round(
            forecast.minTemperature
          )}°
        </span>

      </div>


      <div className="forecast-condition">
        {forecast.condition}
      </div>


      <div className="forecast-rain">

        💧

        {Math.round(
          forecast.precipitationProbability ?? 0
        )}%

      </div>

    </article>

  );

}


export default ForecastCard;