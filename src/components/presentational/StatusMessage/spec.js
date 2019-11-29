import React from 'react';
import { PureStatusMessage as StatusMessage } from './';
import { shallow } from 'enzyme';

describe('<StatusMessage>', () => {
  const wrapper = shallow(<StatusMessage message={'foo'} />);

  it('should render a p with the provided text', () => {
    expect(wrapper.find('p').text()).toBe('foo');
  });
});
