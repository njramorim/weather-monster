// @flow
import React from 'react';
import withStyle from './style';
import CityItem from '../CityItem';

type CitiesListProps = {
  className: string,
  cities: [
    {
      name: string,
      country: string,
      cityId: number
    }
  ],
  selectedCitiesId: [number],
  isOpen: boolean,
  isLoading: boolean,
  onCityAdd: number => void,
  onCloseList: Function
};

const CitiesList = (props: CitiesListProps) => {
  const { className, cities, onCityAdd, selectedCitiesId } = props;
  const isChecked = ({ cityId }) => selectedCitiesId.some(id => id === cityId);

  return (
    <section className={className}>
      <h1>Cities</h1>
      <div className="listWrapper">
        <ul className="list">
          {cities.map(city => (
            <li key={city.cityId}>
              <CityItem
                city={city}
                onCityAdd={onCityAdd}
                isChecked={isChecked(city)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

CitiesList.defaultProps = {
  cities: [],
  onCityAdd: () => null
};

CitiesList.displayName = 'CitiesList';

export default withStyle(CitiesList);
