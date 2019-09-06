import { Map } from 'immutable';
import { FAVORITE_ADD_ITEM, FAVORITE_DELETE_ITEM } from '../utils/constants';

import BeerDataRecord from '../utils/BeerDataRecord';

export const favoriteInitialState = Map({});

const favorite = (state = favoriteInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FAVORITE_ADD_ITEM: {
      const { itemData } = payload;
      const { id } = itemData;
      const item = BeerDataRecord(itemData);
      return state.set(id, item);
    }
    case FAVORITE_DELETE_ITEM: {
      const { itemId } = payload;

      return state.delete(itemId);
    }
    default:
      return state;
  }
};

export default favorite;
