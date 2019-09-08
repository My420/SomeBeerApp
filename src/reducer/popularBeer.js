import { Record, List } from 'immutable';
import {
  POPULAR_BEER__GET_REQUEST,
  POPULAR_BEER__GET_FAILURE,
  POPULAR_BEER__GET_SUCCESS
} from '../utils/constants';
import convertApiDataToImmutable from '../utils/convertApiDataToImmutable';

const ReducerState = Record({
  isLoaded: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
  data: List([])
});

export const popularBeerInitialState = ReducerState();

const popularBeer = (state = popularBeerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POPULAR_BEER__GET_REQUEST:
      return state.set('isLoading', true);
    case POPULAR_BEER__GET_FAILURE:
      return state.merge({
        isLoading: false,
        isError: true,
        errorMessage: payload.errorMessage
      });
    case POPULAR_BEER__GET_SUCCESS: {
      const data = convertApiDataToImmutable(payload.data);
      return state
        .merge({
          isLoaded: true,
          isLoading: false,
          isError: false,
          errorMessage: ''
        })
        .set('data', data);
    }
    default:
      return state;
  }
};

export default popularBeer;
