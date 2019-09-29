import {
  BEER_ID__GET_REQUEST,
  BEER_ID__GET_FAILURE,
  BEER_ID__GET_SUCCESS
} from '../utils/constants';
import beerItem, { beerItemInitialState } from './beerItem';
import BeerDataRecord from '../utils/BeerDataRecord';

describe('test beerItem reducer', () => {
  test('should return InitialState', () => {
    expect(beerItem(undefined, {})).toEqual(beerItemInitialState);
  });
  test('should correct process BEER_ID__GET_REQUEST action ', () => {
    const action = {
      type: BEER_ID__GET_REQUEST
    };
    expect(beerItem(beerItemInitialState, action)).toEqual(
      beerItemInitialState.set('isLoading', true)
    );
  });

  test('should correct process  BEER_ID__GET_FAILURE action ', () => {
    const action = {
      type: BEER_ID__GET_FAILURE,
      payload: { errorMessage: `error error` }
    };

    const expectedState = beerItemInitialState.merge({
      isLoading: false,
      isError: true,
      errorMessage: action.payload.errorMessage
    });

    expect(beerItem(beerItemInitialState, action)).toEqual(expectedState);
  });

  test('should correct process  CATALOG_BEER__GET_SUCCESS action ', () => {
    const action = {
      type: BEER_ID__GET_SUCCESS,
      payload: { data: [{ id: 'a' }] }
    };

    const expectedData = BeerDataRecord(action.payload.data[0]);

    const expectedState = beerItemInitialState.merge({
      isLoaded: true,
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: expectedData
    });
    expect(beerItem(beerItemInitialState, action)).toEqual(expectedState);
  });
});
