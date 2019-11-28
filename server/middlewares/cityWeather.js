const axios = require('axios');
const API_KEY = '7bf5fd050eb3af480dbc0f935341f937';
const API_HOST = 'https://api.openweathermap.org';

module.exports = async ({ query: { id, coords, country } }) => {
  const API_QUERY = `?id=${id}&units=metric&APPID=${API_KEY}`;
  const API_URL = `${API_HOST}/data/2.5/weather${API_QUERY}`;

  const { data } = await axios.get(API_URL);
  const {
    weather: [{ description, icon }],
    main: { temp_min, temp_max },
    id: cityId,
    name
  } = data;

  const result = {
    cityId,
    name,
    description,
    icon,
    tempMin: Math.round(temp_min),
    tempMax: Math.round(temp_max),
    coords: coords.split(',').map(Number),
    country
  };

  console.log('[cityWeather middleware]: ', result);
  return result;
};
