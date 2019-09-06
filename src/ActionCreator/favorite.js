import { FAVORITE_ADD_ITEM, FAVORITE_DELETE_ITEM } from '../utils/constants';

export const addToFavorite = itemData => {
  return {
    type: FAVORITE_ADD_ITEM,
    payload: {
      itemData
    }
  };
};

export const deleteFromFavorite = itemId => {
  return {
    type: FAVORITE_DELETE_ITEM,
    payload: {
      itemId
    }
  };
};
