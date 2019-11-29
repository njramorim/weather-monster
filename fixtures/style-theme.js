/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, shallow } from 'enzyme';
import styleTheme from '../src/components/styles/style-theme';

const themeMock = { ...styleTheme };

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={themeMock}>{children}</ThemeProvider>
);

export const shallowWithTheme = tree =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper
  });

export const mountWithTheme = tree =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper
  });
