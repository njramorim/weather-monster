import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';
import { WEATHER_ICON } from '../../../lib/urls';

const WeatherFigure = ({ icon, desc, className }) => (
  <figure className={className}>
    <img src={WEATHER_ICON(icon)} alt={desc} title={desc} />
    <figcaption>{desc}</figcaption>
  </figure>
);

WeatherFigure.propTypes = {
  icon: PropTypes.string,
  desc: PropTypes.string,
  className: PropTypes.string
};

WeatherFigure.displayName = 'WeatherFigure';

export { WeatherFigure as PureWeatherFigure };
export default withStyle(WeatherFigure);
