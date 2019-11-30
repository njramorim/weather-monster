const cities = require('all-the-cities');

const normalize = string =>
  string
    .normalize('NFD')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

module.exports = ({ query: { search } }) => {
  const maxSize = 30;
  const minPopulation = 5e6; //5M

  const condition = city => {
    return search
      ? normalize(city.name).match(normalize(search))
      : city.population > minPopulation;
  };

  const reduceCities = (acc, city) => {
    if (condition(city) && acc.length < maxSize) {
      const {
        cityId,
        name,
        country,
        loc: {
          coordinates: [long, lat]
        }
      } = city;

      acc.push({ cityId, name, country, coordinates: [lat, long] });
    }
    return acc;
  };

  const result = cities.reduce(reduceCities, []);
  return result;
};
