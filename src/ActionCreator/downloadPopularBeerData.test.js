import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import downloadPopularBeerData from './downloadPopularBeerData';
import {
  POPULAR_BEER__GET_REQUEST,
  POPULAR_BEER__GET_FAILURE,
  POPULAR_BEER__GET_SUCCESS
} from '../utils/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test downloadPopularBeerData Action', () => {
  test('creates POPULAR_BEER__GET_REQUEST and POPULAR_BEER__GET_SUCCESS when fetching  has been done', () => {
    const data = [{ id: 'a' }, { id: 'b' }];

    window.fetch.mockResponseOnce(JSON.stringify(data));

    const expectedActions = [
      {
        type: POPULAR_BEER__GET_REQUEST
      },
      {
        type: POPULAR_BEER__GET_SUCCESS,
        payload: { data }
      }
    ];

    const store = mockStore({});

    return store.dispatch(downloadPopularBeerData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('creates POPULAR_BEER__GET_REQUEST and POPULAR_BEER__GET_FAILURE when fetching  has error', () => {
    const errorMessage = 'test fetch error';

    window.fetch.mockRejectOnce(new Error(errorMessage));

    const expectedActions = [
      {
        type: POPULAR_BEER__GET_REQUEST
      },
      {
        type: POPULAR_BEER__GET_FAILURE,
        payload: { errorMessage }
      }
    ];

    const store = mockStore({});

    return store.dispatch(downloadPopularBeerData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
