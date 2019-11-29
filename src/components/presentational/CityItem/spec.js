import React from 'react';
import { PureCityItem } from './';
import { mountWithTheme } from '../../../../fixtures/style-theme';
import cities from '../../../../fixtures/citiesList';

describe('<CityItem>', () => {
  const wrapper = mountWithTheme(
    <PureCityItem city={cities[0]} isChecked={false} />
  );

  it('should render a .description class and ActiveButton', () => {
    expect(wrapper.find('.description').exists()).toBe(true);
    expect(wrapper.find('ActiveButton').exists()).toBe(true);
  });

  it('should have a default value for prop onCityAdd', () => {
    expect(wrapper.props().onCityAdd('foo')).toBe('foo');
  });

  it('should trigger prop onCityAdd when ActiveButton value changes', () => {
    const wrapper = mountWithTheme(
      <PureCityItem city={cities[0]} isChecked={false} onCityAdd={jest.fn()} />
    );
    expect(wrapper.props().onCityAdd).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('change', { target: { value: '7' } });
    expect(wrapper.props().onCityAdd).toHaveBeenCalled();
  });
});
