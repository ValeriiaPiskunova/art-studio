import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./PhotographyWeatherWidget.scss";

const API_KEY_WEATHER = "733309b45a135040615686c0a57c15f7";
const API_KEY_PEXELS =
  "w3XwNFyaJgAnh5lqn4CAHftCADEAlgjbrQC49n60TryQVwzZLuw6e1UI";
const CITY = "Barcelona";

const PhotographyWeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [photo, setPhoto] = useState("");
  const [tips, setTips] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        CITY
      )}&appid=${API_KEY_WEATHER}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data fetch failed");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        updateTipsAndPhoto(data.weather[0].main);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Failed to fetch weather data. Please check your API key and city name."
        );
      });
  }, []);

  const updateTipsAndPhoto = (weatherCondition) => {
    let tips, photoQuery;

    switch (weatherCondition) {
      case "Clear":
        tips =
          "Great lighting conditions for outdoor photography. Try capturing landscapes or portraits with bright, natural light.";
        photoQuery = "beach, sunny, fashion, portrait, model";
        break;
      case "Rain":
        tips =
          "Use waterproof gear and capture reflections on wet surfaces for unique photos.";
        photoQuery = "rain, rainy fashion, model shoot";
        break;
      case "Clouds":
        tips =
          "Soft, diffused light is perfect for portraits and moodier scenes.";
        photoQuery = "clouds, cloudy fashion, portrait";
        break;
      case "Snow":
        tips =
          "Adjust your exposure to handle bright snow and capture the serene beauty of winter.";
        photoQuery = "snow, snowy fashion, model shoot";
        break;
      default:
        tips =
          "Whether it's sunny, rainy, else, you can capture great pictures by experimenting with your surroundings and adjusting your techniques.";
        photoQuery = "photo shoot, modeling, fashion";
    }

    fetch(
      `https://api.pexels.com/v1/search?query=${photoQuery}&per_page=1`,
      {
        headers: {
          Authorization: API_KEY_PEXELS,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (
          data &&
          data.photos &&
          data.photos.length > 0 &&
          data.photos[0].src &&
          data.photos[0].src.original
        ) {
          setPhoto(data.photos[0].src.original);
        } else {
          setPhoto("");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(
          "Failed to fetch photos. Please check your Pexels API key."
        );
      });

    setTips(tips);
  };

  return (
    <motion.div
      className="weather__widget"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {error && <p className="error-message">{error}</p>}
      {weather && !error && (
        <div className="weather__content">
          <h2 className="weather__heading">
            Current Weather: {weather.weather[0].main}
          </h2>
          <p className="weather__tips">{tips}</p>
          {photo ? (
            <img
              src={photo}
              alt="Weather related photography"
              className="weather__photo"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PhotographyWeatherWidget;
