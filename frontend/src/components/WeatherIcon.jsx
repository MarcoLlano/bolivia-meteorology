function WeatherIcon({ icon }) {

  const icons = {

    "clear-day": "☀️",

    "clear-night": "🌙",

    "partly-cloudy-day": "🌤️",

    "partly-cloudy-night": "☁️",

    "cloudy": "☁️",

    "rain": "🌧️",

    "showers-day": "🌦️",

    "showers-night": "🌧️",

    "thunder-rain": "⛈️",

    "thunder-showers-day": "⛈️",

    "thunder-showers-night": "⛈️",

    "snow": "❄️",

    "fog": "🌫️",

    "wind": "💨"
  };


  const weatherIcon =
    icons[icon] || "🌤️";


  return (
    <div className="weather-icon">
      {weatherIcon}
    </div>
  );
}


export default WeatherIcon;