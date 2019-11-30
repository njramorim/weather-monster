import axios from 'axios';
const { API_HOST } = require('../../../config/settings');

const callWeatherApi = async (id, coords, country) =>
  await axios.get(
    `${API_HOST}/weather?id=${id}&coords=${coords}&country=${country}`
  );

export const addCity = payload => ({ type: 'ADD_CITY', payload });

export const removeCity = payload => ({ type: 'REMOVE_CITY', payload });

export const addCityError = () => ({ type: 'ADD_CITY_ERROR' });

export const loadingAddCity = () => ({ type: 'ADD_CITY_LOADING' });

export const fetchAddCity = (cityId, coords, country) => async dispatch => {
  dispatch(loadingAddCity());
  try {
    const { data } = await callWeatherApi(cityId, coords, country);
    dispatch(addCity(data));
  } catch (err) {
    dispatch(addCityError(err));
  }
};
