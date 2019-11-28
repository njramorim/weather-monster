// @flow
import React from 'react';
import withStyle from './style';
import ActiveButton from '../ActiveButton';

type CityItemProps = {
  city: {
    name: string,
    country: string,
    cityId: number
  },
  className: string,
  isChecked: boolean,
  onCityAdd: Function
};

const CityItem = (props: CityItemProps) => {
  const {
    className,
    city: { name, country, cityId },
    isChecked,
    onCityAdd
  } = props;

  const handleChange = ({ target }) => onCityAdd(Number(target.value));

  return (
    <div className={className}>
      <dl className="description">
        <dt>name :</dt>
        <dd className="name">{name}</dd>
        <dt>country:</dt>
        <dd className="country">({country})</dd>
        <dt>position:</dt>
      </dl>
      <ActiveButton id={cityId} onChange={handleChange} isChecked={isChecked} />
    </div>
  );
};

CityItem.defaultProps = {
  onCityAdd: _ => _
};

CityItem.displayName = 'CityItem';

export default withStyle(CityItem);
