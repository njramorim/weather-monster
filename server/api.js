const apiRouter = require('express').Router();
const filterCity = require('./middlewares/filterCity');
const cityWeather = require('./middlewares/cityWeather');

apiRouter.get('/api/cities', (req, res) => {
  const cities = filterCity(req);
  res.json(cities);
});

apiRouter.get('/api/weather', async (req, res) => {
  try {
    const data = await cityWeather(req);
    res.json(data);
  } catch ({ response, statusText }) {
    res.status(response.status).send(statusText);
  }
});

module.exports = apiRouter;
