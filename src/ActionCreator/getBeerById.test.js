import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getBeerById from './getBeerById';
import {
  BEER_ID__GET_REQUEST,
  BEER_ID__GET_FAILURE,
  BEER_ID__GET_SUCCESS
} from '../utils/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test getBeerById Action', () => {
  test('creates BEER_ID__GET_REQUEST and BEER_ID__GET_SUCCESS when fetching  has been done', () => {
    const data = [{ id: 'a' }, { id: 'b' }];

    window.fetch.mockResponseOnce(JSON.stringify(data));

    const expectedActions = [
      {
        type: BEER_ID__GET_REQUEST
      },
      {
        type: BEER_ID__GET_SUCCESS,
        payload: { data }
      }
    ];

    const store = mockStore({});

    return store.dispatch(getBeerById()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('creates BEER_ID__GET_REQUEST and POPULAR_BEER__GET_FAILURE when fetching  has error', () => {
    const errorMessage = 'test fetch error';

    window.fetch.mockRejectOnce(new Error(errorMessage));

    const expectedActions = [
      {
        type: BEER_ID__GET_REQUEST
      },
      {
        type: BEER_ID__GET_FAILURE,
        payload: { errorMessage }
      }
    ];

    const store = mockStore({});

    return store.dispatch(getBeerById()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
