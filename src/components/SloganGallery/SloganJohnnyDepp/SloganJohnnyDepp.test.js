import React from 'react';
import { shallow } from 'enzyme';
import SloganJohnnyDepp from './SloganJohnnyDepp';

describe('Test <SloganJohnnyDepp/> component', () => {
  const wrapper = shallow(<SloganJohnnyDepp />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
