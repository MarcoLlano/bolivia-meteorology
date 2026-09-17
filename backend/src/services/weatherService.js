const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";


async function getWeather(department) {

  const apiKey =
    process.env.VISUAL_CROSSING_API_KEY;

  if (!apiKey) {
    throw new Error(
      "VISUAL_CROSSING_API_KEY is not configured"
    );
  }

  const location =
    `${department.latitude},${department.longitude}`;

  const params = new URLSearchParams({
    key: apiKey,
    unitGroup: "metric",
    lang: "es",
    include: "current,days",
    contentType: "json"
  });

  const url =
    `${BASE_URL}/${location}?${params}`;

  const response = await fetch(url);

  if (!response.ok) {

    const errorText =
      await response.text();

    throw new Error(
      `Visual Crossing error ${response.status}: ${errorText}`
    );
  }

  const data =
    await response.json();

  return normalizeWeather(
    department,
    data
  );
}


function normalizeWeather(
  department,
  data
) {

  const current =
    data.currentConditions;

  const today =
    data.days?.[0] || {};

  /*
   * Get next 7 days.
   */
  const forecast =
    data.days
      .slice(0, 8)
      .map(day => ({

        date:
          day.datetime,

        temperature:
          day.temp,

        maxTemperature:
          day.tempmax,

        minTemperature:
          day.tempmin,

        feelsLike:
          day.feelslike,

        humidity:
          day.humidity,

        precipitation:
          day.precip,

        precipitationProbability:
          day.precipprob,

        windSpeed:
          day.windspeed,

        windDirection:
          day.winddir,

        pressure:
          day.pressure,

        cloudCover:
          day.cloudcover,

        visibility:
          day.visibility,

        uvIndex:
          day.uvindex,

        condition:
          day.conditions,

        description:
          day.description,

        icon:
          day.icon,

        sunrise:
          day.sunrise,

        sunset:
          day.sunset
      }));


  return {

    id:
      department.id,

    department:
      department.department,

    city:
      department.city,


    coordinates: {

      latitude:
        department.latitude,

      longitude:
        department.longitude
    },


    timezone:
      data.timezone,


    current: {

      time:
        current.datetime,

      temperature:
        current.temp,

      maxTemperature:
        today.tempmax,
      
      minTemperature:
        today.tempmin,

      feelsLike:
        current.feelslike,

      humidity:
        current.humidity,

      precipitation:
        current.precip,

      precipitationProbability:
        current.precipprob,

      windSpeed:
        current.windspeed,

      windDirection:
        current.winddir,

      pressure:
        current.pressure,

      cloudCover:
        current.cloudcover,

      visibility:
        current.visibility,

      uvIndex:
        current.uvindex,

      condition:
        current.conditions,

      icon:
        current.icon,

      sunrise:
        current.sunrise,

      sunset:
        current.sunset
    },


    forecast
  };
}


module.exports = {
  getWeather
};