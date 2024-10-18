"use client";

import { useEffect, useState } from 'react';

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Mexico&units=metric&appid=396885b1257bb1c05bd14b47a1dc85ea&lang=es')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.main && data.weather) {
          setWeather(data);
        } else {
          setError('Datos meteorológicos no válidos recibidos');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudo obtener los datos del clima');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-blue-500">Cargando clima...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Clima en {weather.name} (open wheater)</h2>
      <p className="text-lg">Temperatura: {weather.main.temp}°C</p>
      <p className="text-lg">Condición: {weather.weather[0].description}</p>
      <p className="text-lg">Humedad: {weather.main.humidity}%</p>
      <p className="text-lg">Velocidad del viento: {weather.wind.speed} m/s</p>
      <p className="text-lg">Presión: {weather.main.pressure} hPa</p>
    </div>
  );
};

export default WeatherComponent;
