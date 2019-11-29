import React from 'react';
import { shallow } from 'enzyme';
import SearchFieldContainer from '../SearchFieldContainer';
jest.useFakeTimers();

describe('<SearchFieldContainer />', () => {
  let wrapper;
  let instance;
  const event = { target: { value: 'foo' }, preventDefault: _ => _ };

  beforeEach(() => {
    const props = {
      onCitySearch: jest.fn()
    };

    wrapper = shallow(<SearchFieldContainer {...props} />);
    instance = wrapper.instance();

    wrapper.update();
    instance.forceUpdate();
  });

  describe('#showSearchResults', () => {
    it('should call `onCitySearch` with asigned value', () => {
      instance.showSearchResults('foo');
      expect(instance.props.onCitySearch).toHaveBeenCalledWith('foo');
    });
  });

  describe('#handleSubmit', () => {
    it('should call `showSearchResults` with target value', () => {
      const spy = jest.spyOn(instance, 'showSearchResults');

      instance.handleSubmit({
        target: [{ value: 'foo' }],
        preventDefault: _ => _
      });
      expect(spy).toHaveBeenCalledWith('foo');
    });
  });

  describe('#handleChange', () => {
    it('should call `showSearchResults` with target value', () => {
      const spy = jest.spyOn(instance, 'showSearchResults');

      instance.handleChange(event);
      expect(spy).toHaveBeenCalledWith('foo');
    });
  });

  describe('#handleFocus', () => {
    it('should call `showSearchResults` if there is any value', async () => {
      const spy = jest.spyOn(instance, 'showSearchResults');

      await instance.handleFocus(event);
      expect(spy).toHaveBeenCalledWith('foo');
    });

    it('should call `setTimeOut` and onCitySearch if there is no value', async () => {
      await instance.handleFocus({ target: { value: null } });
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
      jest.advanceTimersByTime(1000);
      expect(instance.props.onCitySearch).toHaveBeenCalledWith(' ', false);
    });
  });

  describe('#handleFocusOut', () => {
    it('should call `clearTimeout`', () => {
      instance.handleFocusOut();
      expect(clearTimeout).toHaveBeenCalled();
    });
  });
});
