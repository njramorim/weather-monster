import React from 'react';
import { PureHeadLine as HeadLine } from './';
import { shallow } from 'enzyme';

describe('<HeadLine>', () => {
  const wrapper = shallow(<HeadLine />);

  it('should render a <h1> as default tag', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
