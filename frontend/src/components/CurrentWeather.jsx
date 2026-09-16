import WeatherIcon
  from "./WeatherIcon";


function CurrentWeather({ weather }) {

  const current =
    weather.current;


  return (

    <section className="current-weather">

      <div className="current-main">

        <WeatherIcon
          icon={current.icon}
        />

        <div>

          <div className="current-temperature">

            {Math.round(
              current.temperature
            )}°C

          </div>

          <div className="current-condition">

            {current.condition}

          </div>

        </div>

      </div>


      <div className="current-details">

        <div>

          <span>
            Sensación térmica
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
            Probabilidad de lluvia
          </span>

          <strong>
            {Math.round(
              current.precipitationProbability ?? 0
            )}%
          </strong>

        </div>


        <div>

          <span>
            Presión
          </span>

          <strong>
            {Math.round(
              current.pressure
            )} hPa
          </strong>

        </div>


        <div>

          <span>
            Visibilidad
          </span>

          <strong>
            {Math.round(
              current.visibility
            )} km
          </strong>

        </div>


        <div>

          <span>
            Índice UV
          </span>

          <strong>
            {current.uvIndex ?? "-"}
          </strong>

        </div>


        <div>

          <span>
            Nubosidad
          </span>

          <strong>
            {Math.round(
              current.cloudCover ?? 0
            )}%
          </strong>

        </div>

      </div>

    </section>

  );

}

export default CurrentWeather;