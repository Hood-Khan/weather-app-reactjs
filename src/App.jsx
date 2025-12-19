import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("Islamabad");

  const [temp, setTemp] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [country, setCountry] = useState("");
  const [cityName, setCityName] = useState("");
  const [pressure, setPressure] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [clouds, setClouds] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fe36e6c45e9b15fd212cf713c6288ee7`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);

        setTemp(data.main.temp);
        setTempMax(data.main.temp_max);
        setCityName(data.name);
        setTempMin(data.main.temp_min);
        setHumidity(data.main.humidity);
        setPressure(data.main.pressure);
        setWindSpeed(data.wind.speed);
        setVisibility(data.visibility / 1000);
        setCountry(data.sys.country);
        setCountry(data.sys.country);
        setFeelsLike(response.data.main.feels_like);
        setClouds(response.data.clouds.all);

        const iconCode = data.weather[0].icon

        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        setWeatherIcon(iconUrl);
      })
      .catch((error) => console.log(error));
  }, [city]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-5">
      {/* Styled Input */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="mb-4 w-full max-w-[600px] px-4 py-2 rounded-xl
        bg-slate-800 text-white placeholder-slate-400
        focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter city name"
      />

      {/* Card  */}
      <div
        className="
          relative bg-slate-800
          w-full max-w-[600px]
          h-auto
          rounded-3xl shadow-2xl
        "
      >
        {/* Header */}
        <div
          className="
            w-full h-[200px] md:h-[220px]
            bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400
            rounded-b-[50%]
            px-6 md:px-8 pt-6 md:pt-8
            text-slate-100
          "
        >
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            {cityName}, {country}
          </h1>

          <div className="flex justify-evenly items-end mt-8 md:mt-10">
            <h2 className="text-5xl md:text-6xl font-bold">{temp}°</h2>

            <div className="text-right text-xs md:text-sm text-slate-200">
              <p>Max: {tempMax}°</p>
              <p>Min: {tempMin}°</p>
            </div>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="flex justify-center mt-4 md:mt-4">
          {/* <div
            className="
              w-32 h-32 md:w-40 md:h-40
              bg-slate-900/70 backdrop-blur
              rounded-full flex items-center justify-center
              shadow-xl border border-white/10
            "
          > */}
          <div
            className="
              w-32 h-32 md:w-40 md:h-40
              flex items-center justify-center
            "
          >
            <span className="text-5xl md:text-6xl">{weatherIcon ? <img src={weatherIcon} alt="Weather Icon" className="w-32 h-32" /> : '⛅'}</span>
          </div>
        </div>

        {/* Weather Details (UNCHANGED layout) */}
        <div
          className="
            mt-6 md:mt-8
            px-4 md:px-8
            grid grid-cols-2 md:grid-cols-3
            gap-4 md:gap-6
            pb-6
          "
        >
          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">📈</span>
            <p className="text-white">{pressure} hPa</p>
            <p className="text-slate-300 font-bold">Pressure</p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">💧</span>
            <p className="text-white">{humidity}%</p>
            <p className="text-slate-300 font-bold">Humidity</p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">💨</span>
            <p className="text-white">{windSpeed} m/s</p>
            <p className="text-slate-300 font-bold">Wind Speed</p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">👁️</span>
            <p className="text-white">{visibility} km</p>
            <p className="text-slate-300 font-bold">Visibility</p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">🌡️</span>
            <p className="text-white">{feelsLike}°</p>
            <p className="text-slate-300 font-bold">Feels Like</p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">☁️</span>
            <p className="text-white">{clouds}%</p>
            <p className="text-slate-300 font-bold">Cloudiness</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
