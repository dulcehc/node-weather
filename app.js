const { argv } = require('./config/yargs');
const place = require('./place/place')
const weather = require('./weather/weather');


let getInfo = async(address) => {
  try {
    let coords = await place.getPlaceLonLat(address);
    let temp = await weather.getWeather(coords.longitude, coords.altitude);
    return `The weather at ${coords.address} is ${Math.floor(temp)} °C`;

  } catch (error) {
    return `Couldn't get the weather at "${address}"`;
  }
}

getInfo(argv.address)
  .then(resp => console.log(resp))
  .catch(err => console.log(err))