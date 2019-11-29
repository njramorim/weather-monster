import React from 'react';
import { mount } from 'enzyme';
import { PureCloseButton as CloseButton } from './';

describe('<CloseButton>', () => {
  const wrapper = mount(<CloseButton value={100} onClick={jest.fn()} />);

  it('should render a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should trigger onClick when CloseButton is clicked', () => {
    expect(wrapper.props().onClick).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(wrapper.props().onClick).toHaveBeenCalled();
  });

  it('should have a default value for prop onClick', () => {
    const wrapper = mount(<CloseButton value={100} />);
    expect(wrapper.props().onClick('foo')).toBe('foo');
  });
});
