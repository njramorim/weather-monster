import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import selectedCities from './selected-cities/reducers';

const rootReducer = combineReducers({
  selectedCities
});

export default createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);
