import {
  FAVORITE_ADD_ITEM,
  FAVORITE_DELETE_ITEM,
  APP_LOCAL_STORAGE_FAVORITE_KEY
} from '../utils/constants';
import convertFavoriteToImmutable from '../utils/convertFavoriteToImmutable';
import BeerDataRecord from '../utils/BeerDataRecord';
import LocalStorage from '../utils/LocalStorage';

const defaultFavoriteStorage = {};
const localStorage = new LocalStorage(
  APP_LOCAL_STORAGE_FAVORITE_KEY,
  defaultFavoriteStorage
);

export const favoriteInitialState = convertFavoriteToImmutable(
  localStorage.appLocalStorage
);

const favorite = (state = favoriteInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FAVORITE_ADD_ITEM: {
      const { itemData } = payload;
      const { id } = itemData;
      const item = BeerDataRecord(itemData);
      const newState = state.set(id, item);
      localStorage.appLocalStorage = newState.toJS();
      return newState;
    }
    case FAVORITE_DELETE_ITEM: {
      const { itemId } = payload;
      const newState = state.delete(itemId);
      localStorage.appLocalStorage = newState.toJS();
      return newState;
    }
    default:
      return state;
  }
};

export default favorite;
