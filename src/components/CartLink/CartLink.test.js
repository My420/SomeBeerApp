import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable';
import { CartLink } from './CartLink';
import { CART } from '../../utils/constants';

describe('Test <CartLink /> component', () => {
  const cart = Map({
    a: 1,
    b: 2
  });

  const wrapper = shallow(<CartLink cartData={cart} />);

  test('should correct render <CartLink /> component ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render tag <span>  with className = container', () => {
    expect(wrapper.find('span.container')).toHaveLength(1);
  });

  test('should render tag <span>  with className = amount, inside container', () => {
    expect(wrapper.find('span.container').find('span.amount')).toHaveLength(1);
  });

  test('should render cart items amount', () => {
    expect(wrapper.find('span.amount').text()).toBe(`${cart.size}`);
  });

  test('should render tag <span>  with className = name, inside container', () => {
    expect(wrapper.find('span.container').find('span.name')).toHaveLength(1);
  });

  test('should render correct cart link text', () => {
    expect(wrapper.find('span.name').text()).toBe(CART);
  });
});
