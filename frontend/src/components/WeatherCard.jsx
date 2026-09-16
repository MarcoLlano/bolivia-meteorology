import {
  Link
} from "react-router-dom";

import WeatherIcon
  from "./WeatherIcon";


function WeatherCard({ weather }) {

  const current =
    weather.current;


  return (

    <article className="weather-card">

      <div className="weather-card-header">

        <div>

          <h2>
            {weather.department}
          </h2>

          <span className="city">
            {weather.city}
          </span>

        </div>

        <WeatherIcon
          icon={current.icon}
        />

      </div>


      <div className="temperature">

        {Math.round(
          current.temperature
        )}

        <span>°C</span>

      </div>


      <div className="condition">

        {current.condition}

      </div>


      <div className="weather-details">

        <div>

          <span>
            Sensación
          </span>

          <strong>
            {Math.round(
              current.feelsLike
            )} °C
          </strong>

        </div>


        <div>

          <span>
            Humedad
          </span>

          <strong>
            {Math.round(
              current.humidity
            )}%
          </strong>

        </div>


        <div>

          <span>
            Viento
          </span>

          <strong>
            {Math.round(
              current.windSpeed
            )} km/h
          </strong>

        </div>


        <div>

          <span>
            Lluvia
          </span>

          <strong>
            {Math.round(
              current.precipitationProbability ?? 0
            )}%
          </strong>

        </div>

      </div>


      <Link
        to={`/departamento/${weather.id}`}
        className="forecast-button"
        >
        Ver pronóstico
      </Link>

    </article>

  );
}

export default WeatherCard;