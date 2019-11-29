import React from 'react';
import { mount } from 'enzyme';

import { PureActiveButton } from './';

const INPUT_ID = 123;
describe('<ActiveButton>', () => {
  const wrapper = mount(<PureActiveButton id={INPUT_ID} />);

  it('should render a radio input with the provided id', () => {
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
    expect(wrapper.find('input[type="radio"]').props().id).toBe(INPUT_ID);
  });

  it('should have a default value for prop onChange', () => {
    expect(wrapper.props().onChange).toBeDefined();
    expect(wrapper.props().onChange('foo')).toBe('foo');
  });
});
