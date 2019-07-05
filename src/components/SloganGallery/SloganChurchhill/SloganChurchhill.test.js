import React from 'react';
import { shallow } from 'enzyme';
import SloganChurchhill from './SloganChurchhill';

describe('Test <SloganChurchhill/> component', () => {
  const wrapper = shallow(<SloganChurchhill />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
