import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import {
  PureCitiesSelection as CitiesSelection,
  mapStateToProps
} from '../CitiesSelection';
import { mountWithTheme } from '../../../../fixtures/style-theme';
import citiesList from '../../../../fixtures/citiesList';

const map = {};
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('<CitiesSelection />', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    const props = {
      fetchAddCity: jest.fn(),
      citiesId: [1, 2, 333],
      loading: false
    };

    wrapper = shallow(<CitiesSelection {...props} />);
    instance = wrapper.instance();

    wrapper.update();
    instance.forceUpdate();
  });

  describe('#componentDidMount', () => {
    it('should call `addEventListener`', () => {
      instance.componentDidMount();
      expect(document.addEventListener).toHaveBeenCalledWith(
        'mousedown',
        instance.handleClickOutside,
        false
      );
    });
  });

  describe('#componentWillUnMount', () => {
    it('should call `addEventListener`', () => {
      instance.componentWillUnmount();
      expect(document.addEventListener).toHaveBeenCalledWith(
        'mousedown',
        instance.handleClickOutside,
        false
      );
    });
  });

  describe('#fetchCities', () => {
    it('should abort without any trimmed value if abortEmpty is true', () => {
      instance.fetchCities('   ');
      instance.setState = jest.fn();
      expect(instance.setState).toHaveBeenCalledTimes(0);
    });

    it('should not abort without any trimmed value if abortEmpty is false', async () => {
      jest.spyOn(axios, 'get').mockReturnValue({});
      instance.setState = jest.fn();
      await instance.fetchCities('   ', false);
      expect(instance.setState).toHaveBeenCalledTimes(1);
    });
  });

  describe('#handleAdd', () => {
    it('should call fetchAddCity', async () => {
      instance.setState({
        matchedCities: citiesList
      });
      await instance.handleAdd(1);
      expect(instance.props.fetchAddCity).toHaveBeenCalled();
    });
  });

  describe('#handleClickOutside', () => {
    it('should not call `handleClose` if showResultBox is false', () => {
      instance.setState({
        showResultBox: false
      });
      instance.handleClose = jest.fn();
      instance.handleClickOutside({ target: null });
      expect(instance.handleClose).toHaveBeenCalledTimes(0);
    });

    it('should  call `handleClose` if showResultBox is true', () => {
      const themedWrapper = mountWithTheme(
        <div>
          <CitiesSelection citiesId={[1, 2, 3]} />
          <aside className="outside">foo</aside>
        </div>
      );
      const themedInstance = themedWrapper.find(CitiesSelection).instance();
      themedInstance.setState({
        showResultBox: true
      });
      themedInstance.wrapperRef = themedWrapper.find(CitiesSelection);
      themedInstance.handleClose = jest.fn();
      themedInstance.handleClickOutside({
        target: themedWrapper.find('.outside')
      });
      expect(themedInstance.handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('#mapStateToProps', () => {
    it('should map state to props', () => {
      const result = mapStateToProps({
        selectedCities: {
          cities: citiesList,
          loading: false
        }
      });
      expect(result).toHaveProperty('citiesId');
    });
  });
});
