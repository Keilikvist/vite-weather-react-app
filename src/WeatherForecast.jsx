import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].time}</div>
            <img src={props.iconUrl} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {forecast[0].temperature.maximum}º
              </span>
              <span className="WeatherForecast-temperature-min">
                {forecast[0].temperature.minimum}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fb994d97ce3o8893t14c0f33a0f08b79";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
