import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAddedCities } from '../../store/selected-cities/selectors';
import { removeCity } from '../../store/selected-cities/action-creators';
import WeatherCardList from '../presentational/WeatherCardList';
import StatusMessage from '../presentational/StatusMessage';

class CitiesWeather extends React.PureComponent {
  static propTypes = {
    removeCity: PropTypes.func,
    cities: PropTypes.array,
    error: PropTypes.string
  };

  onRemoveCity = cityId => this.props.removeCity(cityId);

  render() {
    const { cities, error } = this.props;

    return (
      <div>
        {Boolean(error) && <StatusMessage type="danger" message={error} />}
        <WeatherCardList cities={cities} onRemoveCity={this.onRemoveCity} />
      </div>
    );
  }
}

CitiesWeather.displayName = 'CitiesWeatherContainer';

export const mapStateToProps = state => selectAddedCities(state);
export { CitiesWeather as PureCitiesWeather };
export default connect(mapStateToProps, { removeCity })(CitiesWeather);
