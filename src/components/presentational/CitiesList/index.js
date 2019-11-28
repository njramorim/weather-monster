import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';
import CityItem from '../CityItem';

const CitiesList = ({ className, cities, onCityAdd, selectedCitiesId }) => {
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

CitiesList.propTypes = {
  className: PropTypes.string,
  cities: PropTypes.array(
    PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string,
      cityId: PropTypes.number
    })
  ),
  selectedCitiesId: PropTypes.arrayOf(PropTypes.number),
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  onCityAdd: PropTypes.func,
  onCloseList: PropTypes.func
};

CitiesList.defaultProps = {
  cities: [],
  onCityAdd: _ => _
};

CitiesList.displayName = 'CitiesList';

export default withStyle(CitiesList);
