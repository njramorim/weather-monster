// @flow
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/';
import App from './components/App';

const root = document.getElementById('root');
const AppWrapper = hot(App);
const Init = (
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

if (root) render(Init, root);
