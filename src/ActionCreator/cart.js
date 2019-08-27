import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_SET_ITEM_AMOUNT
} from '../utils/constants';

export const addToCart = itemData => {
  return {
    type: CART_ADD_ITEM,
    payload: {
      itemData
    }
  };
};

export const deleteFromCart = itemId => {
  return {
    type: CART_DELETE_ITEM,
    payload: {
      itemId
    }
  };
};

export const changeCartItemAmount = (itemId, amount) => {
  return {
    type: CART_SET_ITEM_AMOUNT,
    payload: {
      itemId,
      amount
    }
  };
};
