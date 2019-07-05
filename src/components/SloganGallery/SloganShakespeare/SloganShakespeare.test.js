import React from 'react';
import { shallow } from 'enzyme';
import SloganShakespeare from './SloganShakespeare';

describe('Test <SloganShakespeare/> component', () => {
  const wrapper = shallow(<SloganShakespeare />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
