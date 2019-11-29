import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';
import ActiveButton from '../ActiveButton';

const CityItem = ({
  className,
  city: { name, country, cityId },
  isChecked,
  onCityAdd
}) => {
  return (
    <div className={className}>
      <dl className="description">
        <dt>name :</dt>
        <dd className="name">{name}</dd>
        <dt>country:</dt>
        <dd className="country">({country})</dd>
        <dt>position:</dt>
      </dl>
      <ActiveButton
        id={cityId}
        onChange={({ target }) => onCityAdd(Number(target.value))}
        isChecked={isChecked}
      />
    </div>
  );
};

CityItem.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    cityId: PropTypes.number
  }),
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  onCityAdd: PropTypes.func
};

CityItem.defaultProps = {
  onCityAdd: _ => _
};

CityItem.displayName = 'CityItem';
export { CityItem as PureCityItem };
export default withStyle(CityItem);
