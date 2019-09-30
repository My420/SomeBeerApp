import React from 'react';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
import { CartButton } from './CartButton';

describe('test <CartButton /> component', () => {
  const cartData = Map({ '23': { id: 23 } });
  const addMock = jest.fn();
  const delMock = jest.fn();

  describe('test component when item is in the cart', () => {
    const itemData = { id: '23' };

    const wrapper = shallow(
      <CartButton
        itemData={itemData}
        cartData={cartData}
        addItemToCart={addMock}
        deleteItemFromCart={delMock}
      />
    );

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render IconCartSvg component', () => {
      expect(wrapper.find('IconCartSvg')).toHaveLength(1);
    });

    test("should render correct 'Delete' on button", () => {
      expect(wrapper.find('span.cartText').text()).toBe('Delete');
    });

    test('should call deleteItemFromCart prop func when user click on the button', () => {
      wrapper.find('Button').simulate('click');
      expect(delMock.mock.calls.length).toBe(1);
      expect(delMock.mock.calls[0][0]).toBe(itemData.id);
    });
  });

  describe('test component when item is not in the cart', () => {
    const itemData = { id: '33' };

    const wrapper = shallow(
      <CartButton
        itemData={itemData}
        cartData={cartData}
        addItemToCart={addMock}
        deleteItemFromCart={delMock}
      />
    );

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render IconCartSvg component', () => {
      expect(wrapper.find('IconCartSvg')).toHaveLength(1);
    });

    test("should render correct 'Add to Cart' on button", () => {
      expect(wrapper.find('span.cartText').text()).toBe('Add to Cart');
    });

    test('should call addItemToCart prop func when user click on the button', () => {
      wrapper.find('Button').simulate('click');
      expect(addMock.mock.calls.length).toBe(1);
      expect(addMock.mock.calls[0][0]).toEqual(itemData);
    });
  });
});
