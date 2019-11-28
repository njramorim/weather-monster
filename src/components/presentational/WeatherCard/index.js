import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';
import HeadLine from '../HeadLine';
import SimpleText from '../SimpleText';
import CloseButton from '../CloseButton';
import WeatherFigure from '../WeatherFigure';

const WeatherCard = ({ className, onClose, weather }) => {
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

WeatherCard.propTypes = {
  className: PropTypes.string,
  weather: PropTypes.shape({
    name: PropTypes.string,
    tempMax: PropTypes.string,
    tempMin: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string,
    cityId: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    country: PropTypes.string
  }),
  onClose: PropTypes.func
};

WeatherCard.displayName = 'WeatherCard';

export default withStyle(WeatherCard);
