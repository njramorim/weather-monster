import React from 'react';
import { PureHeader as Header } from './';
import { shallowWithTheme } from '../../../../fixtures/style-theme';

describe('<Header>', () => {
  const wrapper = shallowWithTheme(<Header />);

  it('should render a <h1>', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('should have a <header>', () => {
    expect(wrapper.find('header').exists()).toBe(true);
  });
});
