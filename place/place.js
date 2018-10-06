const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: '' });

const getPlaceLonLat = async(address) => {
  let response = await geocodingClient
  .forwardGeocode({
    query: address,
    limit: 1
  })
  .send();

  if (response.body.features.length === 0) {
    throw new Error(`No results for "${address}"`);
  }

  const match = response.body.features[0];
  const coords = match.center;

  return {
    address: match.place_name,
    longitude: coords[0],
    altitude: coords[1]
  }
}


module.exports = {
  getPlaceLonLat
}
