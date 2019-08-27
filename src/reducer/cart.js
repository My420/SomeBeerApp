import { Record, Map } from 'immutable';
import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_SET_ITEM_AMOUNT
} from '../utils/constants';

import BeerDataRecord from '../utils/BeerDataRecord';

export const cartInitialState = Map({});

export const cartItemRecord = Record(
  {
    amount: 0,
    item: null
  },
  'cartItemRecord'
);

const cart = (state = cartInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ADD_ITEM: {
      const { itemData } = payload;
      const { id } = itemData;
      const item = cartItemRecord({
        amount: 1,
        item: BeerDataRecord(itemData)
      });

      return state.set(id, item);
    }
    case CART_DELETE_ITEM: {
      const { itemId } = payload;

      return state.delete(itemId);
    }
    case CART_SET_ITEM_AMOUNT: {
      const { itemId, amount } = payload;
      const newItem = state.get(itemId).set('amount', amount);

      return state.set(itemId, newItem);
    }

    default:
      return state;
  }
};

export default cart;
