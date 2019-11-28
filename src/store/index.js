import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import selectedCities from './selected-cities/reducers';

const rootReducer = combineReducers({
  selectedCities
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);
