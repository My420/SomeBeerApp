import { Map } from 'immutable';
import { FAVORITE_ADD_ITEM, FAVORITE_DELETE_ITEM } from '../utils/constants';

import favorite, { favoriteInitialState } from './favorite';

describe('test favorite reducer', () => {
  test('should return InitialState', () => {
    expect(favorite(undefined, {})).toEqual(favoriteInitialState);
  });

  test('should correct process  FAVORITE_ADD_ITEM action ', () => {
    const testItem = {
      id: 'test'
    };

    const action = {
      type: FAVORITE_ADD_ITEM,
      payload: {
        itemData: testItem
      }
    };

    const state = favorite(favoriteInitialState, action);

    expect(state.has(testItem.id)).toBeTruthy();
    expect(state.get(testItem.id).id).toBe(testItem.id);
  });

  test('should correct process  FAVORITE_DELETE_ITEM action ', () => {
    const initialState = Map({
      test1: 'test item 1',
      test2: 'test item 2',
      test3: 'test item 3'
    });

    const action = {
      type: FAVORITE_DELETE_ITEM,
      payload: {
        itemId: 'test2'
      }
    };

    const state = favorite(initialState, action);

    expect(state.has('test1')).toBeTruthy();
    expect(state.has('test2')).toBeFalsy();
    expect(state.has('test3')).toBeTruthy();
  });
});
