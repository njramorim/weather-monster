import React from 'react';
import { PureWeatherCard as WeatherCard } from './';
import { mountWithTheme } from '../../../../fixtures/style-theme';
import weather from '../../../../fixtures/cityWeather';
import { MAPS_URL } from '../../../lib/urls';

describe('<WeatherCard>', () => {
  const wrapper = mountWithTheme(<WeatherCard weather={weather} />);

  it('should render an <a.cityLink>  with the correct href', () => {
    expect(wrapper.find('a.cityLink').props().href).toBe(
      MAPS_URL(weather.coords[0], weather.coords[1])
    );
  });

  it('should render a <h1>  with the correct city name', () => {
    expect(wrapper.find('h1').text()).toBe(weather.name);
  });

  it('should render a <span.country>  with the correct country name', () => {
    expect(
      wrapper
        .find('span.country')
        .text()
        .includes(weather.country)
    ).toBe(true);
  });

  it('should render an <img>  with the correct icon ', () => {
    expect(
      wrapper
        .find('.image img')
        .props()
        .src.includes(weather.icon)
    ).toBe(true);
  });

  it('should render an .tempMax  with the correct tempMax ', () => {
    expect(wrapper.find('.tempMax h2').text()).toEqual(`${weather.tempMax}`);
  });

  it('should trigger prop onClose when CloseButton is clicked', () => {
    const wrapper = mountWithTheme(
      <WeatherCard weather={weather} onClose={jest.fn()} />
    );
    expect(wrapper.props().onClose).toHaveBeenCalledTimes(0);
    wrapper.find('button').simulate('click', { target: { value: '7' } });
    expect(wrapper.props().onClose).toHaveBeenCalled();
  });
});
