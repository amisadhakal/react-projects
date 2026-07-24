import {useState} from "react";
const WeatherApp = () => {
const[city,setCity] = useState("");
const[weather,setWeather] = useState(null);
const getWeather = async () => {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`;
const response = await fetch(url);
const data = await response.json();
console.log(data);
setWeather(data);
}
return(
<>
<h1> Weather App </h1>
<input value={city} onChange={(event)=>{
setCity(event.target.value)}}/>
<button onClick={getWeather}>Search</button>

{weather && weather.main && (
<>
<h2>{weather.name}</h2>
<h3>Temperature: {weather.main.temp}°C</h3>
<h4>Humidity: {weather.main.humidity}%</h4>
<h5>Wind Speed: {weather.wind.speed} m/s</h5>
</>
)
}
</>
);
};
export default WeatherApp;