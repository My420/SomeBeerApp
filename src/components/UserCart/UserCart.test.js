import React from 'react';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
import { UserCart } from './UserCart';

describe('test <UserCart /> component', () => {
  const changeMock = jest.fn();
  const delMock = jest.fn();

  const data = Map({
    1: {
      amount: 1,
      item: { id: 1, image_url: 'test_url1', name: 'test name 1' }
    },

    2: {
      amount: 1,
      item: { id: 2, image_url: 'test_url2', name: 'test name 2' }
    }
  });

  const emptyData = Map({});

  describe('test component when cardData is not empty', () => {
    const wrapper = shallow(
      <UserCart
        cartData={data}
        changeCartItemAmount={changeMock}
        deleteItemFromCart={delMock}
      />
    );
    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test(`should render ${data.size} CartCard components`, () => {
      const components = wrapper.find('CartCard');
      expect(components).toHaveLength(data.size);
    });

    test('should render first CartCard component with correct props', () => {
      const component = wrapper.find('CartCard').first();
      expect(component.prop('data')).toEqual(data.get('1'));
      expect(component.prop('changeAmount')).toEqual(changeMock);
      expect(component.prop('deleteCard')).toEqual(delMock);
    });

    test('should render second CartCard component with correct props', () => {
      const component = wrapper.find('CartCard').last();
      expect(component.prop('data')).toEqual(data.get('2'));
      expect(component.prop('changeAmount')).toEqual(changeMock);
      expect(component.prop('deleteCard')).toEqual(delMock);
    });

    test('should render proceed button with correct props', () => {
      const component = wrapper.find('Button');
      expect(component.prop('children')).toBe('Proceed to checkout');
      expect(component.prop('disabled')).toBeTruthy();
    });
  });

  describe('test component when cardData is empty', () => {
    const wrapper = shallow(
      <UserCart
        cartData={emptyData}
        changeCartItemAmount={changeMock}
        deleteItemFromCart={delMock}
      />
    );
    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should not render proceed button', () => {
      const component = wrapper.find('Button');
      expect(component).toHaveLength(0);
    });

    test('should render ListGroupItem with correct props', () => {
      const component = wrapper.find('ListGroupItem');
      expect(component).toHaveLength(1);
      expect(component.prop('className')).toBe('empty');
      expect(component.prop('children')).toBe('is empty.');
    });
  });
});
