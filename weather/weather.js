const axios = require('axios');
const API_KEY = '';

const getWeather = async(long, lat) => {
  const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
  let response = await axios.get(URL);

  return response.data.main.temp;

}

module.exports = {
  getWeather
}