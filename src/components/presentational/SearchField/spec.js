import React from 'react';
import { PureSearchField as SearchField } from './';
import { shallow } from 'enzyme';

describe('<SearchField>', () => {
  const wrapper = shallow(<SearchField />);

  it('should render a <form> and <input> tag', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});
