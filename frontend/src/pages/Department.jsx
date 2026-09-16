import {
  useEffect,
  useState
} from "react";

import {
  Link,
  useParams
} from "react-router-dom";

import Header
  from "../components/Header";

import CurrentWeather
  from "../components/CurrentWeather";

import ForecastCard
  from "../components/ForecastCard";

import {
  getDepartmentWeather
} from "../services/weatherService";


function Department() {

  const {
    departmentId
  } = useParams();


  const [
    weather,
    setWeather
  ] = useState(null);


  const [
    loading,
    setLoading
  ] = useState(true);


  const [
    error,
    setError
  ] = useState(null);


  useEffect(() => {

    loadWeather();

  }, [departmentId]);


  async function loadWeather() {

    try {

      setLoading(true);

      setError(null);


      const data =
        await getDepartmentWeather(
          departmentId
        );


      setWeather(data);


    } catch (error) {

      console.error(error);

      setError(
        error.message
      );


    } finally {

      setLoading(false);

    }

  }


  return (

    <>

      <Header />


      <main className="container">

        <Link
          to="/"
          className="back-link"
        >
          ← Volver a Bolivia
        </Link>


        {loading && (

          <div className="message">

            Cargando pronóstico...

          </div>

        )}


        {error && (

          <div className="error">

            {error}

          </div>

        )}


        {weather && (

          <>

            <div className="department-title">

              <div>

                <span>
                  Departamento
                </span>

                <h1>
                  {weather.department}
                </h1>

                <p>
                  {weather.city}
                </p>

              </div>


              <button
                className="refresh-button"
                onClick={loadWeather}
              >
                Actualizar
              </button>

            </div>


            <CurrentWeather
              weather={weather}
            />


            <section className="forecast-section">

              <div className="section-title">

                <h2>
                  Pronóstico de 7 días
                </h2>

                <p>
                  Temperaturas máximas,
                  mínimas y probabilidad
                  de precipitación.
                </p>

              </div>


              <div className="forecast-grid">

                {weather.forecast
                  .slice(1, 8)
                  .map(day => (

                    <ForecastCard
                      key={day.date}
                      forecast={day}
                    />

                  ))
                }

              </div>

            </section>

          </>

        )}

      </main>

    </>

  );

}


export default Department;