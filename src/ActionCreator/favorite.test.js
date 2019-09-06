import { FAVORITE_ADD_ITEM, FAVORITE_DELETE_ITEM } from '../utils/constants';

import { addToFavorite, deleteFromFavorite } from './favorite';

describe('test favorite actions', () => {
  test('should create an action to add a item to favorite', () => {
    const data = 'test';

    const expectedAction = {
      type: FAVORITE_ADD_ITEM,
      payload: {
        itemData: data
      }
    };

    expect(addToFavorite(data)).toEqual(expectedAction);
  });

  test('should create an action to delete item from favorite', () => {
    const id = '123';

    const expectedAction = {
      type: FAVORITE_DELETE_ITEM,
      payload: {
        itemId: id
      }
    };

    expect(deleteFromFavorite(id)).toEqual(expectedAction);
  });
});
