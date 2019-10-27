import React from 'react';
import { shallow } from 'enzyme';
import CartPage from './CartPage';

describe('test <CartPage /> component', () => {
  const wrapper = shallow(<CartPage />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
