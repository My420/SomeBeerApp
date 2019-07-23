import {
  POPULAR_BEER__GET_REQUEST,
  POPULAR_BEER__GET_FAILURE,
  POPULAR_BEER__GET_SUCCESS
} from '../utils/constants';
import popularBeer, { popularBeerInitialState } from './popularBeer';

describe('test popularBeer reducer', () => {
  test('should correct process  POPULAR_BEER__GET_REQUEST action ', () => {
    const action = {
      type: POPULAR_BEER__GET_REQUEST
    };
    expect(popularBeer(popularBeerInitialState, action)).toEqual(
      popularBeerInitialState.set('isLoading', true)
    );
  });

  test('should correct process  POPULAR_BEER__GET_REQUEST action ', () => {
    const action = {
      type: POPULAR_BEER__GET_FAILURE,
      payload: { errorMessage: `error error` }
    };

    const expectedState = popularBeerInitialState.merge({
      isLoading: false,
      isError: true,
      errorMessage: action.payload.errorMessage
    });

    expect(popularBeer(popularBeerInitialState, action)).toEqual(expectedState);
  });

  test('should correct process  POPULAR_BEER__GET_REQUEST action ', () => {
    const action = {
      type: POPULAR_BEER__GET_SUCCESS,
      payload: { data: [{ id: 'a' }, { id: 'b' }] }
    };

    const expectedData = {
      a: { id: 'a' },
      b: { id: 'b' }
    };

    const expectedState = popularBeerInitialState.merge({
      isLoaded: true,
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: expectedData
    });
    expect(popularBeer(popularBeerInitialState, action)).toEqual(expectedState);
  });
});
