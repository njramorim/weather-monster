import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { selectAddedCitiesId } from '../../store/selected-cities/selectors';
import { fetchAddCity } from '../../store/selected-cities/action-creators';
import Wrapper from '../presentational/Wrapper';
import SearchField from '../presentational/SearchField';
const CitiesList = React.lazy(() => import('../presentational/CitiesList'));

const searchAPI = value => axios.get(`/api/cities?search=${value}`);
const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

class CitiesSelection extends React.PureComponent {
  static propTypes = {
    fetchAddCity: PropTypes.func,
    citiesId: PropTypes.arrayOf(PropTypes.number),
    loading: PropTypes.bool
  };

  state = {
    matchedCities: [],
    showResultBox: false
  };

  setWrapperRef = node => (this.wrapperRef = node);

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  fetchCities = async (value, abortEmpty = true) => {
    const abort = abortEmpty && (!value || !value.trim());
    if (abort) return;

    const { data } = await searchAPIDebounced(value.trim());
    this.setState({
      showResultBox: true,
      matchedCities: data
    });
  };

  handleAdd = async cityId => {
    const city = this.state.matchedCities.find(c => c.cityId === cityId);
    const { coordinates, country } = city;

    await this.props.fetchAddCity(cityId, coordinates, country);
    this.handleClose();
  };

  handleClose = () => {
    this.setState({
      showResultBox: false,
      matchedCities: []
    });
  };

  handleClickOutside = ({ target }) => {
    const shouldClose =
      this.state.showResultBox &&
      this.wrapperRef &&
      !this.wrapperRef.contains(target);

    if (shouldClose) this.handleClose();
  };

  render() {
    const { showResultBox, matchedCities } = this.state;
    const { citiesId, loading } = this.props;

    return (
      <div ref={this.setWrapperRef}>
        <Wrapper>
          <SearchField onCitySearch={this.fetchCities} />
          <Suspense fallback={''}>
            <CitiesList
              isLoading={loading}
              isOpen={showResultBox}
              cities={matchedCities}
              selectedCitiesId={citiesId}
              onCityAdd={this.handleAdd}
              onCloseList={this.handleClose}
            />
          </Suspense>
        </Wrapper>
      </div>
    );
  }
}

CitiesSelection.displayName = 'CitiesSelectionContainer';

const mapStateToProps = state => selectAddedCitiesId(state);

export default connect(mapStateToProps, { fetchAddCity })(CitiesSelection);
