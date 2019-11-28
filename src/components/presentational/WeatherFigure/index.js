// @flow
import React from 'react';
import withStyle from './style';
import { WEATHER_ICON } from '../../../lib/urls';

type WeatherFigureProps = {
  icon: string,
  desc: string,
  className: string
};

const WeatherFigure = (props: WeatherFigureProps) => {
  const { icon, desc, className } = props;

  return (
    <figure className={className}>
      <img src={WEATHER_ICON(icon)} alt={desc} title={desc} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
};

WeatherFigure.displayName = 'WeatherFigure';

export default withStyle(WeatherFigure);
