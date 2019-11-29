import React from 'react';
import { shallow } from 'enzyme';
import {
  PureCitiesWeather as CitiesWeather,
  mapStateToProps
} from '../CitiesWeather';
import { mountWithTheme } from '../../../../fixtures/style-theme';
import citiesList from '../../../../fixtures/cityWeatherList';

describe('<CitiesWeather />', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    const props = {
      removeCity: jest.fn(),
      cities: citiesList,
      error: null
    };

    wrapper = shallow(<CitiesWeather {...props} />);
    instance = wrapper.instance();

    wrapper.update();
    instance.forceUpdate();
  });

  describe('#onRemoveCity', () => {
    it('should call `removeCity` with asigned value', () => {
      instance.onRemoveCity(citiesList[0].cityId);
      expect(instance.props.removeCity).toHaveBeenCalledWith(
        citiesList[0].cityId
      );
    });
  });

  describe('render', () => {
    const themedWrapper = mountWithTheme(<CitiesWeather cities={citiesList} />);
    it('should not render StatusMessage with error', () => {
      expect(themedWrapper.find('StatusMessage').exists()).toBe(false);
    });

    it('should render StatusMessage with error', () => {
      themedWrapper.setProps({ error: 'foo' });
      expect(themedWrapper.find('StatusMessage').exists()).toBe(true);
    });
  });

  describe('#mapStateToProps', () => {
    it('should map state to props', () => {
      const result = mapStateToProps({
        selectedCities: {
          cities: citiesList,
          loading: false,
          error: null
        }
      });
      expect(result).toHaveProperty('cities');
    });
  });
});
