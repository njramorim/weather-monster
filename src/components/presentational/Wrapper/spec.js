import React from 'react';
import { PureWrapper as Wrapper } from './';
import { shallow } from 'enzyme';

describe('<Wrapper>', () => {
  const wrapper = shallow(<Wrapper>foo</Wrapper>);

  it('should render a <div> with the provided children', () => {
    expect(wrapper.find('div').text()).toBe('foo');
  });
});
