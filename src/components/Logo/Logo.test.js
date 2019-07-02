import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';
import { SHOP_NAME } from '../../utils/constants';

describe('Test <Logo/> component', () => {
  const wrapper = shallow(<Logo />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render <div> with className = logo ', () => {
    expect(wrapper.find('div.logo')).toHaveLength(1);
  });

  test('should render <h1> with className = text, inside <div>', () => {
    expect(wrapper.find('div.logo').find('h1.text')).toHaveLength(1);
  });

  test('component should show shop name', () => {
    expect(wrapper.find('h1.text').text()).toBe(SHOP_NAME);
  });
});
