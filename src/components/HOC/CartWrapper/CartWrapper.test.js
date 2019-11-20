import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { mount } from 'enzyme';
import withCart from './CartWrapper';
import cart, { cartInitialState } from '../../../reducer/cart';

describe('Test withCart HOC', () => {
  const TestComp = () => {
    return <p>My Component</p>;
  };

  const ComponentWrapper = withCart(TestComp);
  const store = createStore(combineReducers({ cart }), {});

  const wrapper = mount(
    <Provider store={store}>
      <ComponentWrapper test="test" anotherOne="anotherOne" />
    </Provider>
  );

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correct name for ComponentWrapper component', () => {
    const component = wrapper.find('CartWrapper(TestComp)');
    expect(component).toHaveLength(1);
  });

  test('should render TestComp inside ComponentWrapper component', () => {
    const component = wrapper.find('CartWrapper(TestComp)').find('TestComp');
    expect(component).toHaveLength(1);
  });

  test('ComponentWrapper should pass props through to TestComp component', () => {
    const component = wrapper.find('TestComp');
    expect(component.prop('test')).toBe('test');
    expect(component.prop('anotherOne')).toBe('anotherOne');
  });

  test('TestComp component should have correct cartData prop', () => {
    const component = wrapper.find('TestComp');
    expect(component.prop('cartData')).toEqual(cartInitialState);
  });

  test('addItemToCart prop in TestComp component should be function', () => {
    const component = wrapper.find('TestComp');
    expect(typeof component.prop('addItemToCart')).toBe('function');
  });

  test('deleteItemFromCart prop in TestComp component should be function', () => {
    const component = wrapper.find('TestComp');
    expect(typeof component.prop('deleteItemFromCart')).toBe('function');
  });

  test('changeCartItemAmount prop in TestComp component should be function', () => {
    const component = wrapper.find('TestComp');
    expect(typeof component.prop('changeCartItemAmount')).toBe('function');
  });
});
