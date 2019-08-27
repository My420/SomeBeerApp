import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_SET_ITEM_AMOUNT
} from '../utils/constants';

import { addToCart, deleteFromCart, changeCartItemAmount } from './cart';

describe('test cart actions', () => {
  test('should create an action to add a item to cart', () => {
    const data = 'test';

    const expectedAction = {
      type: CART_ADD_ITEM,
      payload: {
        itemData: data
      }
    };

    expect(addToCart(data)).toEqual(expectedAction);
  });

  test('should create an action to delete  item from cart', () => {
    const id = '123';

    const expectedAction = {
      type: CART_DELETE_ITEM,
      payload: {
        itemId: id
      }
    };

    expect(deleteFromCart(id)).toEqual(expectedAction);
  });

  test('should create an action to change item amount in cart', () => {
    const id = '123';
    const amount = 22;

    const expectedAction = {
      type: CART_SET_ITEM_AMOUNT,
      payload: {
        itemId: id,
        amount
      }
    };

    expect(changeCartItemAmount(id, amount)).toEqual(expectedAction);
  });
});
