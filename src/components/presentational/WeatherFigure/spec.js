import React from 'react';
import { PureWeatherFigure as WeatherFigure } from './';
import { shallow } from 'enzyme';

describe('<WeatherFigure>', () => {
  const wrapper = shallow(<WeatherFigure />);

  it('should render a <img> and <figcaption>', () => {
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('figcaption').exists()).toBe(true);
  });
});
