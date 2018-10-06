const argv = require('yargs').options({
  address: {
    alias: 'a',
    desc: 'city address for the weather if the city',
    demand: true
  }
}).argv;


module.exports = {
  argv
}