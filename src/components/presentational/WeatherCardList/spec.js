import React from 'react';
import { PureWeatherCardList as WeatherCardList } from './';
import { mountWithTheme } from '../../../../fixtures/style-theme';
import cityWeatherList from '../../../../fixtures/cityWeatherList';

describe('<WeatherCardList>', () => {
  const wrapper = mountWithTheme(<WeatherCardList cities={cityWeatherList} />);

  it('should render a <ol> tag', () => {
    expect(wrapper.find('ol').exists()).toBe(true);
  });

  it('should have a default value for prop onRemoveCity', () => {
    expect(wrapper.props().onRemoveCity('foo')).toBe('foo');
  });

  it('should render the hottest city first', () => {
    const getTempMax = el => el.props().weather.tempMax;
    const hot = getTempMax(wrapper.find('WeatherCard').first());
    const notSoHot = getTempMax(wrapper.find('WeatherCard').last());

    expect(hot > notSoHot).toBe(true);
  });
});
