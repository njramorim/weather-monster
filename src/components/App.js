// @flow
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme, { anotherRandomTheme } from './styles/style-theme';
import StyleGlobal from './styles/style-global';
import Header from './presentational/Header';
import CitiesSelection from './containers/CitiesSelection';

const CitiesWeather = React.lazy(() => import('./containers/CitiesWeather'));

// silly implementation just to show the theme changes
// if url has ?theme=(anything) it will change the App theme
const urlParams = new URLSearchParams(window.location.search);
const hasTheme = urlParams.get('theme');

const App = () => {
  return (
    <ThemeProvider theme={hasTheme ? anotherRandomTheme : defaultTheme}>
      <>
        <StyleGlobal />
        <div className="contentWrapper">
          <Header />
          <CitiesSelection />
          <Suspense fallback={''}>
            <CitiesWeather />
          </Suspense>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
