import { cities, loading, error } from '../reducers';
import { ADD_CITY_ERROR } from '../../../lib/messages';

describe('selected-cities reducer', () => {
  describe('cities', () => {
    it('should return the initial state by default', () => {
      expect(cities('foo', {})).toEqual('foo');
    });

    it('should return the payload for the `ADD_CITY` action', () => {
      const payload = {};

      expect(
        cities(undefined, {
          type: 'ADD_CITY',
          payload
        })
      ).toEqual([payload]);
    });

    it('should return the payload for the `REMOVE_CITY` action', () => {
      const payload = 10;

      expect(
        cities([{ cityId: payload }, { cityId: 2 }], {
          type: 'REMOVE_CITY',
          payload
        })
      ).toEqual([{ cityId: 2 }]);
    });
  });

  describe('error', () => {
    it('should return the initial state by default', () => {
      expect(error('foo', {})).toEqual('foo');
    });

    it.each([
      [null, 'ADD_CITY_LOADING'],
      [ADD_CITY_ERROR, 'ADD_CITY_ERROR']
    ])('should return `%s` for the %p action', (expected, type) => {
      expect(error(undefined, { type })).toBe(expected);
    });
  });

  describe('loading', () => {
    it('should return the initial state as `false`', () => {
      expect(loading(undefined, {})).toBe(false);
    });

    it.each([
      [true, 'ADD_CITY_LOADING'],
      [false, 'ADD_CITY'],
      [false, 'ADD_CITY_ERROR']
    ])('should return `%s` for the %p action', (expected, type) => {
      expect(loading(undefined, { type })).toBe(expected);
    });
  });
});
