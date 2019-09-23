import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getCatalogBeerData from './getCatalogBeerData';
import {
  CATALOG_BEER__GET_REQUEST,
  CATALOG_BEER__GET_FAILURE,
  CATALOG_BEER__GET_SUCCESS
} from '../utils/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test getCatalogBeerData Action', () => {
  test('creates CATALOG_BEER__GET_REQUEST and CATALOG_BEER__GET_SUCCESS when fetching  has been done', () => {
    const data = [{ id: 'a' }, { id: 'b' }];

    window.fetch.mockResponseOnce(JSON.stringify(data));

    const expectedActions = [
      {
        type: CATALOG_BEER__GET_REQUEST
      },
      {
        type: CATALOG_BEER__GET_SUCCESS,
        payload: { data }
      }
    ];

    const store = mockStore({});

    return store.dispatch(getCatalogBeerData({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('creates CATALOG_BEER__GET_REQUEST and CATALOG_BEER__GET_FAILURE when fetching  has error', () => {
    const errorMessage = 'test fetch error';

    window.fetch.mockRejectOnce(new Error(errorMessage));

    const expectedActions = [
      {
        type: CATALOG_BEER__GET_REQUEST
      },
      {
        type: CATALOG_BEER__GET_FAILURE,
        payload: { errorMessage }
      }
    ];

    const store = mockStore({});

    return store.dispatch(getCatalogBeerData({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
