import { Map } from 'immutable';
import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_SET_ITEM_AMOUNT
} from '../utils/constants';

import cart, { cartInitialState, cartItemRecord } from './cart';

describe('test cart reducer', () => {
  test('should return InitialState', () => {
    expect(cart(undefined, {})).toEqual(cartInitialState);
  });

  test('should correct process  CART_ADD_ITEM action ', () => {
    const testItem = {
      id: 'test'
    };

    const action = {
      type: CART_ADD_ITEM,
      payload: {
        itemData: testItem
      }
    };

    const state = cart(cartInitialState, action);

    expect(state.has(testItem.id)).toBeTruthy();
    expect(state.get(testItem.id).amount).toBe(1);
    expect(state.get(testItem.id).item.id).toBe(testItem.id);
  });

  test('should correct process  CART_DELETE_ITEM action ', () => {
    const initialState = Map({
      test1: 'test item 1',
      test2: 'test item 2',
      test3: 'test item 3'
    });

    const action = {
      type: CART_DELETE_ITEM,
      payload: {
        itemId: 'test2'
      }
    };

    const state = cart(initialState, action);

    expect(state.has('test1')).toBeTruthy();
    expect(state.has('test2')).toBeFalsy();
    expect(state.has('test3')).toBeTruthy();
  });

  test('should correct process  CART_SET_ITEM_AMOUNT action ', () => {
    const initialState = Map({
      test1: cartItemRecord({
        amount: 1
      }),
      test2: cartItemRecord({
        amount: 21
      })
    });

    const action = {
      type: CART_SET_ITEM_AMOUNT,
      payload: {
        itemId: 'test1',
        amount: 33
      }
    };

    const state = cart(initialState, action);

    expect(state.get('test1').amount).toBe(33);
    expect(state.get('test2').amount).toBe(21);
  });
});
