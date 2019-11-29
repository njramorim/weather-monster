import React from 'react';
import { PureSimpleText as SimpleText } from './';
import { shallow } from 'enzyme';

describe('<SimpleText>', () => {
  const wrapper = shallow(<SimpleText text={'foo'} />);

  it('should render a p with the provided text', () => {
    expect(wrapper.find('p').text()).toBe('foo');
  });
});
