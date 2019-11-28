// @flow
import React from 'react';
import withStyle from './style';
import HeadLine from '../HeadLine';
import SimpleText from '../SimpleText';
import CloseButton from '../CloseButton';
import WeatherFigure from '../WeatherFigure';

export type WeatherCardProps = {
  className: string,
  weather: {
    name: string,
    tempMax: string,
    tempMin: string,
    icon: string,
    description: string,
    cityId: string,
    coords: [number, number],
    country: string
  },
  onClose: Function
};

const WeatherCard = (props: WeatherCardProps) => {
  const { className, onClose, weather } = props;
  const {
    name,
    tempMax,
    tempMin,
    icon,
    cityId,
    description: desc,
    coords,
    country
  } = weather;

  const mapsHost = 'https://www.google.com/maps/place';
  const mapsUrl = `${mapsHost}/${coords[0]}+${coords[1]}`;

  return (
    <article className={className}>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`check ${name} - ${country} in the map`}
        className="cityLink"
      >
        <HeadLine tag="h1" text={name} />
        <span className="country">{country}➚</span>
      </a>
      <div className="image">
        <WeatherFigure icon={icon} desc={desc} />
      </div>

      <ol className="temp">
        <li className="tempItem">
          <div className="tempMax">
            <HeadLine tag="h2" text={tempMax} />
            °C
          </div>
          <SimpleText text="max" />
        </li>
        <li className="tempItem">
          <div className="tempMin">
            {'   '}
            <HeadLine tag="h3" text={tempMin} />
            °C
          </div>
          <SimpleText text="min" />
        </li>
      </ol>

      <aside className="close">
        <CloseButton onClick={onClose} cityId={cityId} />
      </aside>
    </article>
  );
};

WeatherCard.displayName = 'WeatherCard';

export default withStyle(WeatherCard);
