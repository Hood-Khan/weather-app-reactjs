import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");

  useEffect(()=>{
    console.log(city);
    // fe36e6c45e9b15fd212cf713c6288ee7
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe36e6c45e9b15fd212cf713c6288ee7&units=metric`)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fe36e6c45e9b15fd212cf713c6288ee7`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[city])

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900 px-4">
      <input type="text" onChange={(e)=>setCity(e.target.value)}/>
      {/* Card */}
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
          bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500
          rounded-b-[50%]
          px-6 md:px-8 pt-6 md:pt-8
          text-slate-100
        "
        >
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            Country Name
          </h1>

          <div className="flex justify-evenly items-end mt-8 md:mt-10">
            <h2 className="text-5xl md:text-6xl font-bold">26°</h2>

            <div className="text-right text-xs md:text-sm text-slate-200">
              <p>Max: 30°</p>
              <p>Min: 22°</p>
            </div>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="flex justify-center -mt-12 md:-mt-14">
          <div
            className="
            w-32 h-32 md:w-40 md:h-40
            bg-slate-900/70 backdrop-blur
            rounded-full flex items-center justify-center
            shadow-xl border border-white/10
          "
          >
            <span className="text-5xl md:text-6xl">⛅</span>
          </div>
        </div>

        {/* Weather Details */}
        <div
          className="
          mt-6 md:mt-8
          px-4 md:px-8
          grid grid-cols-2 md:grid-cols-3
          gap-4 md:gap-6
          pb-6" >
            
          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">🌬️</span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 text-slate-300 font-bold">
              Air Quality
            </p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">📈</span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 text-slate-300 font-bold">
              Pressure
            </p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">☀️</span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 text-slate-300 font-bold">
              UV Index
            </p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">💧</span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 text-slate-300 font-bold">
              Humidity
            </p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">💨</span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 text-slate-300 font-bold">
              Wind Speed
            </p>
          </div>

          <div className="flex flex-col items-center bg-slate-900 rounded-xl p-4">
            <span className="text-2xl md:text-3xl">👁️</span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 text-slate-300 font-bold">
              Visibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
