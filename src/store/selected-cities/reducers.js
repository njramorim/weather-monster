import { combineReducers } from 'redux';
import { ADD_CITY_ERROR } from '../../lib/messages';

export const cities = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CITY':
      return [...state, { ...payload }];
    case 'REMOVE_CITY':
      return state.filter(city => city.cityId !== payload);
    default:
      return state;
  }
};

export const loading = (state = false, { type }) => {
  switch (type) {
    case 'ADD_CITY_LOADING':
      return true;
    case 'ADD_CITY':
    case 'ADD_CITY_ERROR':
      return false;
    default:
      return state;
  }
};

export const error = (state = null, { type }) => {
  switch (type) {
    case 'ADD_CITY_ERROR':
      return ADD_CITY_ERROR;
    case 'ADD_CITY_LOADING':
      return null;
    default:
      return state;
  }
};

export default combineReducers({ cities, loading, error });
