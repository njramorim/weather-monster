import axios from 'axios';
import {
  fetchAddCity,
  loadingAddCity,
  addCityError,
  addCity,
  removeCity
} from '../action-creators';

const dispatch = jest.fn();

afterEach(() => {
  dispatch.mockClear();
  dispatch.mockReset();
});

describe('fetchAddCity', () => {
  it('should dispatch the loading action', async () => {
    await fetchAddCity('1', [0, 1], 'foo')(dispatch);
    expect(dispatch).toHaveBeenCalledWith(loadingAddCity());
  });

  it('should dispatch the error action', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('error'));
    await fetchAddCity()(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(addCityError());
  });

  it('should dispatch the add action', async () => {
    jest.spyOn(axios, 'get').mockReturnValue({});
    await fetchAddCity()(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith(addCity());
  });

  it('should dispatch the remove action with correct payload', () => {
    const wrapRemoveCity = func => func('foo');
    const removeImplementation = payload => removeCity(payload);
    const mockFn = jest.fn(removeImplementation);
    const value = wrapRemoveCity(mockFn);

    expect(mockFn).toHaveBeenCalled();
    expect(value).toEqual({ payload: 'foo', type: 'REMOVE_CITY' });
  });
});
