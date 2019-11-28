import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from '../WeatherCard';
import withStyle from './style';

const WeatherCardList = ({ className, cities, onRemoveCity }) => {
  const selectedCities = [...cities];
  const sortByTempMax = (cityA, cityB) => cityB.tempMax - cityA.tempMax;

  return (
    <ol className={className}>
      {selectedCities.sort(sortByTempMax).map(city => (
        <li key={city.cityId}>
          <WeatherCard weather={city} onClose={onRemoveCity} />
        </li>
      ))}
    </ol>
  );
};

WeatherCardList.propTypes = {
  className: PropTypes.string,
  cities: PropTypes.array(
    PropTypes.shape({ cityId: PropTypes.number, tempMax: PropTypes.number })
  ),
  onRemoveCity: PropTypes.func
};

WeatherCardList.defaultProps = {
  onRemoveCity: _ => _
};

WeatherCardList.displayName = 'WeatherCardList';

export default withStyle(WeatherCardList);
