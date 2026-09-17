const departments =
  require("../config/departments");

const weatherService =
  require("../services/weatherService");

let weatherCache = null;

let cacheTimestamp = null;


const CACHE_DURATION =
  10 * 60 * 1000;


function isCacheValid() {

  if (!weatherCache || !cacheTimestamp) {
    return false;
  }

  const now = Date.now();

  return (
    now - cacheTimestamp
    <
    CACHE_DURATION
  );
}


/*
 * GET /api/weather
 *
 */
async function getAllWeather(req, res) {

  try {

    if (isCacheValid()) {

      console.log(
        "Weather returned from cache"
      );

      return res.json({
        source: "cache",
        updatedAt:
          new Date(
            cacheTimestamp
          ).toISOString(),

        departments:
          weatherCache
      });
    }


    console.log(
      "Requesting weather from Visual Crossing..."
    );

    const requests =
      departments.map(
        department =>
          weatherService
            .getWeather(department)
      );

    const results =
      await Promise.allSettled(
        requests
      );


    const weatherResults = [];

    results.forEach(
      (result, index) => {

        const department =
          departments[index];


        if (
          result.status
          ===
          "fulfilled"
        ) {

          weatherResults.push(
            result.value
          );

        } else {

          console.error(
            `Weather error for ${department.department}:`,
            result.reason
          );


          weatherResults.push({

            id:
              department.id,

            department:
              department.department,

            city:
              department.city,

            error:
              "Weather information unavailable"
          });

        }

      }
    );

    weatherCache =
      weatherResults;

    cacheTimestamp =
      Date.now();


    res.json({

      source:
        "visual-crossing",

      updatedAt:
        new Date(
          cacheTimestamp
        ).toISOString(),

      departments:
        weatherResults

    });


  } catch (error) {

    console.error(error);


    res
      .status(500)
      .json({

        error:
          "Unable to retrieve weather information"

      });

  }

}


/*
 * GET /api/weather/:departmentId
 */
async function getDepartmentWeather(
  req,
  res
) {

  try {

    const {
      departmentId
    } = req.params;


    const department =
      departments.find(
        d =>
          d.id === departmentId
      );


    if (!department) {

      return res
        .status(404)
        .json({

          error:
            "Department not found"

        });

    }

    if (isCacheValid()) {

      const cachedDepartment =
        weatherCache.find(
          d =>
            d.id === departmentId
        );


      if (
        cachedDepartment &&
        !cachedDepartment.error
      ) {

        return res.json(
          cachedDepartment
        );

      }

    }

    const weather =
      await weatherService
        .getWeather(
          department
        );


    res.json(weather);


  } catch (error) {

    console.error(error);


    res
      .status(500)
      .json({

        error:
          "Unable to retrieve weather information"

      });

  }

}


module.exports = {

  getAllWeather,

  getDepartmentWeather

};