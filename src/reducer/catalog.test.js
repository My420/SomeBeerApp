import {
  CATALOG_BEER__GET_REQUEST,
  CATALOG_BEER__GET_FAILURE,
  CATALOG_BEER__GET_SUCCESS
} from '../utils/constants';
import catalog, { catalogInitialState } from './catalog';
import convertApiDataToImmutable from '../utils/convertApiDataToImmutable';

describe('test catalog reducer', () => {
  test('should return InitialState', () => {
    expect(catalog(undefined, {})).toEqual(catalogInitialState);
  });
  test('should correct process CATALOG_BEER__GET_REQUEST action ', () => {
    const action = {
      type: CATALOG_BEER__GET_REQUEST
    };
    expect(catalog(catalogInitialState, action)).toEqual(
      catalogInitialState.set('isLoading', true)
    );
  });

  test('should correct process  CATALOG_BEER__GET_FAILURE action ', () => {
    const action = {
      type: CATALOG_BEER__GET_FAILURE,
      payload: { errorMessage: `error error` }
    };

    const expectedState = catalogInitialState.merge({
      isLoading: false,
      isError: true,
      errorMessage: action.payload.errorMessage
    });

    expect(catalog(catalogInitialState, action)).toEqual(expectedState);
  });

  test('should correct process  CATALOG_BEER__GET_SUCCESS action ', () => {
    const action = {
      type: CATALOG_BEER__GET_SUCCESS,
      payload: { data: [{ id: 'a' }, { id: 'b' }] }
    };

    const expectedData = convertApiDataToImmutable(action.payload.data);

    const expectedState = catalogInitialState.merge({
      isLoaded: true,
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: expectedData
    });
    expect(catalog(catalogInitialState, action)).toEqual(expectedState);
  });
});
