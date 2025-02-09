import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather"
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_KEY


const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const getWeather = (lat, lon) => {
    const req = axios.get(weatherUrl + `?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    return req.then(response => response.data)
}

export default {getAll, getWeather};