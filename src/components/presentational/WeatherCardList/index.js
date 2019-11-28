// @flow
import React from 'react';
import WeatherCard from '../WeatherCard';
import withStyle from './style';

type WeatherCardListProps = {
  className: string,
  cities: [
    {
      cityId: number,
      tempMax: number
    }
  ],
  onRemoveCity: Function
};

const WeatherCardList = (props: WeatherCardListProps) => {
  const { className, cities, onRemoveCity } = props;
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

WeatherCardList.defaultProps = {
  onRemoveCity: _ => _
};

WeatherCardList.displayName = 'WeatherCardList';

export default withStyle(WeatherCardList);
