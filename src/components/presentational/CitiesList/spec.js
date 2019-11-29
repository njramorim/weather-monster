import React from 'react';
import { PureCitiesList } from './';
import { mountWithTheme } from '../../../../fixtures/style-theme';
import cities from '../../../../fixtures/citiesList';

describe('<CitiesList>', () => {
  const wrapper = mountWithTheme(
    <PureCitiesList cities={cities} selectedCitiesId={[cities[0].cityId]} />
  );

  it('should render a <ul> tag with .list class', () => {
    expect(wrapper.find('ul.list').exists()).toBe(true);
  });

  it('should have the first <li> item already checked', () => {
    expect(
      wrapper
        .find('CityItem')
        .first()
        .props().isChecked
    ).toBe(true);
  });

  it('should have the last <li> item not checked', () => {
    expect(
      wrapper
        .find('CityItem')
        .last()
        .props().isChecked
    ).toBe(false);
  });

  it('should have a default value for prop onCityAdd', () => {
    expect(wrapper.props().onCityAdd('foo')).toBe('foo');
  });
});
