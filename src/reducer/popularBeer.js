import { Record, OrderedMap } from 'immutable';
import arrayToObj from '../utils/arrayToObj';

import {
  POPULAR_BEER__GET_REQUEST,
  POPULAR_BEER__GET_FAILURE,
  POPULAR_BEER__GET_SUCCESS
} from '../utils/constants';
import BeerDataRecord from '../utils/BeerDataRecord';

const ReducerState = new Record({
  isLoaded: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
  data: new OrderedMap({})
});

export const popularBeerInitialState = new ReducerState();

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
      let data = payload.data.map(elem => {
        return new BeerDataRecord({ elem });
      });

      data = arrayToObj(payload.data);

      return state.merge({
        isLoaded: true,
        isLoading: false,
        isError: false,
        errorMessage: '',
        data
      });
    }
    default:
      return state;
  }
};

export default popularBeer;
