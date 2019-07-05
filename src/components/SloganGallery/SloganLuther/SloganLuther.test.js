import React from 'react';
import { shallow } from 'enzyme';
import SloganLuther from './SloganLuther';

describe('Test <SloganLuther/> component', () => {
  const wrapper = shallow(<SloganLuther />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
