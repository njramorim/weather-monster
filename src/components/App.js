// @flow
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/style-theme';
import StyleGlobal from './styles/style-global';
import Header from './presentational/Header';
import CitiesSelection from './containers/CitiesSelection';

const CitiesWeather = React.lazy(() => import('./containers/CitiesWeather'));

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
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
