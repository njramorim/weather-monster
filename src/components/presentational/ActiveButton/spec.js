import React from 'react';
import { shallow } from 'enzyme';

import { ActiveButton } from './';

const INPUT_ID = 123;
describe('<ActiveButton>', () => {
  const wrapper = shallow(<ActiveButton id={INPUT_ID} />);

  it('Should render an input with the provided id', () => {
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
  });
});
