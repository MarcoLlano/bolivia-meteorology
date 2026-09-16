import {
  useEffect,
  useState
} from "react";


import Header
  from "../components/Header";

import WeatherCard
  from "../components/WeatherCard";

import {
  getAllWeather
} from "../services/weatherService";


function Home() {

  const [
    departments,
    setDepartments
  ] = useState([]);


  const [
    loading,
    setLoading
  ] = useState(true);


  const [
    error,
    setError
  ] = useState(null);


  const [
    updatedAt,
    setUpdatedAt
  ] = useState(null);


  useEffect(() => {

    loadWeather();

  }, []);


  async function loadWeather() {

    try {

      setLoading(true);

      setError(null);


      const data =
        await getAllWeather();


      setDepartments(
        data.departments
      );


      setUpdatedAt(
        data.updatedAt
      );


    } catch (error) {

      console.error(error);

      setError(
        "No se pudo cargar la información meteorológica."
      );


    } finally {

      setLoading(false);

    }

  }


  return (

    <>

      <Header />


      <main className="container">

        <div className="page-title">

          <div>

            <h2>
              Clima actual
            </h2>

            <p>
              Consulta las condiciones
              meteorológicas de Bolivia.
            </p>

          </div>


          <button
            className="refresh-button"
            onClick={loadWeather}
          >
            Actualizar
          </button>

        </div>


        {updatedAt && (

          <div className="updated">

            Actualizado:

            {" "}

            {new Date(
              updatedAt
            ).toLocaleString(
              "es-BO"
            )}

          </div>

        )}


        {loading && (

          <div className="message">

            Cargando información
            meteorológica...

          </div>

        )}


        {error && (

          <div className="error">

            {error}

          </div>

        )}


        {!loading &&
          !error && (

          <div className="weather-grid">

            {departments.map(
              weather => (

                weather.error

                  ? (

                    <div
                      className="weather-card error-card"
                      key={weather.id}
                    >

                      <h2>
                        {weather.department}
                      </h2>

                      <p>
                        Información no disponible
                      </p>

                    </div>

                  )

                  : (

                    <WeatherCard
                      key={weather.id}
                      weather={weather}
                    />

                  )

              )
            )}

          </div>

        )}

      </main>

    </>

  );
}


export default Home;